import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 45px;
    flex: 1;

    &:last-child#submit-btn {
      margin-left: 10px;
    }
  }

  @media (min-width: 769px) {
    button {
      &:last-child#submit-btn {
        margin-left: 25px;
      }
    }
  }
`

export const FormControl = styled.form`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    box-sizing: border-box;
    margin: 10px 0px;
    height: 43px;
    width: 100%;
    &.internal_number,
    &.zipcode {
      width: 100%;
    }
    &::placeholder{
      color: #CBCBCB
    }

    @media (min-width: 621px) {
      &.internal_number,
      &.zipcode  {
        width: 48%;
      }
    }
  }

  textarea {
    width: 100%;
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: 16px;
    padding: 7px 15px;
    outline: none;
    ::placeholder {
      color: #DBDCDB;
    }
    
    &:-ms-input-placeholder {
      color: #DBDCDB;
    }
    
    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #DBDCDB;
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }

  .google-control {
    button:nth-child(2) {
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FFF;
      padding: 0;
      width: 43px;
      height: 43px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      border-style: solid;
      border-width: 1px;
      border-color: ${props => props.theme.colors.primary};
      outline: none;
      ${props => props.theme?.rtl && css`
        left: 0;
        right: initial; 
      `}
      svg {
        color: ${props => props.theme.colors.primary};
        font-size: 25px;
      }
    }
  }

  @media (min-width: 481px) {
    padding: 10px;
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

  svg {
    position: absolute;
    color: #9A9A9A;
    top: 21px;
    left: 10px;
    font-size: 20px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }

  input {
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    padding: 7px 15px 7px 30px !important;
    ${props => props.theme?.rtl && css`
      padding: 7px 30px 7px 15px !important;
    `}
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

    img {
      width: 22px;
      height: 22px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
    }
  }

  button.active {
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const ShowMap = styled.p`
  text-align: center;
  color: #000;
  width: 100%;
  font-weight: 600;
  cursor: pointer
`
