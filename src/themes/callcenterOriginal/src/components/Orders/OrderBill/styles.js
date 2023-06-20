import styled, { css } from 'styled-components'

export const OrderBillContainer = styled.div`
  color: ${props => props.theme.colors.headingColor};
  padding: 15px 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 100%;
    font-size: 14px;
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
    border-top: 1px solid ${props => props.theme.colors.borderColor};
    margin-top: 15px;
    tr {
      font-size: 16px;
      td {
        font-weight: bold;
        padding-top: 10px;
      }
    }
  }
  table.payments {
    margin-top: 15px;
    thead {
      th {
        font-weight: 600;
        font-size: 16px;
        padding-bottom: 5px;
      }
    }
  }
  table.comments {
    margin-top: 20px;
    align-items: center;
  }
  table.spot_number,
  table.vehicle {
    margin-top: 20px;
  }
  table.delivery_option {
    margin-top: 15px;
    thead {
      th {
        font-weight: 600;
        font-size: 16px;
        padding-bottom: 5px;
      }
    }
  }
`
export const RefundButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  > button {
    height: 44px;
  }
`

export const RefundWalletButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  > button {
    height: 44px;
  }
`
export const RefundContainer = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 30px 0;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
  }

  button {
    height: 44px;
  }
`
export const RadioItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    pointer-events: none;
    color: ${props => props.theme.colors.disabled};
  `}

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 13px;
    ` : css`
      margin-left: 13px;
    `}
  }
`
export const RefundAmountWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 28px;
  ` : css`
    margin-left: 28px;
  `}
`

export const RefundReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  label {
    font-size: 14px;
    margin-bottom: 7px;
  }
`
export const Option = styled.div`
  color: ${props => props.theme.colors.secundaryContrast};
  font-size: 14px;
  white-space: nowrap;
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  > span {
    font-size: 14px;
    margin-bottom: 7px;
  }
  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
`
export const ErrorText = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.danger};
  font-size: 16px;
`
