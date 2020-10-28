import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;

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
    height: calc(50vh - 65px);
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

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`

export const SignUpWith = styled.div`
  @media (max-width: 360px) {
    font-size: 14px;
  }
`

export const FormInput = styled.form`
  width: 70%;
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
    width: calc(70% - 20px);

    @media (max-width: 480px) {
      width: calc(90% - 20px);
    }
  `}

  @media (max-width: 810px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 410px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    flex-direction: column;
  }
`

export const SocialButtons = styled.div`
   width: calc(70% - 20px);
   margin-top: 5px;

  button {
    width: 100%;
    padding: 3px;
    color: #000000;

    img {
      width: 30px;
    }

    span{
      font-size: 0.8em;
    }
  }

  &.popup{
    button{
      width: 79%;
      span{
        padding-left: 10%;
        ${props => props.theme?.rtl && css`
          margin-right: 10%;
          margin-left: 0;
        `}
      }
    }
  }

  @media (max-width: 992px) {
    width: calc(90% - 20px);
  }
`
