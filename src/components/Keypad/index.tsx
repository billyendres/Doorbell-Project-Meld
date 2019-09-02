import React, { useState } from "react";
import styled from "styled-components";
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

  // console.log(pin);

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
      </Container>
    </>
  );
};

export default Keypad;

const Keys = styled.button`
  color: #003c8f;
  outline: none;
  box-shadow: 0 2px 5px 0 #1565c0;
  cursor: pointer;
  font-size: 2.25rem;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  justify-content: center;
  background: white;
  :after {
    content: "";
    padding-bottom: 100%;
    display: block;
    width: 0;
  }
  :active {
    background: #003c8f;
    color: white;
    position: relative;
    top: 1px;
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
