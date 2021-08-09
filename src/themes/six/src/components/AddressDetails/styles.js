import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    line-height: 21px;
    color: #495057;
    font-weight: 300;
  }
  button {
    font-size: 12px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  h4 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    color: #000000;
    margin: 14px 0;
  }
`

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  svg {
    color: #F2BB40;
    margin-left: 5px;
    font-size: 24px;
    cursor: pointer;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: initial;
    `}
  }
  span {
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: initial;
    `}
  }

  @media (min-width: 425px) {
    font-size: 18px;
    span {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
