import React from "react";
import styled from "styled-components";
import { range } from "../../helpers/helpers";

interface Props {
  pin: string;
  style?: React.CSSProperties;
}

const PinDisplay: React.FC<Props> = ({ pin, style }) => {
  console.log(pin);

  return (
    <Wrap style={style}>
      {range(4).map(d => (
        <Digit key={d}>
          {pin.length > d && <i style={{ fontStyle: "normal" }}>*</i>}
        </Digit>
      ))}
    </Wrap>
  );
};

export default PinDisplay;

const Wrap = styled.div`
  display: flex;
`;

const Digit = styled.div`
  height: 1em;
  text-align: center;
  font-size: 4rem;
  position: relative;
  flex: 1;
  + div {
    margin-left: 0.5rem;
  }
  :empty {
    opacity: 0.5;
  }

  :after {
    background: currentColor;
    border-radius: 0.125rem;
    bottom: 0;
    content: "";
    height: 0.25rem;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
