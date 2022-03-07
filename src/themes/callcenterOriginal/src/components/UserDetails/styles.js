import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  h1 {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor}; 
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }

  svg {
    font-size: 24px;
  }

  svg.cancel {
    color: #D81212;
    cursor: pointer;
  }

  span {
    font-size: 13px;
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
  }
`

export const SideForm = styled.div`
  width: 100%;
  margin-top: 25px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
  position: relative;
  > * {
    margin: 5px 0;
  }

  p {
    font-size: 14px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
`

export const UserName = styled.p`
  font-weight: 600;
`

export const ModalIcon = styled.span`
  font-size: 30px;
  cursor: pointer;
  z-index: 2;

  svg{
    /* background: rgba(255,255,255,0.5); */
    border-radius: 50%;
  }

`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  h1 {
    margin: auto;
    font-size: 24px;
  }
  ${({ isAddressFormOpen }) => isAddressFormOpen && css`
      h1{ 
        width: 75%;
      }
  `}
`

export const CountryFlag = styled.div`
  margin-right: 5px;
  .PhoneInputCountryIcon {
    width: 25px;
  }
  .PhoneInputInput {
    display: none;
  }
  .PhoneInputCountrySelect {
    display: none;
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`
