import styled, { css } from 'styled-components'

export const FormStripe = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 5px;

  .StripeElement,
  .StripeElementIdeal {
    display: block;
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

export const FormRow = styled.div`
  input {
    display: block;
    border: none;
    font-size: 18px;
    margin: 10px 0 20px 0;
    max-width: 100%;
    padding: 10px 14px;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border-radius: 4px;
    background: white;
    color: #424770;
    letter-spacing: 0.025em;
    width: 500px;
  }

  input::placeholder {
    color: #aab7c4;
  }
`

export const ErrorMessage = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #D81212;
  margin: 10px 0px 0px 10px;
  ${props => props.theme?.rtl && css`
    margin: 10px 10px 0px 0px;   
  `}  
`

export const FormActions = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    height: 44px;
    width: 100%;
    border-radius: 7.6px;

    &:disabled {
      opacity: 0.5;
    }
  }
`

export const SplitFormElement = styled.div`
  width: 100%;
  .StripeElement {
    border: 1px solid #DEE2E6 !important;
    box-sizing: border-box !important;
    border-radius: 7.6px !important;
    box-shadow: none !important;
  }
`
export const Label = styled.span`
  width: 100%;
  display: inline-flex;
  margin-bottom: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #344050;
`
export const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 26px;
`
export const ExpiryCsv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Expiry = styled.div`
  width: 45%;
`

export const Cvs = styled.div`
  width: 45%;
`
