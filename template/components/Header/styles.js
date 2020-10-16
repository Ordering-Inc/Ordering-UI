import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Select } from '../../../src/styles/Selects'

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

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  color: #333;

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
    justify-content: space-around;
    margin: 0px;
  }
`
