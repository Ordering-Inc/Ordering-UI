import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  position: fixed;
  z-index: 1200;
  top: 10px;
  right: 200px;
  ${props => props.theme?.rtl && css`
    right: initial;
    left: 200px;
  `}
  
  @media (max-width: 1200px) {
    right: 150px;
    ${props => props.theme?.rtl && css`
      right: initial;
      left: 150px;
    `}
  }

  @media (max-width: 576px) {
    right: 110px;
    ${props => props.theme?.rtl && css`
      right: initial;
      left: 110px;
    `}
  }

  input {
    width: 100%;
    border-radius: 40px;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;
    padding: 7px 15px;

    ${props => props.theme?.rtl ? css`
      padding-right: 40px;
    ` : css`
      padding-left: 40px;
    `}
    background-color: ${props => props.theme?.colors?.backgroundPage};

    ${({ externalBusinessMap }) => !externalBusinessMap && css`
      justify-content: center;
      input {
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out; 
      }
    `}

    @media (min-width: 681px) {
      ${({ externalBusinessMap }) => !externalBusinessMap && css`
        width: 240px;
      `}
    }

    @media (max-width: 576px) {
      width: 42vw;
    }
  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  color: #333;
  font-size: 14px;
  left: 20px;
  top: 12px;
  ${props => props.theme?.rtl && css`
    left: initial;
    right: 20px;
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
