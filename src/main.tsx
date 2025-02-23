import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import QuizPage from "./pages/QuizPage.tsx";
import StartPage from "./pages/StartPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
