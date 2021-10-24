import styled from "styled-components";

interface StyledArrowProps {
  direction: string;
  isEnabled: boolean;
}

export const StyledArrow = styled.i<StyledArrowProps>`
  border: solid ${props => props.isEnabled ? '#569cd6' : '#efefef'};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
  margin-top: ${props => props.direction === 'down' ? '-10px' : '10px'};
  transform: ${props => props.direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg);' }
`
