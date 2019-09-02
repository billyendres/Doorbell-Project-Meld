import React from "react";
import Welcome from "../Welcome";
import GlobalStyle from "../GlobalStyle";
import AgentProvider from "../AgentContext";
import { ErrorScreen, LoadingScreen } from "../Modal";

const App = () => {
  return (
    <>
      <AgentProvider
        fallback={ErrorScreen}
        loading={LoadingScreen}
        timeout={5000}
      >
        <GlobalStyle />
        <Welcome />
      </AgentProvider>
    </>
  );
};

export default App;
