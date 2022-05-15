import React, { useEffect, useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // setiap kita submit sebuah form,
    // web browser secara default akan langsung me refresh page.
    // maka dari itu kita prevent defaultnya
    e.preventDefault();
    if (firstName && email) {
      // kalau pake array bisa gini
      // const person = [];
      // person["name"] = firstName;
      // person["email"] = email;

      // kalau jadi object jadi gini
      // const person = {firstName: firstName, email: email}

      // di ES6 kalau nama key-nya sama dengan nama var/name maka akan otomatis di assign key-nya sesuai dengan nama var nya.
      const person = { id: new Date().getTime.toString(), firstName, email };
      // id nya biar unique kita coba pake getTime di jadiin string, soalnya tiap detik akan nge generate yang pasti unique. gaakan pernah sama.
      // biasanya sih pake uuid buat nge generate unique id mah

      setPeople((people) => {
        // kenapa variadic? karena, tanpa variadic, kita akan nge overwrite data yg udah ke simpan di people.
        // dengan variadic, maka kita akan memasukkan data yg sudah ada ditambah person yang baru.
        return [...people, person];
      });

      // biar input langsung kosong lagi kalau udah sukses submit
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  // jika ada datanya maka true, untuk menampilkan header pas ada datanya
  const isExist = (peeps) => {
    if (peeps.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  // delete data dari list of people
  const removeItem = (id) => {
    let data = people.filter((person) => {
      return person.id != id;
    });
    setPeople(data);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={emailInputHandler} />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>

      {isExist(people) ? <h2>List of People</h2> : ""}

      {people.map((person) => {
        const { id, firstName, email } = person;

        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <button onClick={() => removeItem(id)}>x</button>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
