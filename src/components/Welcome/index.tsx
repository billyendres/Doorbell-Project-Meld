import React, { useState } from "react";
import Keypad from "../Keypad";
import cover from "./coverImg.svg";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiBellRingOutline } from "@mdi/js";
import ModalPopup from "../Modal";
import DoorbellModal from "../Modal/DoorbellModal";
import PinDisplay from "../PinDisplay";

const Welcome = () => {
  const [ring, setRing] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  console.log(code);

  const onChangeCode = (newCode: string) => {
    if (newCode === "1234") {
      setCode("1234");
    } else if (newCode.length >= 4) {
      setCodeError("Invalid pin, try again");
      setTimeout(() => {
        setCodeError("");
        setCode("");
      }, 5000);
    } else {
      setCode(newCode);
    }
  };

  if (code === "1234") {
    return (
      <>
        <ModalPopup />
        <Welcome />
      </>
    );
  }

  if (ring === true) {
    return (
      <>
        <DoorbellModal />
        <Welcome />
      </>
    );
  }

  if (codeError) {
    return (
      <>
        <h1>
          Incorrect code entered. <br /> Try again
        </h1>
        <Welcome />
      </>
    );
  }

  return (
    <>
      <Background>
        <Header>
          Welcome to <br /> MeldCX & AOpen
          <p
            style={{
              fontSize: "20px",
              color: "black",
              marginTop: "2rem",
              marginBottom: "2rem"
            }}
          >
            Here to see someone or drop off a package?
          </p>
          <Doorbell onClick={() => setRing(true)}>
            <Icon
              path={mdiBellRingOutline}
              size={1.7}
              color="#003c8f"
              style={{ paddingRight: "1rem" }}
            />
            RING DOORBELL
          </Doorbell>
        </Header>
        <Keypad onChange={onChangeCode} value={code} />
        {/* <PinDisplay pin={code} /> */}
      </Background>
    </>
  );
};

export default Welcome;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: fixed;
  background-image: url(${cover});
  background-size: 142vw 105vh;
`;

const Header = styled.h1`
  font-size: 50px;
  font-family: "Varela Round", sans-serif;
  color: #003c8f;
  padding-top: 12%;
`;

const Doorbell = styled.button`
  background: white;
  border: 3px solid #003c8f;
  border-radius: 1rem;
  font-size: 40px;
  padding: 1rem;
  color: #003c8f;
  font-family: "Varela Round", sans-serif;
`;
