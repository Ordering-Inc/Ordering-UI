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
  justify-content: space-between;
  margin-bottom: 10px;

  svg {
    font-size: 16px;
    color: #555555;
  }
`
