import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  position: fixed;
  z-index: 1200;
  top: 12px;
  right: 4.5%;
  margin-right: 70px;

  ${props => props.theme?.rtl && css`
    margin-right: initial;
    left: 4.5%;
    margin-left: 70px;
  `}
  ${({ auth }) => !auth && css`
    margin-right: 0px;
    ${props => props.theme?.rtl && css`
      margin-right: initial;
      margin-left: 0px;
    `}
  `}
  
  input {
    width: 100%;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;
    padding: 7px 15px;
    border: none;
    border-bottom: 1px solid #DBDCDB;
    background: #F6F6F6;

    ${props => props.theme?.rtl ? css`
      padding-right: 40px;
    ` : css`
      padding-left: 40px;
    `}

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
  left: 10px;
  top: 10px;
  ${props => props.theme?.rtl && css`
    left: initial;
    right: 20px;
  `}
  span{
    cursor: pointer;
  }
  svg{
   font-size: 20px;
  }
`
