import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const WrappMap = styled.div`
  width: 85%;
  margin: auto;

  @media (max-width: 992px) {
    width: 100%;
  }
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    display: block;
    border-radius: 15px;
    -webkit-user-drag: none;
  }
`

export const Text = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    color: #F2BB40;
    margin-left: 5px;
    font-size: 24px;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: initial;
    `}
  }
  span {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: initial;
    `}
  }

  @media (max-width: 580px) {
    font-size: 18px;
  }

  @media (max-width: 410px) {
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
  @media (max-width: 370px) {
    font-size: 14px;
    span {
      font-size: 14px;
    }
  }
`
