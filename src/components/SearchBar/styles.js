import styled from 'styled-components'
import searchIcon from '../../../template/assets/search-icon.svg'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  input {
    width: 250px;
    margin: 0px 20px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-image: url(${searchIcon});
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;

    &:focus {
      width: 50%;
    }
  }
`
