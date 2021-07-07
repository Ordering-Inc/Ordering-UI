import styled, { css } from 'styled-components'
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
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
      margin: 0 4rem;
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
  border: 1px solid #000000;
  border-radius: 100px;
  cursor: pointer;
  width: 96px;
  text-align: center;
  margin: 0 15px;
  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.secundaryContrast};
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
