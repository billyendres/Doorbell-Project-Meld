import React from "react";
import Welcome from "../Welcome";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

const App = () => {
  return (
    <Wrap>
      <GlobalStyle />
      <Welcome />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  body {
    margin: 0;
  }
`;
