import React from 'react'
import styled, { css } from 'styled-components'
export const BusinessContainer = styled.div`
  width: 100%;
  padding: 112px 0 30px 0;

  @media (min-width: 992px) {
    padding: 65px 0 30px 0;
  }
`
export const AdviceContainer = styled.div`
  background-color: #122428;
  padding: 30px 0;
`
export const AdviceInnerContainer = styled.div`
  width: 91%;
  margin: 0px auto;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const AdviceLeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${props => props.theme.colors?.white};
    margin: 0px;
  }
  p {
    color: ${props => props.theme.colors?.white};
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const AdviceRightContent = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 576px) {
    width: 100%;
  }
`
export const ImageContainerStyled = styled.div`
  width: 40%;
  height: 200px;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  @media (max-width: 992px) {
    width: 50%;
  }
`
export const WrapImage = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }
  return (
    <ImageContainerStyled {...props} style={style}>
      {props.children}
    </ImageContainerStyled>
  )
}
export const AdviceDescriptionContainer = styled.div`
  width: 40%;
  background-color: #FFC043;
  padding: 10px;

  p {
    font-weight: 600;
    color: ${props => props.theme.colors?.black};
  }

  @media (max-width: 992px) {
    width: 50%;
  }
`
export const WrapBusinessTypeFilter = styled.div`
  width: 91%;
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors?.secundary};
  img {
    border: 1px solid transparent;
    border-radius: unset;
    width: 100px;
    height: 100px;
  }
`
export const FeaturedBusinessContainer = styled.div`
  width: 91%;
  margin: 0px auto;
  padding: 30px 0;
`
export const SectionTitle = styled.h1`
  font-size: 32px;
  margin: 0 0 10px 0;
  color: ${props => props.theme.colors?.darkTextColor};
`
