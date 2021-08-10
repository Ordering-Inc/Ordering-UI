import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    span {
      display: flex;
      align-items: flex-end;
      position: relative;
      p {
        position: absolute;
        height: 15px;
        width: 15px;
        margin: 0;
        background: ${props => props.theme.colors.primary};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        ${props => props.theme?.rtl ? css`
          left: 0;
        ` : css`
          right: 0;
        `}
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    width: 60%;
  `}

  ${({ variant }) => variant === 'moment' && css`
    width: 40%;
  `}
`

export const AddressInput = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  font-size: .86rem;
  line-height: 26px;
  text-transform: uppercase;
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl
    ? css`
      border-left: none;
    `
    : css`
      border-right: none;
    `
  }
  svg {
      color: ${props => props.theme.colors.primary};
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

  @media (min-width: 1200px) {
    padding: 11px 16px;
    font-size: 1rem;
  }
`

export const DeliverytimeInput = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  font-size: .86rem;
  line-height: 26px;
  text-transform: uppercase;
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  svg {
    margin-right: 15px;
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl && css`
      margin-left: 15px;
      margin-right: 0px;
    `}
  }

  @media (min-width: 1200px) {
    padding: 11px 19px;
    font-size: 1rem;
  }
`
