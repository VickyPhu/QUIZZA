import QuizCard from "../components/QuizCard";
import WelcomeText from "../components/WelcomeText";
import GlobalStyle from "../styles/GlobalStyles";

export default function StartPage() {
  return (
    <>
      <GlobalStyle />
      <WelcomeText />
      <QuizCard />
    </>
  );
}
