import styled from 'styled-components'

export const Container = styled.div`
  form {
    input {
      &:disabled {
        background-color: rgba(239, 239, 239, 0.3);
      }
    }
    button {
      width: 70%;
      &:disabled {
        opacity: 0.5;
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
