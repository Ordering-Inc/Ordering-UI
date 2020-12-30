import styled, { css } from 'styled-components'

export const Container = styled.div`
  text-align: center;

  select:focus {
    outline: none;
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
          margin-right: 0.35em;
      }
    `}

  input.PhoneInputInput {
    border-radius: 30px;
    border: 1px solid #DBDCDB;
    font-size: 16px;
    outline: none;
    padding: 10px 15px;

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

    ${({ isValid }) => !isValid && css`
      pointer-events: none;
      background-color: rgba(239,239,239,0.3);
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
