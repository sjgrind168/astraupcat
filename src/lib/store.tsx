import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { AppState } from "./types";
import { loadState, saveState } from "./storage";

interface Ctx {
  state: AppState;
  setState: (updater: (s: AppState) => AppState) => void;
  reset: () => void;
}

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setStateRaw] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setState = useCallback((updater: (s: AppState) => AppState) => {
    setStateRaw((prev) => updater(prev));
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem("astra-upcat-state-v1");
    setStateRaw(loadState());
  }, []);

  return <AppCtx.Provider value={{ state, setState, reset }}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp must be inside AppProvider");
  return c;
}
