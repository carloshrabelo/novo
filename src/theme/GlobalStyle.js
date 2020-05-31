import { createGlobalStyle } from "styled-components"
import variables from "./variables"

export default createGlobalStyle`

  :root{
    ${variables}
  }

  *, *::before,*::after{
    box-sizing: border-box;
  }
  html,body{
    height:100%;
    font-family:  ${(props) => props.theme.fonts.join(", ")}; 
    font-size: 16px;
    background-color: ${(props) => props.theme.bg};
  }

  h1, h2, h3, h4, h5, h6{
    margin: 1rem 0;
    text-rendering: optimizelegibility;
  }
  body {
    margin:0;
  }
  #___gatsby {
    &{
    min-height:100%;
      
    }
    > div {
    min-height:100%;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    padding-bottom: 4.5rem;
    overflow: auto;
    @media (min-width: 768px) {
      padding-bottom:0
    }
  }}
  ul{
    padding-left: 0.5rem;
    list-style-type: "-";

    li{
      padding-left: 0.5rem;
    }
  }

  section{
    padding:1rem 0
  }

  strong{
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
  }


  @media print{
    html, body{
      font-size: 9pt;
    }
    ul{
      padding:0
    }
  }
`
