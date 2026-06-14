import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import DeviceLockGate from "./components/DeviceLockGate";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DeviceLockGate>
      <App />
    </DeviceLockGate>
  </React.StrictMode>
);
