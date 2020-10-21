import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: 1;
  flex-direction: row;
  min-width: auto;
  height: calc(100vh - 45px);
  button{
    box-sizing: content-box;
  }
  @media (max-width: 980px) {
   flex-direction: column;
   height: auto;
  }
`

export const HeroSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryConstrast};
  background: ${props => props.theme.colors.primary};
  z-index: 100;
  text-align: center;
  flex: 1.2;
  max-height: 100%;
  font-size: 1.7em;

  @media (max-width: 980px) {
    flex: 1;
    min-height: 300px;
  }
`

export const TitleHeroSide = styled.div`
  color: #FFF;
  z-index: 10;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1em;
  flex: 1.2;
  padding: 0 50px;
  @media (max-width: 980px) {
    padding: 0 10px;
    flex: 1;
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
  justify-content: space-around;
  padding: 30px 20px;
  flex: 1;
  width: 40%;
  height: auto;
  font-size: 1.2em;
  > img {
    margin-top: 0;
    width: 200px;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
  @media (max-width: 980px) {
    font-size: 1em;
    height: 100%;
    width: 100%;
    > img {
      width: 139px;
      margin-bottom: 15px;
  }
  }
  
`

export const AlreadyRegistered = styled.div`
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    color: ${props => props.theme.colors.primary};
    width: 42px;
    height: 42px;
    margin: 25px;
    border: 3px solid ${props => props.theme.colors.primary};
    border-radius: 100%;
    cursor: pointer;
  }
`

export const SocialButtons = styled.div`
   width: 100%;
   margin-top: 5px;
  > * {
    margin-top: 5px;
    margin-bottom: 20px;
    width: 55%;
    padding: 5px;
    color: black;
  }
  button{
      span{
        font-size: 0.8em;
      }
    }
  @media (max-width: 1024px){
    > * {
      width: 80%;
    }
  }
  @media (max-width: 980px) {
    > * {
      margin-top: 5px;
      width: 55%;
    }
  }
`

export const SignUpWith = styled.div`
  > div {
    justify-content: center;
    flex-wrap: wrap;
  }
  font-size: 1.1em;
`

export const FormInput = styled.form`
  width: 100%;
  > * {
    margin: 10px;
    width: 55%;
    padding: 10px 20px
  }
  > button {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 60%;
    padding: 5px;
  }
  span{
    border-radius: 16px;
    margin: 10px 0;
    width: 55%;
  }
  @media (max-width: 1024px) {
    > * {
      width: 80%;
    }
    > button {
      width: 85%;
    }
  }
  @media (max-width: 980px) {
    > * {
      margin: 5px;
      width: 55%;
    }
    > button{
      width: 60%;
      box-sizing: border-box;
    }
  }
`

export const ForgotPassword = styled.div`
  margin: 10px auto;
  width: auto;
`
