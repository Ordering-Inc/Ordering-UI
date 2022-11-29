import styled from 'styled-components'
import { Button } from '../../styles/Buttons'

export const GoogleButton = styled(Button)`
  border: 1px solid #000000;
  background: transparent;
  border-radius: 7.6px;
  border-color: ${props => props.theme.colors.gold};
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-around;

  &:active {
    background: ${props => props.theme?.colors?.tertiaryContrast || props.theme.colors.primaryContrast};
  }

  svg {
    font-size: 16px;
    color: #1977F2;
  }

  div {
    width: 80%;
    text-align: left;
    font-size: 16px;

    @media (min-width: 576px) {
      width: 50%;
    }
  }
`
