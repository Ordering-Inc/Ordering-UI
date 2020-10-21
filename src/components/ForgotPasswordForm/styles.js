import styled from 'styled-components'

export const ForgotPasswordContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 45px);
  font-size: 1.2em;

  @media (min-width: 980px) {
    flex-direction: row;
    min-width: auto;
  }
`

export const HeroSide = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: ${props => props.theme.colors.primary};
  z-index: 100;
  text-align: center;
  flex: 1;
  height: 100%;
  max-height: 300px;
  font-size: 1.3em;

  @media (min-width: 980px) {
    flex: 1.2;
    font-size: 1.2em;
    max-height: 100%;
    width: 100%;
    > img {
      width: 200px;
    }
  }
`

export const TitleHeroSide = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10px;
  font-size: 1em;
  @media (min-width: 980px) {
    flex: 1.2;
    padding: 0 50px;
    > img {
      width: 200px;
    }
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  flex: 1;
  > img {
    width: 139px;
    margin-top: 2vh;
  }
  a {
    text-decoration: none;
    color: #d81212;
  }
  @media (min-width: 980px) {
    width: 50%;
    height: 50%;
    max-height: 100%;
    align-self: center;
    > img {
      margin-top: 0;
      width: 200px;
    }
  }
`

export const FormInput = styled.form`
  width: 100%;
  > * {
    margin: 10px;
    width: 60%;
  }
  > input{
    padding: 15px 20px
  }
  > :last-child {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 67%;
    padding: 8px
  }
  @media (min-width: 980px) {
    > * {
      margin: 10px;
      width: 60%;
    }
    > :last-child {
      margin-top: 10px;
      width: 67%;
    }
  }
`

export const LoginText = styled.div`
  margin: 10px auto;
  width: auto;
`
