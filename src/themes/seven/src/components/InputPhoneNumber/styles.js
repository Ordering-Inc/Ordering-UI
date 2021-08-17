import styled, { css } from 'styled-components'

export const Container = styled.div`
  text-align: center;
  select:focus {
    outline: none;
  }

  .PhoneInput {
    display: flex;
    align-items: center;
  }

  .PhoneInputInput {
    flex: 1;
    min-width: 0;
  }

  .PhoneInputCountryIcon {
    width: calc(1em * 1.5);
    height: 1em;
  }

  .PhoneInputCountryIcon--square {
    width: 1em;
  }

  .PhoneInputCountryIcon--border {
    background-color: rgba(0,0,0,0.1);
    box-shadow: 0 0 0 1px  rgba(0,0,0,0.5),
    inset 0 0 0 1px  rgba(0,0,0,0.5);
  }

  .PhoneInputCountryIconImg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .PhoneInputInternationalIconPhone {
    opacity: 0.8;
  }

  .PhoneInputInternationalIconGlobe {
    opacity: 0.65;
  }

  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: 0.35em;
  }

  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
  }

  .PhoneInputCountrySelect[disabled] {
    cursor: default;
  }

  .PhoneInputCountrySelectArrow {
    display: block;
    content: '';
    width: 0.3em;
    height: 0.3em;
    margin-left: 0.35em;
    border-style: solid;
    border-color: inherit;
    border-top-width: 0;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-right-width: 1px;
    transform: rotate(45deg);
    opacity: 0.45;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
    opacity: 1;
    color: #03b2cb;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: 0 0 0 1px #03b2cb, inset 0 0 0 1px #03b2cb;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
    opacity: 1;
    color: #03b2cb;
  }

  .PhoneInputCountryIcon {
    font-size: 20px;
    background: transparent;
    border: 0;
    box-shadow: 0 0 black;
    height: 30px;
    width: 30px;
    outline: none;

    &.PhoneInputCountryIcon--border img {
      border-radius: 10px;
      outline: none;
    }
  }

  ${props => props.theme?.rtl && css`
    .PhoneInputCountrySelectArrow{
        margin-right: 0.5em;
    }
  `}

  input.PhoneInputInput {
    border: 1px solid #DBDCDB;
    font-size: 16px;
    outline: none;
    padding: 7px 11px;
    background-color: transparent;

    &::placeholder {
      color: #DBDCDB;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: #DBDCDB;
    }
    &::-ms-input-placeholder {
      color: #DBDCDB;
    }

    ${({ disabled }) => disabled && css`
      cursor: not-allowed;
    `}
  }
`

export const ErrorMsg = styled.span`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 400;
  font-size: 16px;
`
