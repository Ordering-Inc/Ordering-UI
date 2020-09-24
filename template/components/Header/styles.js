import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Select } from '../../../src/styles/Selects'

const theme = {
  colors: {
    primary: '#D81313',
    primaryContrast: '#FFF',
    secundary: '#9A9A9A',
    secundaryContrast: '#000'
  }
}

export const Header = styled.div`
  display: flex;
  width: 100%;
  /* background-color: #333; */
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
`
export const LogoHeader = styled.div`
  img {
    height: 45px;
    margin: 0;
    vertical-align: middle;
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
  @media (max-width: 410px) {
    display: none
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
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primaryContrast};
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
    color: ${theme.colors.primaryContrast}
  }

  & ${MenuLink} {
    color: #FFF;
  }
`
