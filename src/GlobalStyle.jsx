import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Signika Negative', sans-serif;
    }

    @media screen and (max-device-width: 800px) {
    main {
      height: 100vh;
      width: 100vw;
    }
  }
`;
