import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  ${({ home }) => home
    ? css`
      border-bottom: 0px solid;
      `
    : css`
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    `
  } 
  background-color: #fff;

  @media (min-width: 850px) {
    height: 70px;
  }

  @media (min-width: 1200px) {
    height: 90px;
  }

`
export const InnerHeader = styled.div`
  display: flex;
  color: #000;
  justify-content: space-between;
  width: 96%;
  margin:auto;
`

export const LogoHeader = styled.div`
  cursor: pointer;
  img {
    width: 35px;
    margin: 0;
    vertical-align: middle;
    @media (min-width: 768px) {
      width: 120px;
      height: 45px;
      margin-top: 10px;
    }
    @media (min-width: 1024px) {
      width: 150px;
      height: auto;
    }
    @media (min-width: 1200px) {
      width: 180px;
      height: auto;
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
  font-size: .86rem;
  line-height: 26px;
  color: #333;
  cursor: pointer;
  text-transform: uppercase;
  padding: 6px 11px;
  max-width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  `}

  @media (min-width: 1200px) {
    padding: 11px 15px;
    font-size: 1rem;
  }

`

export const SubMenu = styled(InnerHeader)`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
export const CenterHeader = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  padding: 0 15px;

  #select-input {
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .86rem;
    border: none;
    @media (min-width: 768px) {
      border: 1px solid ${props => props.theme.colors.primary};;
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
    justify-content: space-around;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
    max-width: 50%;
    #select-input {
      height: 48px;
      width: auto;
    }
  }
`
export const HeaderOptions = styled.div`
  display: flex;
  margin-right: 15px;
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 78%;
  }
`
export const OrderTypes = styled.div`
  #list {
    width: 100%;
    top: 33px;
      @media (min-width: 1200px) {
      top: 40px;
    }
  }  
`

export const PopoverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96%;
  align-items: center;
  margin: 10px auto 0;
  padding: 5px 0;
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  
  .address-popover {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  .moment-popover {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }

`
