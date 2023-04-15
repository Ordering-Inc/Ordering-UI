import styled, { css } from 'styled-components'
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  height: 75px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);
  z-index: 10;
`
export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #000;
  justify-content: space-between;
  width: 93%;
  margin: 15px auto;
  @media (min-width: 1024px) {
    width: 96%;
  }
  @media (min-width: 1405px) {
    width: 93%;
  }
`
export const LogoHeader = styled.div`
  cursor: pointer;
  img {
    width: 35px;
    height: 45px;
    margin: 0;
    vertical-align: middle;
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
  &.left-header {
    > :first-child {
      margin-left: 15px;
      ${props => props.theme?.rtl && css`
        margin-right: 15px;
        margin-left: 0;
      `}
    }
  }
  .moment-popover,
  .address-popover {
    display: none;
  }
  @media (min-width: 821px) {
    .moment-popover,
    .address-popover {
      display: flex;
      font-weight: 600;
    }
    .address-popover{
      margin: 0 2.5rem;
    }
  }
  @media (min-width: 1024) {
    .address-popover{
      margin: 0 3rem;
    }
  }
  @media (min-width: 1200) {
    .address-popover{
      margin: 0 4rem;
    }
  }
`
export const MenuItem = styled.div`
  display: flex;
`
export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  padding: 5px 0;
  color: #333;
  border: 1px solid #000000;
  border-radius: 100px;
  cursor: pointer;
  width: 75px;
  text-align: center;
  margin: 0 7px;
  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.secundaryContrast};
  `}

  @media (min-width: 920px) {
    width: 80px;
    padding: 7px 0;
  }

  @media (min-width: 1200px) {
    width: 85px;
    padding: 5px 0;
    margin: 0 1vw;
  }

`
export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 40px 7px;
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
export const DesktopSubmenu = styled.div`
  display: flex;
  > div {
    font-weight: bold;
    margin: 0 1vw;
  }
`
