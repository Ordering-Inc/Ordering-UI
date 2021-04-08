import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const WrapAddressForm = styled.div`
  width: 60%;

  @media (max-width: 992px) {
    width: 100%;
  }
`
export const FormControl = styled.form`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    box-sizing: border-box;
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
    padding: 10px 0;
  }
`

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
  align-items: center;
  position: relative;

  button {
    border-radius: unset;
    height: 50px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;

    button {
      height: 42px;
    }
  }
`

export const WrapAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  i {
    padding: 0px 10px;
  }

  svg {
    position: absolute;
    color: #9A9A9A;
    top: 13px;
    left: 10px;
    font-size: 24px;
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

  @media (max-width: 576px) {
    width: 100%;

    input {
      height: 42px;
    }

    svg {
      top: 10px;
    }
  }
`

export const WrapperSkeleton = styled.div`
  display: flex;
  column-gap: 15px;
  margin-bottom: 10px;

  span {
    height: 50px !important;;
  }

  > span {
    &:first-child {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 20px;
    span {
      height: 42px !important;
    }
  }
`
