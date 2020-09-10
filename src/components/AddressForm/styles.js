import styled from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 45%;
    height: 45px;
  }
  @media (max-width: 480px) {
    button {
      width: 49%;
    }
  }
`

export const FormControl = styled.form`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    box-sizing: border-box;
    margin: 10px 0px;
    height: 43px;
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    color: #BBB;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: 16px;
    padding: 7px 15px;
    outline: none;
  }

  .google-control {
    button:nth-child(2) {
      background: #CCC;
      color: #FFF;
      border-color: #CCC;
      padding: 0;
      width: 40px;
      height: 40px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      border: none;
      position: absolute;
      right: 0;

      &:active {
        color: #FFF;
        background: ${darken(0.07, '#CCC')};
      }
    }
  }

  @media (max-width: 1027px) {
    input {
      width: 100%;
    }
  }
`

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const WrapAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  i {
    padding: 0px 10px;
  }
`

export const AddressTagSection = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
  }

  button.active {
    border: 1px solid #D81212;
  }
`
