import React, { useState } from "react";

const UseStateObject = () => {
  const [handphone, setHandphone] = useState({
    name: "Redmi Note 10",
    brand: "Xiaomi",
    price: 2000000,
  });

  // 2. alternative nya bisa kita bikin state sebanyak property objectnya
  // misal:
  // const [name, setName] = useState('Redmi Note 10')
  // const [brand, setName] = useState('Xiaomi')
  // nanti bikin yg handler event-nya lebih banyak lg

  // 1. cara pake spread operator
  // kalau kita cuma ubah si price aja, misal:
  // setHandphone({price:99999})
  // yang lain ke overwrite, dan ilang. cuma ada price aja, maka pake spread operator buat copy
  const changePriceHandler = () => {
    setHandphone({ ...handphone, price: 69420 });
  };

  return (
    <>
      <h3>{handphone.name}</h3>
      <h3>{handphone.brand}</h3>
      <h3>{handphone.price}</h3>
      <button className="btn" onClick={() => changePriceHandler()}>
        Change Price
      </button>
    </>
  );
};

export default UseStateObject;
