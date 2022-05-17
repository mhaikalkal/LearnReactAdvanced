import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // useRef biasanya dipakai untuk ambil node elements.
  // enggak terbatas untuk input aja. div, juga bisa
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ini label H5 " + divContainer.current); // ini ambil node nya
    console.log(divContainer.current.innerHTML); // ambil innerHTML, innerText juga bisa sih
    console.log(refContainer.current); // ini ambil node nya
    console.log(refContainer.current.value); // ini ambil value inputnya
  };

  useEffect(() => {
    refContainer.current.focus(); // ambil nodenya, terus focus.
  });

  console.log(refContainer);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h4 ref={divContainer}>hello world</h4>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
