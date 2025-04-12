import React from "react";
import counterStore from "../store/countStore";

const CountBox = () => {
  const { count } = counterStore();

  return (
    <div>
      <h2>countBox: {count}</h2>
    </div>
  );
};

export default CountBox;
