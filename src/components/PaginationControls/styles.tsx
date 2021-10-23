import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 586px;
  
  .current-count {
    font-size: 1em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-items: flex-end;
    justify-content: flex-end;
    line-height: 100%;
    padding: 0;
    
    &:first-child {
      text-align: right;
    }
  }
  
  .separator {
    font-size: 2em;
    font-weight: bold;
  }
  
  .total-count {
    font-size: 2em;
    color: #afafaf;
    font-weight: bold;
  }
  
  .text {
    display: flex;
    align-content: start;
    height: 1.875em;
    margin-left: .3em;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .controls {
    width: 4.5em;
    display: flex;
    justify-content: space-between;
    margin-left: 1.5em;
    
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`
