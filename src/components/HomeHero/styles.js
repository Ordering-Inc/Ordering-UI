import styled, { css } from 'styled-components'

export const HeroContainer = styled.div`
  width: 100%;
  /* uncomment if there is a header */
  /* height: calc(100vh - 45px); */
  height: 100vh;
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
      width: 98%;
      margin-bottom: 15px;
    }
    @media (max-width: 480px) {
      font-size: 40px;
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
  @media (max-width: 480px) {
    font-size: 40px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font: normal normal 300 25px/48px Tajawal;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const WrapInput = styled.label`
  input {
    cursor: pointer;
  }
  ${({ withIcon }) => withIcon && css`
    position: relative;
    width: calc(50% + 70px);
    &::before {
      content: "";
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 20px;
      width: 20px;
      background: url(${withIcon}) center / contain no-repeat;
    }
    @media (max-width: 480px) {
      &::before {
        right: 0px;
        bottom: 0px;
      }
    }
  `}
`
