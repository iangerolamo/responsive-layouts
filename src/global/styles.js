import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

// indica que o tamanho agora levará em conta até a borda --
// ou seja, o width será a soma do conteúdo com a borda e o padding.

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;
