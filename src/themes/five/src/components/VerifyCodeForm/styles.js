import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  margin: 0px auto;
  max-width: 350px;

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 18px;
  }

  > button {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0px;
    transition: all 0.3s linear;

    &:hover {
      background-color: ${props => props.theme.colors.primaryContrast};
    }
  }

  @media (min-width: 576px) {
    max-width: 500px;
  }
`

export const DownTimer = styled.h4`
  text-align: center;
  margin: 0px;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`

export const OtpWrapper = styled.div`
  padding-top: 18px;

  .otp-container {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    
    .otp-input {
      width: 50px !important;
      height: 55px;
      border: 1px solid #DEE2E6;
      border-radius: 7.6px;
      background-color: #FFF;
      outline: none;
      font-size: 20px;
      font-weight: bold; 

      &:focus{
        border-color: ${() => darken(0.07, '#DEE2E6')} !important;
      }

      &::placeholder,
      &::-webkit-input-placeholder {
        color: #B1BCCC;
      }
      &:-ms-input-placeholder {
        color: #B1BCCC;
      }
    }
  }

  @media (min-width: 576px) {
    .otp-container {
      .otp-input {
        width: 100px !important;
        height: 105px;
        font-size: 36px;
      }
    }
  }
`
