import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0px 20px 0px;
    max-width: 600px;

    ${props => props.theme?.rtl && css`
      padding: 0px 20px 0px;
    `}

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      padding: 0px 40px 0px;

      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }

    @media (min-width: 1200px) {
      max-width: 800px;
    }
`

export const Title = styled.h1`
  margin: 0px;
  font-size: 60px;
  text-align: center;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;

  @media (max-width: 1200px){
    font-size: 42px;
  }
  @media (max-width: 992px){
    font-size: 32px;
  }

  @media (max-width: 576px){
    font-size: 29px;
  }
`
export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
export const WrapAddressInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  i {
    padding: 0px 10px;
  }

  svg {
    position: absolute;
    color: #9A9A9A;
    top: 21px;
    left: 10px;
    font-size: 20px;
    ${props => props.theme?.rtl && css`
      right: 10px;
      left: initial;
    `}
  }

  input {
    background-position: left 10px center !important;
    background-repeat: no-repeat !important;
    background-size: 13px !important;
    padding: 7px 15px 7px 30px !important;
    ${props => props.theme?.rtl && css`
      padding: 7px 30px 7px 15px !important;
    `}
  }
`

export const WrapInput = styled.label`
  width: 80%;
  margin: 20px 0;
  position: relative;
  cursor: pointer;
  background: #fff;
  height: 45px;
  border-radius: 30px;

  display: flex;
  align-items: center;

  svg {
    font-size: 32px;
    padding: 0 10px;
    color: #ccc;
  }

  div {
    color: #ccc;
  }  
`
