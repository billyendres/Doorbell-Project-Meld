import React, { useState } from "react";
import styled from "styled-components";

const Keypad = () => {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick(true);
    if (click === true) {
      alert("clicked");
    }
  };

  return (
    <>
      <Keys onClick={onClick}>1</Keys>
      <Keys>2</Keys>
      <Keys>3</Keys>
      <br />
      <Keys>4</Keys>
      <Keys>5</Keys>
      <Keys>6</Keys>
      <br />
      <Keys>7</Keys>
      <Keys>8</Keys>
      <Keys>9</Keys>
    </>
  );
};

export default Keypad;

const Keys = styled.button`
  color: black;
  font-size: 3rem;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border-radius: 20%;
  margin: 0.5rem;
`;
