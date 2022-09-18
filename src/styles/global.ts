import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --primary-color: #002846;
    --primary-light: #0076D1;
    --primary-dark: #001D33;

    --secundary-color: #5CC4BD;
    --secundary-ligth: #86f5ed;
    --secundary-dark: #205451;

    --black-color: #000000;
    --White-color: #ffffff;

    --background-color: #ffffff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    color: var(--primary-color)
  }

  h1 {
    font-size: 2.3rem;
  }

  img {
    width: 100%;
  }
`