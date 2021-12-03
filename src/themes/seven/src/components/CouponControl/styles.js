import styled, { css } from 'styled-components'

export const CouponContainer = styled.div`
  /* width: 80%; */
  /* margin: auto; */
  display: flex;
  justify-content: space-between;
  button {
    margin-left: 5px;
    white-space: nowrap;
    width: 120px;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
    `}
    &:disabled {
      opacity: 0.5;
    }
  }

  input {
    width: calc(100% - 130px);
  }
`
