import styled from 'styled-components'

export const WrapperEditor = styled.div`
  .note-editor {
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.borderColor};

    .note-toolbar {
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    }

    .note-btn {
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.secundaryDarkContrast};
        box-shadow: none;
      }
    }

    .note-dropdown-menu {
      a {
        color: #000;
      }

      h1 {
        font-size: 36px;
      }
    }
  }
`
