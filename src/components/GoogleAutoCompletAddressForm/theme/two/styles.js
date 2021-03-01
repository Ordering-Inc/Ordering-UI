import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const WrapAddressForm = styled.div`
  padding: 0 20px;

  @media (max-width: 576px) {
    padding: 0px;
  }
`
export const FormActionButton = styled.button`
  position: absolute;
  top: 13px;
  right: 3px;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  outline: none;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.primaryContrast} !important;
    font-size: 32px !important;
    position: relative !important;
    top: 0px !important;
    left: 0px !important;
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
    top: 19px;
    left: 10px;
    font-size: 32px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }

  input {
    height: 50px;
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    padding: 7px 15px 7px 45px !important;
    color: ${props => props.theme.colors.greyTextColor};
    ${props => props.theme?.rtl && css`
      padding: 7px 45px 7px 15px !important;
    `}
  }
`

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    width: 100%;

    > span {
      border-radius: 50px;
    }
  }
`
