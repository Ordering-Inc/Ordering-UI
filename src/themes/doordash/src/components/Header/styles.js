import styled, { css } from 'styled-components'
import { Select, Selected } from '../../../../../styles/Selects'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .order-type-icon {
    font-size: 18px;
    ${props => !props.theme?.template?.orderTypeIcons && css`
      display: none;
    `}
  }

  .moment-icon {
    font-size: 18px;
    ${props => !props.theme?.template?.momentIcon && css`
      display: none;
    `}
  }

  .addresses-icon {
    font-size: 18px;
    ${props => !props.theme?.template?.addressesIcon && css`
      display: none;
    `}
  }

  ${props => props.home ? css`
    width: 100%;
    background-color: transparent;
    position: absolute;

    & .select-down {
      font-size: 10px;
    }

  & ${Select} {
    background-color: transparent !important;
    border-color: transparent;
    color: ${props => props.theme.colors.primaryContrast}
  }

  & ${Selected} {
    font-size: 17px;
    font-weight: 500;
  }

  & ${MenuLink} {
    color: #FFF;
  }

  `
  : css`
    & ${SubMenu}{
      div{
        color: #333;
      }
    }
  `}
`

export const InnerHeader = styled.div`
  display: flex;
  color: #FFF;
  justify-content: space-between;
  width: 92%;
  margin: 18px auto;
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
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

  img:nth-child(1) {
    display: none;
  }

  @media (min-width: 768px) {
    img:nth-child(1) {
      display: block;
    }
    img:nth-child(2) {
      display: none;
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
  font-size: 17px;
  font-weight: 500;

  &.left-header {
    > :first-child {
      margin-left: 15px;
      ${props => props.theme?.rtl && css`
        margin-right: 15px;
        margin-left: 0;
      `}
    }
  }

  > *:not(:last-child) {
    margin: 0 5px;
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
  color: #333;
  cursor: pointer;
  font-weight: 500;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primaryContrast};
    color: #ABABAB !important;
    font-weight: 500;
    border-radius: 100px;
    padding: 5px 15px;
  `}
`

export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px 7px;
  box-sizing: border-box;
  margin: 0px;

  @media (min-width: 821px) {
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

export const To = styled.div`
  font-weight: 300;
`
