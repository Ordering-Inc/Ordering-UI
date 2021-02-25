import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    span {
      background-color: ${props => props.theme.colors.primary};
      padding: 8px 15px;
      border-radius: 5px;

      display: flex;
      align-items: center;
      column-gap: 15px;
      p {
      color: #fff;
      margin: 0px;
      }
      svg {
        color: #fff;
        font-size: 24px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  `}

  ${({ variant }) => variant === 'moment' && css`
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  `}

  ${({ isHome }) => isHome && css`
    color: #FFF;
  `}
`
