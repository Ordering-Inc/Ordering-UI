import styled, { css } from 'styled-components'
import { Button } from '../../styles/Buttons'

export const FacebookButton = styled(Button)`
  background-color: #EFEFEF;
  border-color: #EFEFEF;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
    font-size: 28px;
    color: #1977F2;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`
