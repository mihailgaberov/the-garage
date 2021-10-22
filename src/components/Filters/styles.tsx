import styled from "styled-components";

export const Container = styled.div`
  label {
    color: #9b4a10;
    font-weight: bold;
    margin-left: .5em;
  }

  .custom-radio {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }

  .custom-radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #9b4a10;
    border-radius: 50%;
  }

  .custom-radio:hover input ~ .checkmark {
    background-color: #9b4a10;
    opacity: .75;
  }

  .custom-radio input:checked ~ .checkmark {
    background-color: #9b4a10;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-radio input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-radio .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`
