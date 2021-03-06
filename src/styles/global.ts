import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }

  #root {
    margin: 0 auto;
    --primaryLightColor: #9b4a10;
  }

  body {
    background-color: #fff;
  }
`
