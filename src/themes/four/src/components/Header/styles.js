import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 1px 1px 5px #00000029;
  border: 1px solid #CCC;
  ${({ isHero }) => isHero && css`
    box-shadow: none;
    border: none;
    position: absolute;
  `}
  top: 0px;
  z-index: 1001;

  #select-input {
    border-radius: 8px;
    background-color: transparent !important;
    color: ${props => props.theme.colors.primary} !important;
    border: 1px solid ${props => props.theme.colors.primary};

    svg {
      path {
        fill: ${props => props.theme.colors.primary} !important;
      }
    }

    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}

    #list {
      right: initial;
      ${({ isStorePage }) => !isStorePage && css`
        border-color: ${props => props.theme.colors.primary};
        background-color: #FFF;
        border-radius: 8px;
        #item {
          color: ${props => props.theme.colors.primary};
        }
      `}
    }
  }

  .moment-popover,
  .address-popover {
    > div:first-child {
      color: ${props => props.theme.colors.primary};
    }
  }
  ${({ isStorePage }) => isStorePage && css`
    position: absolute;
    box-shadow: none;
    border: none;

    .address-popover,
    .moment-popover,
    .user-popover {
      > div:first-child {
        color: #FFF;
      }
    }

    #select-input {
      border-radius: 8px;
      color: #FFF !important;
      border: 1px solid #FFF;
      svg {
        path {
          fill: #FFF !important;
        }
      }

      #list {
        svg {
          path {
            fill: initial !important;
          }
        }
      }
    }
  `}
`

export const OrderTypeSelecWrapper = styled.div`
  span {
    >div {
      border-radius: 8px;
      background-color: transparent !important;
      color: ${props => props.theme.colors.primary} !important;
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  ${({ isStorePage }) => isStorePage && css`
    span {
      >div {
        color: #FFF !important;
        border: 1px solid #FFF;
      }
    }
  `}
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
  align-items: center;
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
  color: ${props => props.theme.colors.primary};

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-radius: 8px;
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

  ${({ isStorePage }) => isStorePage && css`
    > div {
      color: #FFF;
    }
  `}

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
