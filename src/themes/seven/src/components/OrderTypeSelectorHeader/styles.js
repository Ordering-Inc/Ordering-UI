import styled, { css } from 'styled-components'

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

  @media (min-width: 380px) {
    div{
      max-width: initial;
    }
  }
`

export const SelectedOption = styled.p`
  margin: 0;
  max-width: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    max-width: 120px;
  }

  @media (min-width: 1024px) {
    max-width: unset;
  }

  @media (min-width: 1200px) {
    max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: initial;
`
