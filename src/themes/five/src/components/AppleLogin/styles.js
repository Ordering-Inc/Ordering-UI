import styled from 'styled-components'
import { Button } from '../../styles/Buttons'

export const AppleButton = styled(Button)`
  border: 1px solid #000000;
  background: transparent;
  border-radius: 7.6px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-around;

  &:active {
    background: ${props => props.theme.colors.primaryContrast};
  }

  svg {
    font-size: 16px;
    color: ${props => props.theme?.colors.headingColor};
  }

  div {
    width: 80%;
    text-align: left;

    @media (min-width: 576px) {
      width: 50%;
    }
  }
`
