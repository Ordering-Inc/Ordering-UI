import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  ${({ variant }) => variant === 'cart' && css`
    span {
      display: flex;
      align-items: center;
      position: relative;
      background-color: ${props => props.theme.colors.primary};\
      padding: 6px 5px;
      p {
        position: relative;
        margin: 0 3px;
        font-size: 18px;
        color: #fff;
      }
      svg {
        color: #fff;
        font-size: 22px;
      }
    }
  `}

  ${({ variant }) => variant === 'address' && css`
    width: 60%;
    @media (min-width: 1024px) { 
      width: auto;
    }
    @media (min-width: 1200px) { 
      min-width: 125px
    }
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
  color: ${props => props.theme.colors.primary};

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
  }

  @media (min-width: 1024px) {
    font-size: 14px;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    height: 48px;
    font-size: 1rem;
    padding-right: 10px;
    span {
      width: 100%;
    }
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
