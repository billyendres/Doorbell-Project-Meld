import React from "react";
import styled from "styled-components";
import { ModalHeader, ModalSubHeader } from "../Welcome/index";
import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

export const ErrorScreen = () => {
  return (
    <Error>
      <ModalContainer>
        <Icon
          path={mdiAlertCircle}
          size={4}
          color="white"
          style={{ fontSize: "2rem", opacity: 0.5, marginTop: "15%" }}
        />
        <ModalHeader>Could not load</ModalHeader>
        <ModalSubHeader>It's probably a hardware issue.</ModalSubHeader>
      </ModalContainer>
    </Error>
  );
};

export const LoadingScreen = () => {
  return (
    <Error>
      <ModalContainer>
        <PacmanLoader
          sizeUnit={"rem"}
          size={3}
          color={"white"}
          css={override}
        />
        <ModalHeader>Loading...</ModalHeader>
        <ModalSubHeader>Imagine what you can.</ModalSubHeader>
      </ModalContainer>
    </Error>
  );
};

const override = css`
  margin-left: 43%;
  margin-bottom: 5%;
  opacity: 0.5;
`;

export const Error = styled.div`
  text-align: center;
  z-index: 1;
  border: none;
  position: fixed;
  background: #003c8f;
  height: 150%;
  width: 100vw;
  color: white;
  top: 0;
  left: 0;
  margin: 0;
`;

const ModalContainer = styled.div`
  margin-top: 15%;
  font-family: "Varela Round", sans-serif;
`;
