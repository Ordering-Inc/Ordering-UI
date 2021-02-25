import styled, { css } from 'styled-components'

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 20px;
  
  > a {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    cursor: pointer;
  }
`

export const WrapPromoCodeApply = styled.div`
  > p {
    font-weight: 500;
    font-size: 18px;
    margin-top: 0px;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    button {
      padding: 10px 15px;
      color: #181818;
      margin-left: 10px;
      ${props => props.theme?.rtl && css`
        margin-right: 10px;
        margin-left: 0px;
      `}
      &:disabled {
        opacity: 0.5;
      }
    }
  
    input {
      flex: 1;
      padding: 10px 15px;
    }
  }
`
