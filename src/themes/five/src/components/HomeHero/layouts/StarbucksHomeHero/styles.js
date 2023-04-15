import React from 'react'
import styled, { css } from 'styled-components'
export const HeroContainerStyled = styled.div`
  width: 100%;
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
  justify-content: center;
  height: 100%;
  padding: 30px;
  @media (min-width: 425px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
    padding: 65px;
  }
`
export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 39px;
  ${props => props.theme?.colors?.backgroundPage && css`
    color: ${props.theme?.colors?.backgroundPage};
  `}
  margin-bottom:16px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
  }
  @media (min-width: 1405px) {
    font-size: 2.3rem;
  }
`
export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 16px;
  
  ${props => props.theme?.colors?.backgroundPage && css`
    color: ${props.theme?.colors?.backgroundPage};
  `}
  @media (min-width: 576px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1200px) {
    font-size: 22px;
  }
`
export const InputSpan = styled.span`
  background: #FFF;
  color: #010300;
  border: 1px solid #DBDCDB;
  border-radius: 30px;
  font-size: 16px;
  padding: 7px 50%;
  outline: none;
  color: #FFF;
  border-color: #FFF;
  cursor: pointer;
  background: rgba(0,0,0,0.1);
`
export const OrderTypes = styled.div`
  display: flex;
  background-color: #fff;
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 45px;
  }
  @media (min-width: 1200px) {
    padding: 75px;
  }
  @media (min-width: 1405px) {
    padding: 90px;
  }
`
