import styled from "styled-components";

interface StyledArrowProps {
  direction: string;
}

export const StyledArrow = styled.i<StyledArrowProps>`
  border: solid grey;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 5px;
  transform: ${props => props.direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg);' }
`
