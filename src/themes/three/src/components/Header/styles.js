import styled, { css } from 'styled-components'
export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  position: fixed;
  width: 100%;
  z-index: 1001;
  box-sizing: border-box;
`
export const InnerHeader = styled.div`
  width: 91%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`
export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
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
      width: 170px;
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
export const Menu = styled.div`
`
export const DeliverDetailsContainer = styled.div`
  ${({ isSearchBarVisiable }) => isSearchBarVisiable && css`
    margin-right: 260px;
    ${props => props.theme?.rtl && css`
      margin-right: initial;
      margin-left: 260px;
    `}
  `}
`
export const DeliveryDetailsInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid ${props => props.theme.colors.secundary};
`
export const DeliveryDetailsInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;

  p {
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
`

export const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background-color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 20px;

  svg {
    color: ${props => props.theme.colors.white};
    font-size: 20px;
  }

  p {
    margin: 0px;
    color: ${props => props.theme.colors.white};
  }
`
