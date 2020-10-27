import styled, { css } from 'styled-components'
import { Select } from '../../styles/Selects'

export const Header = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 10px auto;
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
    height: 45px;
    margin: 0;
    vertical-align: middle;
  }

  img:nth-child(2) {
    display: none;
  }

  @media (max-width: 576px) {
    img:nth-child(1) {
      display: none;
    }
    img:nth-child(2) {
      display: block;
    }
  }
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 5px;
  }

  > :first-child {
    margin-left: 10px;
  }

  > :last-child {
    margin-right: 10px;
  }

  @media (max-width: 820px) {
    .moment-popover,
    .address-popover {
      display: none;
    }
  }

  @media (max-width: 380px) {
    > * {
      margin: 0px 1px;
    }
    > :last-child {
      margin-right: 2px;
    }
  }
`

export const MenuItem = styled.div`
  display: flex;
`

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  color: #333;
  cursor: pointer;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-radius: 100px;
    padding: 10px 15px;
  `}
`

export const HeaderInvert = styled(Header)`
  width: 100%;
  display: flex;
  background-color: #333;

  & ${Select} {
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.theme.colors.primaryContrast}
  }

  & ${MenuLink} {
    color: #FFF;
  }
`

export const SubMenu = styled(InnerHeader)`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 7px 20px 0px;
    box-sizing: border-box;
    margin: 0px;
  }
`

export const HeaderIcon = styled.div`
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
