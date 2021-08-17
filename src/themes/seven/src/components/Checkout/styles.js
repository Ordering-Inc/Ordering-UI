import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 20px;
  flex-wrap: wrap;
`

export const BusinessDetailsContainer = styled(UserDetailsContainer)`
  div {
    h1 {
      text-transform: capitalize;
      margin: 0px;
      font-size: 24px;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin-bottom: 242px;
  }
`

export const DriverTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h1 {
    margin: 20px 0px;
  }
`

export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0px 10px;
  padding: 0;
  box-sizing: border-box;
  button {
    width: 100%;
    padding: 5px 20px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const WarningMessage = styled.div`
  width: 100%;
  height: fit-content;
  max-height: fit-content;
  min-height: 150px;
  background-color: #F2BB40;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: 10px;
  position: relative;

  svg {
    position: absolute;
    font-size: 30px;
    top: 0;
    left: 0;
    margin: 11px;
    ${props => props.theme?.rtl && css`
        right: 0;
        left: initial;
    `}
  }

  h1 {
    font-size: 20px;
    margin: 0px 60px;
    text-align: center;
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;

  img {
    width: 300px;
  }
`

export const CartsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  @media (min-width: 381px) {
    width: 80%;
  }
`

export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const LeftPanel = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    height: 100vh;
    overflow-y: scroll;
  }
`
export const RightPanel = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.secundaryBackground};
  position: relative;

  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    height: 100vh;
    overflow-y: scroll;
  }
`
export const PanelTop = styled.div`
  padding: 6%;
`

export const PanelBottom = styled.div`
  padding: 6%;
`
export const PageTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  span {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
    padding-bottom: 3px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

export const SectionTitle = styled.div`
  margin: 0px 10px 0px 0px;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  font-weight: bold;
  text-transform: uppercase;
`
export const SectionInfo = styled.div`
  p {
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    color: #212629;
  }
`
export const Hr = styled.div`
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '10px'};
  background: ${({ color }) => color ? `${color}` : '#DDDDDD'};
`
