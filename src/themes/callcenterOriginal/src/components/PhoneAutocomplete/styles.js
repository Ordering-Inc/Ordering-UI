import React from 'react'
import styled, { css } from 'styled-components'

export const PhoneContainer = styled.div`
  width: 100%;
  height: calc(100vh - 97px);
  display: flex;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: bottom;
    background-image: url(${bgimage});
  `}

  .spinner-content{
    > div{
      width: 40px;
      height: 40px;
      border-width: 5px;
    }
  }

 .autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  }
  input {
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
  }
  input[type=text] {
    background-color: #f1f1f1;
    width: 100%;
  }
  input[type=submit] {
    background-color: #f1f1f1;
    width: 100%;
  }
  .autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
    overflow: auto;
    max-height: 200px
  }
  .autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
  }
  .autocomplete-items div:hover {
    /*when hovering an item:*/
    background-color: #e9e9e9;
  }
  .autocomplete-active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important;
    color: #ffffff;
  }

  @media (min-width: 821px) {
    height: calc(100vh - 65px);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0px 20px 0px;
  width: 70%;
  position: relative;
  .select__control {
    border-radius: 30px;
  }

  .select__control.select__control--is-focused {
    border-color: ${props => props.theme?.colors?.primary} !important;
    box-shadow: 0 0 0 1px ${props => props.theme?.colors?.primary} !important;
  }

  .select__value-container {
    padding: 10px 8px 0;
  }
  .select__indicator.select__loading-indicator {
    color: ${props => props.theme?.colors?.primary} !important;
  }

  .select__indicator.select__dropdown-indicator,
  .select__indicator-separator {
    display: none;
  }

  ${props => props.theme?.rtl && css`
      padding: 0px 20px 0px;
    `}

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 45%;
      }
    }

    @media (min-width: 768px) {
      padding: 0px 40px 0px;

      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
    @media (min-width: 1400px){
      width: 60%;
    }
`

export const WrappBtn = styled.div`
  width: 50%;
  position: relative;
  button {
    position: absolute;
    top: 55px;
    min-width: 130px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 100;
  }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font: normal normal normal 80px ${props => props.theme.fonts.special?.name || 'Georgia'};
  letter-spacing: 0px;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 35px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 18px;
  letter-spacing: 0px;
  opacity: 1;
  margin-bottom: 15px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;

  ${({ withIcon }) => withIcon && css`
    width: calc(100% - 20px);
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }

    @media (min-width: 1024px) {
      width: calc(50% - 20px);
    }
  `}
  
  div{
    color: #FFF;
    position: relative;
    bottom: 25px;
    left: 15px;
    ${props => props.theme?.rtl && css`
      left: initial;
      right: 15px;
    `}
  }

  svg {
    color: #FFF;
    position: absolute;
    font-size: 22px;

    margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}

    ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}

  }
`

export const AutoComplete = styled.div`
  width: 45%; 
  button {
    position: absolute;
    left: 100%;
    transform: translate(-90%, -165%)
  }
`

export const UserEdit = styled.div`
  > :first-child{
     margin-bottom: 20px;  
  }
`

export const Info = styled.p``

export const SelectContainer = styled.div`
  display: flex;
  width: 60%;
  position: relative;
  align-items: center;
  svg{
    position: absolute;
    top: 0;
    left: 20px;
    transform: translate(50%, 70%);
    z-index: 10;
  }
  > div {
    width: 100%;
    .select__placeholder, .select__single-value, input {
      margin-left: 40px;
      z-index: 100;
      bottom: -10px;
    }
    .select__menu {
      position: relative;
      padding: 20px;
    }
    .select__clear-indicator {
      position: relative;
      left: 0;
      transform: translate(-300%, -165%);
      svg{
        width: 30px;
        height: 30px;
      }
    }
    .select__control {
      height: 45px;
      padding-left: 10px;
    }
    .select__indicator {
      bottom: 8px;
      position: relative;
    }
    .select__menu{
      top: 45px;
    }
    input {
      position: relative;
      top: -5px;
    }
  }
`

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  width: 90%;
`

const ImageWrapperStyled = styled.div`
  width: 30%;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (min-width: 1400px){
    width: 40%;
  }
`

export const ImageWrapper = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ImageWrapperStyled {...props} style={style}>
      {props.children}
    </ImageWrapperStyled>
  )
}

export const TypeButton = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  height: 75px;
  border-radius: 7.6px;
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  margin-right: 32px;
  margin-bottom: 32px;
  cursor: pointer;
  background: ${({ activated, theme }) => activated ? theme?.colors?.primary : theme?.colors?.white};
  p{
    margin: 0;
    margin-left: 33px;
    ${({ activated, theme }) => activated && css`
      color: ${theme?.colors?.white};
    `}
  }
`

export const IconTypeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({ activated, theme }) => activated ? theme?.colors?.white : '#F3F9FF'};
  border-radius: 44px;
`

export const TypesContainer = styled.div`
  display: flex;
`

export const AdditionalTypesContainer = styled.div`
  width: 60%;
  display: flex;
  margin-bottom: 20px;
  button {
    padding: 4px 10px;
    border-radius: 50px;
    font-size: 10px;
    line-height: 0;
    height: 25px;
    margin-right: 20px;
  }
  .activated {
    color: ${({ theme }) => theme?.colors?.darkTextColor}
  }
`

export const PhoneAutocompleteContainer = styled.div`
  position: relative;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`

export const ContinueButton = styled.span`
  position: absolute;
  right: 35px;
  bottom: 5px;
  width: 
  button {
    cursor: pointer;
  }
`
