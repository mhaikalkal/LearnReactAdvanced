import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default user");
  // id ini didapat dari Router /person/:id . kalau /person/:user, didalem objectnya juga user bukan id.
  // jadi penamannya terserah kita.
  const { id } = useParams();
  // useParam mengembalikan object, yg isinya id atau terserah kita sewaktu di router.
  // isi id : '', string. Tapi karena biasanya id itu number maka kita parse string ini menjadi id terlebih dahulu.

  useEffect(() => {
    // di kasus nyata, kita fetch ke API menggunakan wildcard-nya dan blabla gitu
    // karena datanya local, maka kita pake cara paling-paling simple
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
