import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import StartPage from "./pages/StartPage";
import QuizAppLayout from "./QuizAppLayout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizAppLayout />}>
            <Route index element={<StartPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
