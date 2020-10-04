import styled from 'styled-components'

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: 1;
  flex-direction: column;
  height: calc(100vh - 45px);
  font-size: 1.2em;
  @media (min-width: 980px) {
    flex-direction: row;
    min-width: auto;
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
  font-size: 1.3em;
  /*font: normal normal bold 106px/148px Tajawal;*/
  /*letter-spacing: 1.06px;*/
  @media (min-width: 980px) {
    padding: 0 100px;
    flex: 1.2;
    font-size: 1.2em;
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
    width: 40%;
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
