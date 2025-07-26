import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

// Import Stylesheet
import "./global.css";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
