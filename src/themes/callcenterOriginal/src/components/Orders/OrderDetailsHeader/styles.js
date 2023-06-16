import styled, { css } from 'styled-components'

export const OrderDetailsHeaderContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    h1 {
      width: 100%;
      font-size: 20px;
      margin: 0px;
      font-weight: 700;
    }
    > div {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 14px;
    margin: 0px;
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    > div {
      flex-direction: row;
      align-items: center;
    }
    > div {
      > div {
        margin-bottom: 0px;
      }
    }
  }
`

export const ButtonGroup = styled.div`
  > button {
    position: relative;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
      ` : css`
        margin-right: 0px;
      `}
    }
  }
`

export const UreadMessageAlert = styled.span`
  position: absolute;
  top: -9px;

  ${props => props.theme?.rtl ? css`
    left: -13px;
  ` : css`
    right: -13px;
  `}
  svg {
    font-size: 40px;
    color: ${props => props.theme.colors.primary};
  }
`
export const StripeLink = styled.a`
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
