import React, { useState } from "react";
import Keypad from ".";

export default () => {
  const [value, setValue] = useState("");
  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  return <Keypad onChange={onChange} value={value} />;
};
