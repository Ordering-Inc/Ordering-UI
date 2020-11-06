import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 28px 0 5px;

  input {
    width: 100%;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-image: url(${props => props.theme?.images?.general?.searchIcon});
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    background-color: #F8F8F8;
    ${props => props.theme?.rtl && css`
      background-position: left 10px center;
    `}

    @media (min-width: 681px) {
      width: 200px;
      &:focus {
        width: 50%;
      }
    }
  }
`
