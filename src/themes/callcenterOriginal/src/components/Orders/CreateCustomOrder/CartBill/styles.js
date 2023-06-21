import styled, { css } from 'styled-components'

export const CartBillContainer = styled.div`
  margin-top: 40px;
  > h3 {
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    font-size: 14px;

    td {
      padding: 5px 0;
    }

    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }

    .icon {
      display: flex;
      align-items: center;
      max-height: 25px;
    }
  }
  table.total {
    border-top: 1px solid ${props => props.theme.colors.borderColor};
    margin-top: 10px;
    tr {
      td {
        font-weight: bold;
        font-size: 16px;

        &#loyalty {
          font-weight: normal;
          font-size: 14px;
        }
      }
    }
  }
`
export const CouponContainer = styled.div`
  margin-top: 10px;
`
export const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  height: 20px;
  svg:nth-child(1){
    position: relative;
    top: -1px;
  }
  svg:nth-child(2){
    position: relative;
    top: -3px;
  }
`
