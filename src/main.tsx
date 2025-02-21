import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StartPage from "./pages/StartPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StartPage />
  </StrictMode>
);
