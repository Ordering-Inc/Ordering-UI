import styled, { css } from 'styled-components'

export const ResetPasswordContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    height: 100%;
    min-height: calc(100vh - 65px)
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSide = styled(Side)`
  height: calc(40vh - 65px);
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryContrast};
  background-color:  ${props => props.theme.colors.primary};
  padding-bottom: 5px;

  @media (min-width: 992px) {
    width: 55%;
    height: calc(100vh - 65px);
  }
`

export const TitleHeroSide = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 22px;
  }

  p {
    font-size: 13px;
  }

  h1,
  p {
    margin: 0px;
    color: #FFF;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 992px) {
    margin: auto;
    width: 45%;
    font-size: 1em;
  }
`

export const FormInput = styled.form`
  width: 80%;
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
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: calc(80% - 20px)
    }
  `}

  @media (min-width: 425px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    flex-direction: row;
  }
`
