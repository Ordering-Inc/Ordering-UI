import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    > span {
      cursor: pointer;
      height: 20px;
      padding: 10px 9px;
      display: flex;
      align-items: center;
      background: ${props => props.theme.colors.primary};
      color: #FFFFFF;
      border-radius: 7.6px;

      span {
        margin: 0;
        font-size: 14px;
        ${props => props.theme?.rtl ? css`
          margin-right: 5px;
        ` : css`
          margin-left: 5px;
        `} 
      }
      svg {
        font-size: 17px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    color: ${props => props.isChew ? props.theme.colors?.backgroundPage : props.theme.colors?.headingColor};
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

  `}

  ${({ variant }) => variant === 'moment' && css`
    color: ${props => props.isChew ? props.theme.colors?.backgroundPage : props.theme.colors?.headingColor};
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
      `}
    }
  `}

  ${({ isHome }) => isHome && css`
    color: #FFF;
  `}
`

export const DeliveryType = styled.p`
  user-select: none;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
  color: #909BA9;
`
