import React from "react";
import styled from "styled-components";
import { range } from "../../helpers/helpers";

interface Props {
  pin: string;
}

const PinDisplay: React.FC<Props> = ({ pin }) => {
  return (
    <>
      {range(4).map(d => (
        <Digit key={d}>{pin.length > d ? <i>*</i> : ""}</Digit>
      ))}
    </>
  );
};

export default PinDisplay;

const Digit = styled.div`
  text-align: center;
  font-size: 4rem;
  position: relative;
  color: #003c8f;

  /* :after {
    background: #003c8f;
    border-radius: 0.125rem;
    bottom: 0;
    content: "";
    height: 0.25rem;
    left: 0;
    position: absolute;
    width: 100%;
  } */

  :empty {
    opacity: 0.5;
  }
`;
