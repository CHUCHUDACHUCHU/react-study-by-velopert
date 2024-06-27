import React from "react";

const SecondComponentByFunc = (props) => {
  return (
    <div>
      <span>This is SecondComponentByFunc</span>
      <p>This is SecondComponentByFunc props</p>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default SecondComponentByFunc;
