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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.secundaryBackground};

  ${props => props.theme?.rtl
    ? css`
      border-left: none;
    `
    : css`
      border-right: none;
    `
  }
  span {
    width: 75%;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;
  }
  svg {
    margin: 0 5px;
    font-size: .9rem;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 1200px) {
    height: 48px;
    font-size: 1rem;
  }
`

export const DeliverytimeInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.secundaryBackground};
  span {
    width: 75%;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;
  }
  svg {
    margin: 0 5px;
    font-size: .86rem;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 1200px) {
    height: 48px;
    font-size: 1rem;
  }
`
