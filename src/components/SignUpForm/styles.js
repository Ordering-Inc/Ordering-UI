import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  background: #f8f8f8;
  display: flex;
  flex: 1;
  flex-wrap: 1;
  position: relative;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 480px) {
    width: 100vw;
    flex-direction: row;
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
  color: #ffffff;
  background: #d81212;
  z-index: 100;
  text-align: center;
  flex: 1;
  height: 100%;
  max-height: 300px;
  /*font: normal normal bold 106px/148px Tajawal;*/
  /*letter-spacing: 1.06px;*/
  @media (min-width: 480px) {
    flex: 1.2;
    max-height: 100%;
    > img {
      width: 200px;
    }
  }
`

export const TitleHeroSide = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 400px;
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
  @media (min-width: 480px) {
    width: 40%;
    > img {
      margin-top: 0;
      width: 200px;
    }
  }
  ${({ withCellphone }) => withCellphone && css`
  justify-content: center;
  > img {
    margin: 0 0 60px 0;
  }
`}
`

export const AlreadyRegistered = styled.div`
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    color: #d81212;
    width: 42px;
    height: 42px;
    margin: 25px;
    border: 3px solid #d81212;
    border-radius: 100%;
    cursor: pointer;
  }
`

export const SignUpWith = styled.div`
  > div {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const FormInput = styled.div`
  width: 100%;
  > * {
    margin: 10px;
    width: 60%;
  }
  > input{
    padding: 15px 20px
  }
  > :last-child {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 65%;
    padding: 8px
  }
  @media (min-width: 480px) {
    > * {
      margin: 10px;
      width: 60%;
    }
    > :last-child {
      margin-top: 50px;
      width: 65%;
    }
  }
`

export const ForgotPassword = styled.div`
  margin: 10px 0;
`
