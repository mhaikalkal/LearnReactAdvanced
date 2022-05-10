import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetHandler = () => {
    setValue(0);
  };

  const delayIncrease = () => {
    setTimeout(() => {
      // misal current value = 4, kita click 3x yg ini. 3 detik kemudian akan jadi 7,
      // yang jadi masalah ketika kita udah click 3x, dan sebelum 3 detik ini.
      // kita click yg incerease tanpa timeout. contoh :
      // curr = 4 lalu kita eksekusi => delayIncrease, delayIncrease, increaseBiasa, delayIncrease.
      // hasilnya 7, bukan 8.
      // karena kita ambil value langsung, bukan value current
      // setValue(value + 1);

      // jadi caranya :
      // jadi si prevValue / prevState (terserah namanya apa) ini otomatis mengambil value dari useState
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 5000);
  };

  // contoh set value useState menggunakan function.
  // setSomething(function(x) { return x }) / setSomething((x) => { return x })
  const decreaseHandler = () => {
    setValue((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decreaseHandler}>
          Decrease
        </button>
        <button className="btn" onClick={resetHandler}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={delayIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
