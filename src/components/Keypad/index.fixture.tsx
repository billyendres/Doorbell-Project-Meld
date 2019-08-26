import React, { useState } from "react";
import Keypad from ".";

export default () => {
  const [value, setValue] = useState("");
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return <Keypad onChange={onChange} value={value} />;
};
