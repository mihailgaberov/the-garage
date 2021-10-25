import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 920px) {
    margin: 0 auto;
    width: 1000px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`
