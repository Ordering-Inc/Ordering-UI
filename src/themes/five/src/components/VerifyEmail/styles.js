import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const OtpWrapper = styled.div`
  .otp-container{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;

    .otp-input{
      width: 30px;
      height: 30px;
      padding: 12px 20px;
      border: 2px solid #CCC;
      border-radius: 16px;
      background-color: #FFF;
      outline: none;
      font-size: 20px;
      font-weight: bold;

      &:focus{
        border-color: ${() => darken(0.07, '#CCC')} !important;
      }

      &::placeholder,
      &::-webkit-input-placeholder {
        color: #DBDCDB;
      }
      &:-ms-input-placeholder {
        color: #DBDCDB;
      }
    }
  }
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;

  span {
    &:first-child {
      font-size: 20px;
      font-weight: bold;
    }

    margin-bottom: 10px;
  }
`

export const CountdownTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px auto 0;
  border-radius: 7.6px;
  width: 30%;
  background-color: ${props => props.theme.colors.primary}80;

  span {
    &:first-child {
      font-size: 30px;
      font-weight: bold;
      color: ${props => props.theme.colors.primary}
    }
    &:last-child {
      font-size: 24px;
      color: #FFF;
      cursor: pointer;
      :hover {
        color: ${() => darken(0.07, '#FFF')} !important;
      }
      :active {
        color: #FFF !important;
      }
    }
  }

`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const FormInput = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  input:not(:last-child) {
    margin: 10px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }
`

export const InputWrapper = styled.div`
  position: relative;

  input {
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px !important;
    padding-left: 40px !important;
    margin: 10px 0;
  }
`

export const InputBeforeIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;

  ${props => props.theme.rtl && css`
    right: 14px;
    left: initial;
  `}

  svg {
    font-size: 16px;
    color: #B1BCCC;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;

  div button {
    width: 100%;
  }
`
