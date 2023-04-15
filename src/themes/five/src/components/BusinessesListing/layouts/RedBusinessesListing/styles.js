import React from 'react'
import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media(min-width: 768px){
    max-width: 98%;
    margin: 0 auto;
  }

  @media(min-width: 1201px){
    max-width: 96%;
  }

`

export const WrapperSearch = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;

`

export const BusinessesTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: ${props => props.theme?.colors?.primary};
  margin: 0 auto;
  width: 100%;
  margin: 0 20px;
`

export const PreviousButtonWrapper = styled.div`
  width: 89%;
  margin: 0 auto;
  margin-top: 10px;
  button{
    width: 100%;

  }
`

export const BannerStyled = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  p {
    text-shadow: 0px 1px 1px #4d4d4d; color: #222; 
    font: 3vw;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    min-height: 30vw;
    overflow: hidden;
  }

`

export const Banner = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BannerStyled {...props} style={style}>
      {props.children}
    </BannerStyled>
  )
}

export const SkeletonWrapper = styled.div`
  display: flex;
  width: 96%;
  flex-direction: column;
  margin: 0 auto;
  span {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      height: 200px;
    }
  }
`
export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const BusinissWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  ${({ isPickup }) => isPickup && css`
    @media (min-width: 1024px) {
      width: 33.3%;
      height: fit-content;
      max-height: 100vh;
      overflow-y: scroll;
    }
  `}

  h1 {
    font-size: 15px;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`
export const MapWrapper = styled.div`
  /* display: none; */

  ${({ isPickup }) => isPickup && css`
    display: block;
    width: 100%;
    height: auto;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 20px;

    #map {
      border-radius: 0;
      @media (min-width: 576px) {
        width: 94% !important;
      }
    }

    @media (min-width: 1024px) {
      width: 66.6%;
      overflow: hidden;
      ${({ isSkeleton }) => !isSkeleton && css`
        height: 100vh;
      `}
      >div {
        height: 100%  
      }
    }
  `}

`

export const NotFoundButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  button {
    margin: 0 5px;
  }
`
