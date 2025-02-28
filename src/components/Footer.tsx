import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  a {
    font-family: Roboto, Arial, sans-serif;
    color: #310e6d;
    font-size: 1rem;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        color: #7c16c5;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <a href="https://github.com/VickyPhu/QUIZZA">
          Check out the project at GitHub by VickyPhu
        </a>
      </FooterContainer>
    </footer>
  );
}
