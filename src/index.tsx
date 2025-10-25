import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Evolve } from "./screens/Evolve/Evolve";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Evolve />
  </StrictMode>,
);
