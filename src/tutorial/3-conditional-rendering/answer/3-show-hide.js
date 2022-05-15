import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Item />}
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>width : {width}</h2>
    </div>
  );
};

export default ShowHide;
