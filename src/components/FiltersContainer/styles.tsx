import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10em 10em;
  grid-template-rows: auto;
  grid-gap: 1em;
  transition: all 1s;
  
  button {
    background: none;
    border: none;
    color: darkgray;
    text-align: left;
    cursor: pointer;
  }
  
  @media only screen and (min-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 20em;
  }
`
