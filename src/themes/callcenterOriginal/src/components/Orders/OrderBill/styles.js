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
