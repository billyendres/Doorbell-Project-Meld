import React from "react";
import Welcome from "../Welcome";
import styled from "styled-components";

const Wrap = styled.div`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <Wrap>
      <Welcome />
    </Wrap>
  );
};

export default App;
