import { createGlobalStyle } from "styled-components";
import PokemonTtf from "./fonts/Neuton-SC-Light.ttf";
import Cond from "./fonts/Abel-Regular.ttf";
// https://www.1001fonts.com/abel-font.html
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pokemon GB";
    src: url(${PokemonTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: "Cond";
    src: url(${Cond}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
`;

export default GlobalStyle;
