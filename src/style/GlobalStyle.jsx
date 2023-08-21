import {createGlobalStyle, css} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root{
    font-family: ${({theme})=> theme.baseFont}, sans-serif;
    font-size: 14px;
    scroll-behavior: smooth;
  }
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({theme})=> theme.bgColor};
    background-size: 100vh;
    color: ${({theme})=> theme.textColor};
    scroll-behavior: smooth;
  }

  a{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button{
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  h2{
        font-weight: 700;
        font-size: 22px;
        color: ${({theme})=> theme.textColor};
        position: relative;
        span{
            color: ${({theme})=> theme.baseColor};
            font-family: 'fira code', sans-serif;
        }
        &::after{
            content: '';
            width: 300px;
            height: .5px;
            background: ${({theme})=> theme.textColor};
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            margin-left: 10px;
            @media screen and (max-width: 768px){
            display: none;
            }
        }

        @media screen and (max-width: 768px){
          font-size: 18px;
        }
    }

    .wrapper{
      width: calc(100% - 100px);
      max-width: 1000px;
      margin: 0 auto;
      @media screen and (max-width: 576px){
          width: calc(100% - 20px);
      }
    }
`;

export default GlobalStyle;