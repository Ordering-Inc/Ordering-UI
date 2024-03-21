import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 85px;
  border-bottom: ${({ headerBorderBottom }) => headerBorderBottom || '1px solid #E9ECEF'};
  background-color: ${({ headerBackgroundColor }) => headerBackgroundColor || ''};

  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    position: sticky;
    top: 0;
    z-index: 1001;
  `}
`

export const InnerHeader = styled.div`
  display: flex;
  color: #FFF;
  justify-content: space-between;
  width: 98%;
  margin: 15px auto;
  align-items: center;
  @media (min-width: 821px){
    margin: auto;
  }
`

export const LogoHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    object-fit: contain;
    margin: 0;
    vertical-align: middle;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

      ${({ theme }) => theme?.layouts?.header?.components?.layout?.type === 'pfchangs' ? css`
        max-height: 55px;
        max-width: 150px;
      ` : css`
      width: ${props => props.imgW ?? '35px'};
      height: ${props => props.imgH ?? '45px'};
      @media (min-width: 768px) {
        width: ${props => props.imgW ?? '150px'};
      }
    `}

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

  ${({ theme }) => theme?.layouts?.header?.components?.layout?.type === 'pfchangs' && css`
    flex-direction: row-reverse;
  `}

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
      /* border: 1px solid #DEE2E6; */
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
      padding: 0 20px;
      /* margin: 0 70px; */
    }

    @media (min-width: 1200px) {
      padding: 0 30px;
      /* margin: 0 100px; */
    }

    @media (min-width: 1500px) {
      padding: 0 30px;
      /* margin: 0 130px; */
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
  color: ${props => props.theme.colors.tertiary || '#ccc'};
  cursor: pointer;

  ${({ highlight }) => highlight && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.tertiary || props.theme.colors.primaryContrast};
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
  color: ${({ theme }) => theme?.colors?.tertiary || 'initial'};
  display: flex;
  align-items: center;
  position: relative;

  ${({ isCustomerMode }) => isCustomerMode ? css`
  flex: 0.8;
  ` : css`
    width: 100%;
  `}

  svg {
    color: ${({ theme }) => theme?.colors?.gold};
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

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${({ theme }) => theme?.colors?.tertiary || 'initial'};
  }

  svg{
    color: ${({ theme }) => theme?.colors?.gold};
    margin-right: 10px;
  }
`
export const DeliveryPickupContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  border-radius: 10px;
  height: 45px;
  background-color: #F4F4F4;

  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    z-index: 1;
    border-radius: 10px;
    min-width: 120px;

    @media (min-width: 992px) {
      min-width: 125px;
    }
  }

  &::after {
    border-radius: 5px;
    height: 100%;
    width: 50%;

    ${({ orderTypeSelected }) => orderTypeSelected === 1 ? css`
        content: "";
        background:  ${({ theme }) => theme.colors.gold};
        position: absolute;
        transition: all 0.2s linear 0s;
        left: 0px;
      ` : css`
        content: "";
        background: ${({ theme }) => theme.colors.gold};
        position: absolute;
        transition: all 0.2s linear 0s;
        left: 50%;
      `
    }
  }

  @media (min-width: 468px) {
    margin-right: 35px;
  }

  @media (min-width: 992px) {
    height: 52px;
  }
`
export const BackIcon = styled.div`
  * {
    color: ${({ theme }) => theme?.colors?.primary};
  }
`
export const GoToMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    padding-right: 20px;
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme?.colors?.tertiary || 'initial'};
  }
  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    top: 4px;
    position: relative;
  }
  @media (min-width: 768px) {
    p {
      font-size: 16px;
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`
export const ColumnDivider = styled.div`
  height: 30px;
  width: 1px;
  background: #fff;
  position: relative;
  right: 20px;
`
