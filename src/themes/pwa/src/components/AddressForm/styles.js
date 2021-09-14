import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  margin-top: 35px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    height: 44px;
    width: 100%;
    position: relative;
    font-size: .86rem;
    svg {
      font-size: 25px;
      position: absolute;
      ${props => props.theme?.rtl ? css`
        left: 30px;  
      ` : css`
        right: 30px; 
      `}
      top: 8px;
    }
    @media (min-width: 576px) {
      font-size: 16px;
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
    font-size: .86rem;
    &.internal_number,
    &.zipcode {
      flex: auto;
    }
    &::placeholder{
      color: #CBCBCB
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  textarea {
    width: 100%;
    margin: 10px 0;
    border-radius: 7.6px;
    font-size: .86rem;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: .86rem;
    padding: 7px 15px;
    outline: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

    @media (min-width: 576px) {
      font-size: 16px;
    }
  }

  .google-control {
    .gps-button {
      border-radius: 7.6px;
      opacity: 0;
      @media (min-width: 576px) {
        opacity: 1;
      }
    }

    input {
      border-radius: 7.6px;
      border: 1px solid ${props => props.theme.colors.primary};

      &:focus {
        border: 1px solid ${props => props.theme.colors.primary};
      }
    }
  }

  .internal_number {
    width: 45%;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }

  .zipcode {
    width: 45%;
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
    color: ${props => props.theme.colors.primary};
    top: 21px;
    right: 10px;
    
    @media (min-width: 768px) {
      left: 10px;
      right: initial;
      ${props => props.theme?.rtl && css`
        right: 10px;
        left: initial;
      `}
    }
    font-size: 20px;
    
  }

  input {
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    @media (min-width: 576px) {
      padding: 7px 15px 7px 30px !important;
      ${props => props.theme?.rtl && css`
        padding: 7px 30px 7px 15px !important;
      `}
    }
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
    border: none;
    color: #B1BCCC;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 25px;
      }
    }
  }

  button.active {
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
  cursor: pointer;
`

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    width: 100%;
  }
`
