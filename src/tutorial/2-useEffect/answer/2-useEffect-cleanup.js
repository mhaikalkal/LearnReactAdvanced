import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [count, setCount] = useState(1);

  const checkSize = () => {
    setSize(window.innerWidth);
    setCount(count + 1);
  };

  useEffect(() => {
    // gini juga udah berhasil, check size nya.
    // Tapi ketika kita resize sekali, setiap perubahan akan re render.
    // maka hasilnya, eventlistenernya akan jalan setiap perubahan terjadi.
    // contoh: kita resize sekali (100 to 110) --> harusnya resize kedetect sekali.
    // ternyata kedetect sejumlah 10 kali.
    // maka resource yang dipakai aplikasi akan besar (memory leak)
    window.addEventListener("resize", checkSize);
    console.log(`${count} time(s) useEffect`);

    // maka kita lakukan cleanup
    // return () => {
    //   console.log(`${count} time(s) cleanup`);
    //   window.removeEventListener("resize", checkSize);
    // };
    // ini penting ketika kita punya app dengan banyak component.
  }, []);
  // untuk kasus ini yaudah pake dependencies aja. tapi ya gitu, gak efektif

  console.log(`${count} time(s) rendered`);

  return (
    <>
      <h2>Window Width</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
