import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormActions = styled.div`
  margin-top: 35px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  button {
    height: 44px;
    width: 100%;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
    &:hover {
      color: #CCC !important;
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
    height: 50px;
    width: 100%;
    &.internal_number,
    &.zipcode {
      flex: auto;
    }
    &::placeholder{
      color: #CBCBCB
    }
  }

  textarea {
    width: 100%;
    margin: 10px 0;
    border-radius: 7.6px;
  }

  .input-autocomplete {
    width: 100%;
    background: #FFF;
    border: 1px solid #BBB;
    border-radius: 30px;
    font-size: 16px;
    padding: 7px 15px !important;
    height: 50px;
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
    .gps-button {
      border-radius: 7.6px;
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

export const FormattedAddress = styled.p`
  margin: 0;
  width: 100%;
`
