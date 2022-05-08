import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const changeTitleHandler = () => {
    title = "Hello React";
    // value sudah berubah
    // tapi site nya gak ke render ulang.
    console.log(title);
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

export default ErrorExample;
