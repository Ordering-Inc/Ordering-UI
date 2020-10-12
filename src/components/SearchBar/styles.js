import styled from 'styled-components'
import searchIcon from '../../../template/assets/search-icon.svg'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  input {
    width: 200px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-image: url(${searchIcon});
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;

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
