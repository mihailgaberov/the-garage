import styled from "styled-components";

export const Container = styled.div`
  label {
    color: var(--primaryLightColor);
    font-weight: bold;
    margin-left: .5em;
  }

  .custom-radio .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  .custom-radio {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    &:hover input ~ .checkmark {
      background-color: var(--primaryLightColor);
      opacity: .75;
    }

    input:checked ~ .checkmark {
      background-color: var(--primaryLightColor);
    }

    input:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: var(--primaryLightColor);
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
`
