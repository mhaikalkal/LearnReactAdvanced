import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // filter dari array people yang id-nya tidak sama dengan id dari event
    // ambil datanya masukin ke variable newPeople.
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  // let peeps = document.querySelector('.item');

  // <> merupakan fragment. jadi bisa banyak tag dalam 1 return
  return (
    <>
      <h2>List of People</h2>
      {people.map((person) => {
        const { id, name } = person;

        // ketika kita mengelola list / array / object.
        // kita membutuhkan sebuah unique key
        // dalam kasus ini id merupakan unique, maka kita set menjadi key tiap person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>delete</button>
          </div>
        );
      })}

      {/*
       * Pakai Arrow func di event
       * kalau misal punya function setPeople() maka akan langsung eksekusi, kalau setPeople tanpa () gaakan eksekusi langsung
       * Agar dieksekusi hanya bila event tersebut dilakukan
       * dalam kasus ini ketika di click baru di eksekusi
       * jika kita tulis tanpa arrow func, maka akan langsung dieksekusi dan terjadi render terlalu banyak
       */}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
      {/* coba pakai inline function */}

      <button className="btn" onClick={() => setPeople(data)}>
        Reset
      </button>
    </>
  );
};

export default UseStateArray;
