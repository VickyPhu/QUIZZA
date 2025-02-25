import { Outlet } from "react-router";
import GlobalStyle from "./styles/GlobalStyles";

export default function QuizAppLayout() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}
