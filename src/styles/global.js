import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    overflow: auto;
  }

  body {
    background: linear-gradient(-45deg, #202020 0%, #191920 100%);
    -webkit-font-smoothing: antialiased;
    color: #333;
    position: relative;

    &::before {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      background: url(${background}) no-repeat center -60px/101vw;
      z-index: -5;

      @media (max-width: 1200px) {
        background: url(${background}) no-repeat center top;
      }
    }

    &, input, button {
      font: 14px Roboto, sans-serif;
    }
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 20px;
  }

  button {
    cursor: pointer;
  }
`;
