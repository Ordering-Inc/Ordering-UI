import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  margin-top: 20px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 42px;
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
    &::placeholder{
      color: #B1BCCC;
    }
  }

  textarea {
    width: 100%;
  }

  .input-autocomplete {
    width: 100%;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border: 1px solid #DEE2E6;
    border-radius: 8px;
    font-size: 14px;
    padding: 7px 15px;
    outline: none;
    color: ${props => props.theme.colors.headingColor};
    ::placeholder {
      color: #B1BCCC;
    }

    &:-ms-input-placeholder {
      color: #B1BCCC;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #B1BCCC;
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
    top: 11px;
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
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }
`

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
  text-align: initial;
  text-transform: capitalize;
  margin-bottom: 10px;
`

export const CloseButtonWrapper = styled.span`
  position: fixed;
  cursor: pointer;
  top: 20px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
`

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &.address_notes {
    width: 100%;
  }

  &.internal_number,
  &.zipcode {
    width: 100%;
  }
  @media (min-width: 621px) {
    &.internal_number,
    &.zipcode  {
      width: 48%;
    }
  }
`

export const InputText = styled.label`
  color: ${props => props.theme.colors.headingColor};
  font-size: 14px;
  margin: 30px 0 7px 0;
`

export const TagButton = styled.button`
  color: ${props => props.theme.colors.disabled};
  border-radius: 8px;
  outline: none;
  background: transparent;
  border: none;
  font-size: 14px;
  padding: 10px 15px;

  ${({ active }) => active && css`
    background: ${props => props.theme.colors.secundaryDarkContrast};
    color: ${props => props.theme.colors.secundaryDark};
  `}

  svg {
    font-size: 16px;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`
