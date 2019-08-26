import React, { useState } from "react";
import ModalPopup from "../Modal";
import styled from "styled-components";
import PinDisplay from "../PinDisplay";

import { range } from "../../helpers/helpers";

interface Props {
  onChange: (newCode: string) => void;
  value: string;
}

const Keypad: React.FC<Props> = ({ onChange, value }) => {
  const [pin, setPin] = useState("");
  const addDigit = (digit: number) => {
    onChange(`${value}${digit}`);
  };

  console.log(pin);

  return (
    <>
      <Container>
        {range(1, 10).map((digit: number) => (
          <Keys
            key={digit}
            onClick={event => {
              addDigit(digit);
              setPin("*" + pin);
            }}
          >
            {digit}
          </Keys>
        ))}
        {/* <h1>{pin}</h1> */}
        <PinDisplay pin={pin} />
      </Container>
    </>
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
  margin-top: 0.5rem;
`;

const Container = styled.div`
  height: 17rem;
  width: 17rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15%;
`;
