import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // jadi kalo mau ngasih if atau conditional di dalem return gabakal bisa.
  // kecuali kita pake short circuit / ternary.

  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // kalau text kosong/ false maka firstValue akan jadi hello world.
  // kalau text ada isinya / true, maka text akan jadi value firstValue.
  // const firstValue = text || "hello world";

  // kalau text kosong maka secondValue kosong, kan && kalo salah satu ya false.
  // kalau text ada isinya / true, secondValue akan jadi hello world.
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{text || "muhammad haikal"}</h1>
      <h1>{text && "hello world"}</h1> */}
      {isError ? (
        <h2>There is an error...</h2>
      ) : (
        <div>
          <h2>The program works just fine!</h2>
          <img src="https://icon-library.com/images/secured-icon/secured-icon-24.jpg" alt="no error occured" />
        </div>
      )}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Click me
      </button>
      {isError && <p>You found me!</p>}
    </>
  );
};

export default ShortCircuit;
