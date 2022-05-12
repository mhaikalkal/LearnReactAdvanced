import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // use effect mempunyai 2 parameter, dan param ke 2 nya adalah array
  // array-nya disebut dependencyList.
  // isinya sebuah value / kondisi value / apapun yang akan memengaruhi useEffect
  // singkatnya page akan re render ketika value dependencies berubah.

  useEffect(() => {
    console.log(`useEffect ke ${value + 1}`);
    if (value >= 1) {
      document.title = `New Message (${value})`;
    }
  }, [value]);
  // secara default run setiap kiat me re-render.
  // Tapi, kalau kita isi param ke 2 dengan [] array kosong.
  // useEffect hanya akan berjalan sekali diawal render (initial render)

  useEffect(() => {
    console.log(`Page Rendered`);
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
