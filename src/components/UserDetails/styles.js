import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 25px;
  form {
    input {
      width: 100%;
      &:disabled {
        background-color: rgba(239, 239, 239, 0.3);
        cursor: not-allowed;
      }
    }
    button {
      width: 100%;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  @media (min-width: 761px) {
    form {
      input,
      button {
        width: 85%;
      }
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  h1 {
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }

  h1,
  svg {
    font-size: 24px;
  }

  svg.edit {
    color: #F2BB40;
    cursor: pointer;
  }
  svg.cancel {
    color: #D81212;
    cursor: pointer;
  }
`
