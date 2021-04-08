import styled from 'styled-components'

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 20px;
  
  > a {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
  }
`

export const WrapPromoCodeApply = styled.div`
  button {
    width: 100%;
    &:disabled {
      opacity: 0.5;
    }
    height: 50px;
  }

  input {
    width: 100%;
    padding: 10px 15px;
    background-color: #F6F6F6;
    border: none;
    border-bottom: 1px solid #DBDCDB;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
`
