import styled, { css } from 'styled-components'
import { HeaderInvert } from '../Header/styles'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    span {
      display: flex;
      align-items: flex-end;
      position: relative;
      p {
        position: absolute;
        right: 0;
        height: 15px;
        width: 15px;
        margin: 0;
        background: ${props => props.theme.colors.primary};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    color: #333;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    ${HeaderInvert} & {
      color: #FFF;
    }
  `}

  ${({ variant }) => variant === 'moment' && css`
    color: #333;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    ${HeaderInvert} & {
      color: #FFF;
    }
  `}
`
