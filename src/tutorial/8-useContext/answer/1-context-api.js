import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// Provider, Consumer
// kita harus bungkus root component nya menggunakan Provider.

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // kita assign ke variable si useContext-nya
  // kalau mau ambil property-nya ? ya tinggala pake .
  // contextData.people / contextData.removePerson
  const contextData = useContext(PersonContext);

  return (
    <>
      {contextData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

// untuk menerima removePerson kita tidak perlu mengakses dari List, dengan menggunakan useContext
const SinglePerson = ({ id, name }) => {
  // kalau ini kita ambil object useContext-nya.
  // const { namaProperty }
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
