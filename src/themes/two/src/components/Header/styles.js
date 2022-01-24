import styled, { css } from 'styled-components'
import { Select } from '../../styles/Selects'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #CCC;

  ${props => props.home ? css`
    background-color: transparent;
    position: absolute;
    border-bottom: none;

    & ${Select} {
      color: #FFF !important;
      background-color: transparent !important;
    }
  `
  : css`
    & ${Select} {
      color: #191919 !important;
      background-color: transparent !important;
    }
  `}

  ${Select} {
    margin: 0 5px;
    border: none;

    p, div {
      font-size: 16px;
    }
    > div:first-child {
      padding: 0px;
    }

    #list {
      background: #FFF;
      border-radius: 8px;
    }
  }
`

export const InnerHeader = styled.div`
  display: flex;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 10px auto;
  position: relative;
`

export const LogoHeader = styled.div`
  img {
    cursor: pointer;
    width: 35px;
    height: 45px;
    margin: 0;
    vertical-align: middle;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    @media (min-width: 768px) {
      width: 150px;
    }
  }

  @media (min-width: 768px) {
    z-index: 10;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const LeftHeader = styled.div`
  align-self: center;
  display: flex;
`

export const RightHeader = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  z-index: 100;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;

  > *:not(:last-child) {
    margin: 0 7px;
  }

  .moment-popover,
  .address-popover {
    display: none;
  }

  @media (min-width: 821px) {
    .moment-popover,
    .address-popover {
      display: flex;
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
  color: #FFF;
  cursor: pointer;

  ${({ highlight }) => highlight && css`
    background-color: #FFF;
    color: ${props => props.theme.colors?.darkGray};
    border-radius: 100px;
    padding: 5px 15px;
  `}

  ${({ home }) => !home && css`
    color: ${props => props.theme.colors?.darkBlack};
  `}
`

export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px 7px;
  box-sizing: border-box;
  margin: 0px;

  @media (min-width: 993px) {
    display: none;
  }
`

export const CustomerInfo = styled.div`
  display: none;
  cursor: pointer;

  @media (min-width: 450px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      height: 30px;
      p {
        color: ${props => props.isHome ? '#FFF' : '#333'};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 50px;

        @media (min-width: 768px) {
          max-width: 70px;
        }
      }
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
        margin-right: 5px;
      }
    }
  }
`

export const UserEdit = styled.div`
  > :first-child{
     margin-bottom: 20px;  
  }
`

export const ToTitle = styled.span`
  color: #191919;
  text-transform: lowercase;
  ${({ home }) => home && css`
    color: #FFF;
  `}
`

export const FarAwayMessage = styled.div`
  pointer-events: none;
  position: absolute;
  cursor: default;
  display: flex;
  align-items: center;
  top: 100%;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning500};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 6px 15px;
  box-sizing: border-box;
  margin: 12px 0px 0px 0px !important;
  min-width: 240px;
  left: 0px;
  ${props => props.theme?.rtl && css`
    right: 0px;
    left: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning500};
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: 10px;
    `}
  }
  span {
    color: #344050;
    font-size: 12px;
    line-height: 18px;
  }

  @media (min-width: 400px) {
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    min-width: 260px;
  }

  @media (min-width: 820px) {
    left: -50%;
    ${props => props.theme?.rtl && css`
      right: -50%;
      left: initial;
    `}
  }
`

export const AddressWrapper = styled.div`
  position: relative;
`
