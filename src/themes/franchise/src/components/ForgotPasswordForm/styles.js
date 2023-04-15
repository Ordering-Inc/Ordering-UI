import styled, { css } from 'styled-components'

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: ${({ isPopup }) => isPopup ? '100vh' : 'auto'};

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
  }
  @media (min-width: 992px) {
    height: 100%;
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 992px) {

    margin: auto;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  display: flex;
  flex-direction: column;

  * {
    padding: 8px 20px;
    margin: 10px 6px;
  }

  input:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(95% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(95% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 425px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 16px;
    `};
  }
`
