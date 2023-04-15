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
    height: 75px;
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

    @media (min-width: 1200px) {
      width: 180px;
      height: auto;
    }
  }

  img:nth-child(1) {
    display: none;
  }

  @media (min-width: 1200px) {
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
export const OrderTypes = styled.div`
  width: 40%;
  #select-input {
    height: 40px;
    padding: 10px 16px;
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
    background-color: #FAFAFA;
    border-left: none;
    font-weight: normal;
    text-transform: capitalize;
    ${props => props.theme?.rtl && css`
      border-left: 1px solid #DDDDDD;
      border-right: : none;
    `}

    @media (min-width: 1024px) {
      padding: 6px 10px;
      display: flex;
      align-items: center;
      font-size: 14px;
      >div {
        font-size: 14px;
      }
    }

    @media (min-width: 1200px) {
      font-size: 1rem;
      height: 48px;
      >div {
        font-size: 1rem;
      }
    }
  }

  #list {
    width: 100%;
    top: 33px;
      @media (min-width: 1200px) {
      top: 40px;
    }
  } 

  @media (min-width: 1200px) {
    width: unset;
  }
`

export const OptionsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
 `}
`
export const Navlinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  a {
    text-decoration: none;
    margin: 0 5px;
    color: #444444;
    font-size: 1em;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    span.active {
      color: ${props => props.theme.colors.primary};
    }

    @media (min-width: 1200px) {
      margin: 0 7px;
      font-weight: bold;
      font-size: 1.1em;
    }

    @media (min-width: 1440px) {
      margin: 0 10px;
    }
  }


`

export const IconLinks = styled.div`
  display: flex;
  span {
    cursor: pointer;
  }
  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    fill: #444444;
  }
`

export const IconLink = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`
