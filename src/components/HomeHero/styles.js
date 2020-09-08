import styled from 'styled-components'

export const HeroContainer = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  background-color: #000000;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0px 0px 0px 40px;
    button {
      width: 180px;
    }
    input {
      width: 50%;
      margin-bottom: 15px;
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font: normal normal normal 80px Lobster;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font: normal normal 300 25px/48px Tajawal;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
`
