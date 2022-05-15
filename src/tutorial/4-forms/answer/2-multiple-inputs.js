import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  // langsung aja juga bisa
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    // itu apaan [targetName]:targetValue
    // ini merupakan dynamic object keys
    // sama aja kaya assign firstName: firstName, age: age
    // tapi dynamic, jadi apapun key name yang dituju di assign langsung valuenya
    setPerson({ ...person, [targetName]: targetValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };

      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input type="age" id="age" name="age" value={person.age} onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
