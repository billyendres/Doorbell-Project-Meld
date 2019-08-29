import React, { useState, useEffect, useRef } from "react";
import Keypad from "../Keypad";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiBellRingOutline } from "@mdi/js";
import PinDisplay from "../PinDisplay";
import { mdiMusicNoteOutline } from "@mdi/js";
import { mdiLockOpenOutline } from "@mdi/js";

const Welcome = () => {
  const [ring, setRing] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  //provides ref to number value from setTimeout function
  const ringTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (ring) {
      ringTimeout.current = setTimeout(() => {
        setRing(false);
      }, 4000);
    }
    return () => clearTimeout(ringTimeout.current);
  }, [ring]);

  const onChangeCode = (newCode: string) => {
    if (newCode === "1234") {
      setCode("1234");
      setTimeout(() => {
        setCode("");
      }, 4000);
    } else if (newCode.length >= 4) {
      setCodeError("Invalid code entered. Please try again.");
      setCode(newCode);
      setTimeout(() => {
        setCodeError("");
        setCode("");
      }, 4000);
    } else {
      setCode(newCode);
    }
  };

  return (
    <>
      <Wrap>
        <Content>
          {code === "1234" && (
            <Modal>
              <Icon
                path={mdiLockOpenOutline}
                size={4}
                color="white"
                style={{ fontSize: "2rem", opacity: 0.5, marginTop: "15%" }}
              />
              <ModalHeader>Door Unlocked</ModalHeader>
              <ModalSubHeader>Come on in.</ModalSubHeader>
            </Modal>
          )}
          {ring && (
            <Modal>
              <Icon
                path={mdiMusicNoteOutline}
                size={4}
                color="white"
                style={{ fontSize: "2rem", opacity: 0.5, marginTop: "15%" }}
              />
              <ModalHeader>Ding!</ModalHeader>
              <ModalSubHeader>
                The doorbell has rung <br />
                Someone will be with your shortly.
              </ModalSubHeader>
            </Modal>
          )}
          <Header>
            Welcome to <br /> MeldCX & AOpen
            <SubHeader>Here to see someone or drop off a package?</SubHeader>
            <Doorbell onClick={() => setRing(true)}>
              <Icon
                path={mdiBellRingOutline}
                size={1.7}
                color="currentColor"
                style={{ marginRight: "1rem" }}
              />
              Ring Doorbell
            </Doorbell>
          </Header>
        </Content>
        <Sidebar style={{ color: codeError ? "#003c8f" : "white" }}>
          <Keypad onChange={onChangeCode} value={code} />
          <PinDisplay pin={code} style={{ marginTop: "2rem" }} />
          {!!codeError ? (
            <CodeMessage>{codeError}</CodeMessage>
          ) : (
            <CodeMessage>Enter the access code above.</CodeMessage>
          )}
          <Clear
            onClick={() => setCode("")}
            disabled={code === ""}
            style={{
              visibility: codeError ? "hidden" : "visible"
            }}
          >
            Clear
          </Clear>
        </Sidebar>
      </Wrap>
    </>
  );
};

export default Welcome;

const Header = styled.h1`
  font-size: 3.125rem;
  color: #003c8f;
  padding-top: 12%;
`;

const SubHeader = styled.div`
  font-size: 1.25rem;
  color: black;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: 0.25rem solid currentColor;
  border-radius: 1.25rem;
  text-transform: uppercase;
  padding: 1rem 1.5em;
  -webkit-tap-highlight-color: transparent;
`;

const Doorbell = styled(Button)`
  background: white;
  font-size: 1.75rem;
  font-weight: bold;
  color: #003c8f;
  :active {
    background: #003c8f;
    color: white;
  }
`;

const CodeMessage = styled.div`
  font-size: 1.125rem;
  color: inherit;
  margin: 1.75rem 0 0;
  text-align: center;
  text-align: center;
  min-height: 3rem;
`;

const Wrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const Sidebar = styled.div`
  width: ${260 / 16}rem;
  text-align: center;
  margin-left: 12.5rem;
  color: white;
  flex-direction: column;
`;

const Clear = styled(Button)`
  background: transparent;
  font-size: 1.5rem;
  line-height: 1.2rem;
  height: 3.5rem;
  color: white;
  align-self: center;
  box-sizing: border-box;
  margin: 0 auto;
  flex: 0;
  :disabled {
    opacity: 0.5;
  }
  :active {
    background: white;
    color: #003c8f;
    border-color: white;
  }
`;

const Modal = styled.div`
  text-align: center;
  z-index: 1;
  border: none;
  position: fixed;
  opacity: 0.9;
  background: #003c8f;
  height: 150%;
  width: 100vw;
  color: white;
  top: 0;
  left: 0;
`;

export const ModalHeader = styled.div`
  font-size: 3rem;
  margin-top: 3rem;
`;

export const ModalSubHeader = styled.div`
  font-size: 1.5rem;
`;
