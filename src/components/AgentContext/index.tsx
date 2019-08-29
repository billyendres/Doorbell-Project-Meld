import React, {
  useState,
  useEffect,
  createContext,
  ReactNode,
  FC
} from "react";

import Agent from "@meldcx/agent";

const AgentContext = createContext<Agent>("");

interface Props {
  fallback?: ReactNode;
  loading?: ReactNode;
  timeout?: number;
}

const AgentProvider: FC<Props> = ({ timeout, loading, children, fallback }) => {
  const [agent, setAgent] = useState<Agent | undefined>(undefined);
  const [showFallback, setShowFallback] = useState(false);

  // Load agent
  useEffect(() => {
    (async () => {
      const agent = new Agent();

      try {
        await Promise.race([
          new Promise((_, reject) => setTimeout(reject, timeout || 30000)),
          agent.onReadyAsync()
        ]);
        setAgent(agent);
      } catch {
        setShowFallback(true);
      }
    })();
  }, []);

  if (agent) {
    return (
      <AgentContext.Provider value={agent}>{children}</AgentContext.Provider>
    );
  }

  return (showFallback ? fallback : loading) || null;
};

export const Context = AgentContext;

export default AgentProvider;
