import React, { useState } from "react";
import { data } from "./birthday-data";

const Birthday = () => {
  let filteredData = data.filter(function (person) {
    let today = new Date();
    let strToday = String(today).substring(4, 10);

    let date = new Date(person.birthday);
    let strDate = String(date).substring(4, 10);

    // jika tanggal dan bulan sama, maka tampilkan
    if (strDate.includes(strToday)) {
      return true;
    }

    // jika tidak sama, maka jangan tampilkan
    return false;
  });

  const [people, setPeople] = useState(filteredData);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearItem = () => {
    setPeople([]);
  };

  const resetItem = () => {
    setPeople(filteredData);
  };

  const calculateAge = (dob) => {
    let today = new Date();
    let datetext = dob.substr(0, 10);
    let birthdate = new Date(datetext);

    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <>
      <h3>{`Today is ` + people.length + ` peoples birthday.`}</h3>
      {people.map((person) => {
        const { id, name, birthday } = person;

        return (
          <div key={id} className="item">
            <div>
              <h4>{name}</h4>
              <h4>{calculateAge(birthday) + " years"}</h4>
            </div>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        );
      })}

      <button className="btn" onClick={clearItem}>
        Clear all notifications
      </button>
      <button className="btn" onClick={() => resetItem()}>
        Reset
      </button>
    </>
  );
};

export default Birthday;
