import styled, { css } from 'styled-components'

export const FormRedirect = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0px;
  `}
  button {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 10px;

    &:disabled {
      opacity: 0.5;
    }
  }

  .StripeElement,
  .StripeElementIdeal {
    display: block;
    margin: 0 10px;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
  }

  .StripeElement--focus,
  .StripeElementIdeal--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }

  .StripeElement.loading {
    height: 41.6px;
    opacity: 0.6;
  }

  .StripeElementIdeal {
    padding: 0;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
  }

  select {
    padding: 7px 5px;
    margin-top: 8px;
    font-size: 16px;
    border-radius: 7.6px;
    border: 1px solid #DBDCDB;
  }
`

export const ErrorMessage = styled.p`
  color: #D81212;
  margin: 10px 0 0 0;
  font-weight: bold;
`
