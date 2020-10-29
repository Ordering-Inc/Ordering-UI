import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '90vh' : '100vh'};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Side = styled.div`
  display: flex;

  @media (min-width: 1400px) {
    height: calc(100vh - 65px);
  }

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  
`
export const HeroSide = styled(Side)`
  width: 55%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryContrast};
  background-color:  ${props => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: none;
  }
`

export const TitleHeroSide = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 52px;
  }

  h1,
  p {
    margin: 0px;
    color: #FFF;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 32px;
    }
  }
`

export const FormSide = styled(Side)`
  width: 45%;
  flex-direction: column;
  align-items: center;
  margin: auto;

  img {
    width: 200px;
  }
  
  @media (min-width: 769px){
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`

export const LoginWith = styled.div`
  @media (max-width: 360px) {
    font-size: 12px;
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  * {
    padding: 8px 20px;
    margin: 10px;
  }

  input:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }

  @media (max-width: 992px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    input:not(:last-child) {
      margin-bottom: 10px;
    }
    * {
      margin: 20px;
    }
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }

`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

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
    width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};

    @media (max-width: 480px) {
      width: calc(90% - 20px);
    }
  `}

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 410px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`

export const SocialButtons = styled.div`
   width:  ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
   margin-top: 5px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
  @media (max-width: 992px) {
    width: calc(90% - 20px);
  }
  @media (max-width: 768px) {
    width: calc(90% - 40px);
  }
  @media (max-width: 480px) {
    width: calc(100% - 40px);
  }
`
