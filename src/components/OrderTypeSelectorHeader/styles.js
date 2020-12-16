import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  p {
    margin: 0;
    max-width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
  } 
  @media (min-width: 360px) {
    p{
      max-width: initial;
    }
  }
  
`

export const OrderTypeWrapper = styled.span`
  div {
    max-width: 120px;
  }
  @media (min-width: 360px) {
    div{
      max-width: initial;
    }
  }
`
