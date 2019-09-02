import React, {
  useState,
  useEffect,
  createContext,
  FunctionComponent,
  ComponentClass,
  FC
} from "react";

import Agent from "@meldcx/agent";

const AgentContext = createContext<any>(undefined);

interface Props {
  fallback?: FunctionComponent | ComponentClass | string;
  loading?: FunctionComponent | ComponentClass | string;
  timeout?: number;
}

const AgentProvider: FC<Props> = ({
  timeout,
  loading: Loading,
  children,
  fallback: Fallback
}) => {
  const [agent, setAgent] = useState<any | undefined>(undefined);
  const [showFallback, setShowFallback] = useState(false);

  // Load agent
  useEffect(() => {
    (async () => {
      try {
        const agent = new Agent();
        await Promise.race([
          new Promise((_, reject) => setTimeout(reject, timeout || 30000)),
          agent.onReadyAsync()
        ]);
        setAgent(agent);
      } catch (e) {
        console.error(e);
        setShowFallback(true);
      }
    })();
  }, []);

  if (agent) {
    return (
      <AgentContext.Provider value={agent}>{children}</AgentContext.Provider>
    );
  }

  return (showFallback ? <Fallback /> : <Loading />) || null;
};

export const Context = AgentContext;

export default AgentProvider;
