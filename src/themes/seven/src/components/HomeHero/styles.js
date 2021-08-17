import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 62.562132vh;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 768px) {
    max-height: 55vw;
    overflow: hidden;
  }
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
    justify-content: center;
    height: 100%;
    padding: 0px 20px 0px;

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
      max-width: 94%;
      margin: auto;
      padding: 0;
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 15px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const WrapInput = styled.label`
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
  
`

export const AddressInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #212629;
  outline: none;
  font-size: .86rem;
  line-height: 26px;
  padding: 6px 12px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;

  button {
    position: absolute;
    right: -1px;
    top: -1px;
    font-size: .86rem;
    line-height: 26px;
    padding: 6px 12px;
    @media (min-width: 1200px) {
      padding: 11px 19px;
      font-size: 1rem;
    }
  }


  @media (min-width: 1200px) {
    padding: 11px 19px;
    font-size: 1rem;
  }

  
`
