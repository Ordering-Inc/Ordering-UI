import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #E9ECEF;
`

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 15px auto;
  align-items: center;
`

export const LogoHeader = styled.div`
  cursor: pointer;

  img {
    width: ${props => props.imgW ?? '35px'};
    height: ${props => props.imgH ?? '45px'};
    margin: 0;
    vertical-align: middle;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    @media (min-width: 768px) {
      width: ${props => props.imgW ?? '150px'};
    }
  }

  ${props => !props.disabledResponsive && css`
    img:nth-child(1) {
      display: none;
    }
  `}

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

    ${({ isCustomerMode }) => !isCustomerMode && css`
      margin: 0px 10px;
      height: 40px;
      border-color: #CCC;
      background-color: #CCC !important;
      
      svg {
        font-size: 16px;
      }

      > div:first-child {
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;

        @media (min-width: 993px) {
          padding-left: 13px;
          padding-right: 13px;
        }
      }
    `}
  }

  &.left-header {
    background: #F8F9FA;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    margin: 0 15px;
    flex-grow: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 44px;

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

    > div:first-child {
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
    padding: 0 10px;

    @media (min-width: 1200px) {
      padding: 0 20px;
    }
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
  position: relative;

  @media (min-width: 821px) {
    display: none;
  }
`

export const CustomerInfo = styled.div`
  display: none;
  cursor: pointer;
  flex: 1;
  position: relative;
  @media (min-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      margin: 0;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #909BA9;
      }
      svg {       
        color: #748194; 
        margin: 0;
        font-size: 20px;
        position: absolute;
        right: 0;
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
  font-weight: 600;
  color: ${props => props.theme.colors?.headingColor};
  display: flex;
  align-items: center;
  position: relative;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ isCustomerMode }) => isCustomerMode ? css`
  flex: 0.8;
  ` : css`
    width: 100%;
  `}

  svg {
    color: ${props => props.theme.colors?.lightGray};
    font-size: 16px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
  @media (min-width: 765px) {
    ${({ isCustomerMode }) => !isCustomerMode && css`
      width: 80%;
    `}
  }
  @media (min-width: 820px) {
    ${({ isCustomerMode }) => !isCustomerMode && css`
      width: 100%;
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
    text-align: center;
    white-space: nowrap;
    padding: 0 10px;
  }
`

export const FarAwayMessage = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  top: 100%;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning500};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 6px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;

  left: 5px;
  ${props => props.theme?.rtl && css`
    right: 5px;
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
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
  }

  @media (min-width: 400px) {
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    left: 10px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }
`

export const Divider = styled.div`
  border: 1px solid #DEE2E6;
  height: 100%;
`
export const AddressFormWrapper = styled.div`
  @media (min-width: 450px) {
    margin-top: 20px;
  }
`
