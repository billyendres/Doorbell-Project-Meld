import React from "react";
import Keypad from "./Keypad";
import styled from "styled-components";

const Welcome = () => {
  return (
    <Background>
      <Header>Welcome to MeldCX & AOpen</Header>
      <Keypad />
    </Background>
  );
};

export default Welcome;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #191654,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #191654,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Header = styled.h1`
  font-size: 50px;
  color: white;
`;
