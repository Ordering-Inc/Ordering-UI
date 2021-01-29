import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-size: 15px;
    background-color: ${props => props.theme?.colors?.backgroundPage};
    ${props => props.theme?.rtl && css`
      background-position: left 10px center;
    `}
    padding-right: 60px;
    box-sizing: border-box;

    @media (min-width: 681px) {
      width: 200px;
      &:focus {
        width: 50%;
      }
    }
  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 14px;
  transform: translate(-30%, 0%);
  border-radius: 25%;
  max-height: 100%;
  span{
    cursor: pointer;
  }
  img{
    width: 20px;
    transform: translate(-25%, 0%);
  }
`
export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};

`