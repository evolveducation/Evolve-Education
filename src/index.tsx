import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Evolve } from "./screens/Evolve/Evolve";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "@/app/form/page";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Evolve />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
