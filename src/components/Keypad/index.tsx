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
    <Container>
      <Keys onClick={onClick}>1</Keys>
      <Keys>2</Keys>
      <Keys>3</Keys>
      <Keys>4</Keys>
      <Keys>5</Keys>
      <Keys>6</Keys>
      <Keys>7</Keys>
      <Keys>8</Keys>
      <Keys>9</Keys>
    </Container>
  );
};

export default Keypad;

const Keys = styled.button`
  color: #003c8f;
  font-size: 2.25rem;
  font-family: "Varela Round", sans-serif;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const Container = styled.div`
  height: 17rem;
  width: 17rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15%;
`;
