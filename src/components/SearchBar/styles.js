import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  input {
    width: 100%;
    background-image: url(${props => props.theme?.images?.general?.searchIcon});
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    background-color: #F8F8F8;
    ${props => props.theme?.rtl && css`
      background-position: left 10px center;
    `}

    ${({ externalBusinessMap }) => !externalBusinessMap && css`
      justify-content: center;
      input {
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out; 
      }
    `}

    @media (min-width: 681px) {
      width: 100%;
      ${({ externalBusinessMap }) => !externalBusinessMap && css`
        width: 200px;
        &:focus {
          width: 50%;
        }
      `}
    }

  }
`
