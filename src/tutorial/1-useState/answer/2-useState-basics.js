import React, { useState } from "react";

// useState merupakan salah satu Hooks dari React
// in order to use Hooks, the component first name must be in Uppercase
// in this scenario, we use -- UseStateBasisc. notice that the Use is Uppercase
const UseStateBasics = () => {
  // console.log(useState());
  // title = previous title value
  // setTitle = pengubah title value. biasanya function
  // useState('title') = default title
  const [title, setTitle] = useState("Random Title");

  const changeTitleHandler = () => {
    // console.log(title);
    if (title === "Random Title") {
      setTitle("Changed");
    } else {
      setTitle("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={changeTitleHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
