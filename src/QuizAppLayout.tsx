import { Outlet } from "react-router";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles";

export default function QuizAppLayout() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <Footer />
    </>
  );
}
