import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    border: none;
    border-bottom: 1px solid #E9ECEF;
    border-radius: 0px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 30px 18px;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 50px;
    background-color: ${props => props.theme?.colors?.backgroundPage};

    ${props => props.theme?.rtl ? css`
      background-position: right center;
    ` : css`
      background-position: left center;
    `}

    ${({ isCustomLayout }) => !isCustomLayout && css`
      justify-content: center;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out; 
    `}

    @media (min-width: 681px) {
      width: 100%;
      ${({ isCustomLayout }) => !isCustomLayout && css`
        width: 50%;
      `}
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
  ${props => props.theme?.rtl && css`
    transform: translate(30%, 0%);
  `}
  span{
    cursor: pointer;
  }
  img{
    width: 20px;
    transform: translate(-25%, 0%);
    ${props => props.theme?.rtl && css`
      transform: translate(25%, 0%);
    `}
  }
`
export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};

`
