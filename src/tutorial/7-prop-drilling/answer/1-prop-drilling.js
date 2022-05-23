import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => {
        return person.id !== id;
      });
    });
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

// <List> sebenernya gak butuh removePerson, tapi si <SinglePerson> butuh.
// jadi untuk ngirim ke <SinglePerson> kita passing ke dulu ke List, karena <SinglePerson> merupakan bagian dari <List>
const List = ({ people, removePerson }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </React.Fragment>
  );
};

// karena udah di spread ...person
// kita tinggal ambil property yang mau dipake di parameter SinglePerson-nya

// disini kita passing lagi si removePerson nya.
// baru dimasukin ke button yg butuh func itu
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
