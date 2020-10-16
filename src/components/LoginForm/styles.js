import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: 1;
  flex-direction: column;
  height: auto;
  button{
    box-sizing: content-box;
  }
  @media (min-width: 980px) {
    flex-direction: row;
    min-width: auto;
    height: calc(100vh - 75px);
  }
`

/* export const Triangle = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    border: 100vw solid #d81212;
    border-right: 73vw solid #f8f8f8;
    background: white;
    box-sizing: border-box;
    padding: 0;
  @media (min-width: 480px) {
    width: 50%;
    max-width: 1000px;
    border: 250px solid #d81212;
    border-right: 25vh solid #f8f8f8;
  }
  */
/* &::after {
    content: "";
    height: 100%;
    width: 0;
    /* border: 10px solid #333; */
/* border-top: 50% solid transparent;
    border-bottom: 50% solid transparent;
     border-right:25vh solid blue;
  }
` */

export const HeroSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryContrast};
  background: ${props => props.theme.colors.primary};
  z-index: 100;
  text-align: center;
  flex: 1;
  /* height: 100%; */
  max-height: 300px;
  font-size: 1.7em;
  /*font: normal normal bold 106px/148px Tajawal;*/
  /*letter-spacing: 1.06px;*/
  @media (min-width: 980px) {
    flex: 1.2;
    max-height: 100%;
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
  justify-content: space-around;
  height: 100%;
  padding: 30px 20px;
  flex: 1;
  font-size: 1em;
  > img {
    width: 139px;
    margin-bottom: 15px;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
  @media (min-width: 980px) {
    width: 40%;
    height: auto;
    font-size: 1.2em;
    > img {
      margin-top: 0;
      width: 200px;
    }
  }
  
`

export const NewOnPlatform = styled.div`
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  
  > * {
    color: ${props => props.theme.colors.primary}

    /*width: 42px;
    height: 42px;
    margin: 25px;
    border: 3px solid #d81212;
    border-radius: 100%;
    cursor: pointer;*/
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

  @media (min-width: 980px) {
    > * {
      margin-top: 3px;
      width: 55%;
    }
  }
  @media (max-width: 480px){
    > * {
      width: 70%;
    }
  }
`

export const LoginWith = styled.div`
  > div {
    justify-content: center;
    flex-wrap: wrap;
  }
  font-size: 1.2em;
`

export const FormInput = styled.form`
  width: 100%;
  > * {
    margin: 5px;
    width: 55%;
    padding: 10px 20px
  }
  button {
    margin-top: 10px;
    width: 60%;
    padding: 5px;
  }
  @media (min-width: 980px) {
    > * {
      margin: 10px;
    }
  }
  @media (max-width: 480px){
    > * {
      width: 70%;
    }
    button {
    width: 79%;
  }
  }
`

export const ForgotPassword = styled.div`
  margin: 10px auto;
  width: auto;
`
