import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #E9ECEF;
  -webkit-tap-highlight-color: transparent;
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 15px auto;
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

  #select-input {
    div {
      color: ${props => props.theme.colors.darkTextColor};
    }
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  #select-input {
    border-radius: 7.6px;

    #list {
      border-radius: 7.6px;
    }
  }

  &.left-header {
    background: #F8F9FA;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    margin: 0 20px;
    flex-grow: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 821px) {
      border: 1px solid #DEE2E6;
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
      padding: 0 20px;
      margin: 0 70px;
    }
    
    @media (min-width: 1200px) {
      padding: 0 30px;
      margin: 0 100px;
    }

    @media (min-width: 1500px) {
      padding: 0 30px;
      margin: 0 130px;
    }
  }

  > *:not(:last-child) {
    margin: 0 5px;
  }

  > span {
    #select-input {
      background: transparent !important;
    }
  }

  .moment-popover {
    border-left: 1px solid #DEE2E6;
    border-right: 1px solid #DEE2E6;
    height: 100%;
    justify-content: center;
    width: 200px;
    display: none;

    @media (min-width: 1175px) {
      width: 250px;
    }
    
    @media (min-width: 1400px) {
      width: 400px;
    }

    >div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .address-popover {
    flex-grow: 1;
    display: none;
    > div:first-child {
      width: 100%;
    }
  }

  .order-type {
    padding: 0 20px;
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
  font-size: 14px;
  padding: 10px;
  color: #333;
  cursor: pointer;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-radius: 7.6px;
    padding: 11px 15px;
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
        color: #333;
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

export const AddressMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #909BA9;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }
`

export const MomentMenu = styled.div`
  border-left: 1px solid #DEE2E6;
  border-right: 1px solid #DEE2E6;
  height: 100%;
  justify-content: center;
  width: 200px;
  display: none;
  
  @media (min-width: 821px) {
    display: flex;
  }

  @media (min-width: 1175px) {
    width: 250px;
  }

  @media (min-width: 1400px) {
    width: 400px;
  }

  > div {
    cursor: pointer;
    font-size: 14px;
    color: #909BA9;
    display: flex;
    align-items: center;
  }
`
