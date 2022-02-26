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

export const CountdownTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;

  span {
    &:first-child {
      font-size: 30px;
      font-weight: bold;
      color: ${props => props.theme.colors.primary}
    }
    &:last-child {
      font-size: 24px;
      color: #DBDCDB;
      cursor: pointer;
      :hover {
        color: ${() => darken(0.07, '#DBDCDB')} !important;
      }
      :active {
        color: ${() => darken(0.09, '#DBDCDB')} !important;
      }
    }
  }

`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Section = styled.div`
  width: 50%;
`

export const SectionHero = styled(Section)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SectionContent = styled(Section)`
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
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
