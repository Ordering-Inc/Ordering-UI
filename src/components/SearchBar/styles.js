import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  input {
    width: 200px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-image: url(${props => props.theme?.images?.general?.searchIcon});
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    ${props => props.theme?.rtl && css`
      background-position: left 10px center;
    `}

    @media (min-width: 681px) {
      &:focus {
        width: 50%;
      }
    }

    @media (max-width: 680px) {
      width: 100%;
    }
  }
`
