import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const OrderTypeWrapper = styled.span`
  div {
    max-width: 120px;
  }
  @media (min-width: 380px) {
    div{
      max-width: initial;
    }
  }
`
export const SelectedOption = styled.p`
  margin: 0;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 380px) {
      max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: initial;
`
