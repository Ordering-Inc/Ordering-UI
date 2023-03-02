import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  cursor: pointer;
  margin: 10px 0;
  position: relative;
  background: white;
  display: inline-block;
  text-align: left;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;

  ${props => props.theme.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}

  > span {
    display: flex;
  }

  ${({ isCustomerMode }) => isCustomerMode ? css`
    min-width: 300px;
    width: 300px;
    display: inline-block;
  ` : css`
    min-width: ${({ w }) => w ?? 380}px;
    width: ${({ w }) => w ?? 380}px;
    height: ${({ isBusinessesPage }) => isBusinessesPage && '300px'};
    max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '220px'};
  `}

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
  }

  button.load-orders {
    padding: 10px 30px;
  }

  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  ${props => (props.nobg || props.isBusinessesPage) && css`
    background: transparent;
  `}

  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media (min-width: 480px) {
    min-width: 430px;
    max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '250px'};
    width: 430px;
  }

  @media (min-width: 768px) {
    margin: 10px;
    border-radius: 16px;
  }

  @media(min-width: 993px){
    ${({ isBusinessesPage }) => isBusinessesPage && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
    `}
  }
`

export const Content = styled.div`
  display: flex;
  position: relative;
  border-radius: 16px;
  padding: 0;
  ${({ isCustomerMode }) => isCustomerMode ? css`
    align-items: center;
  ` : css`
    align-items: flex-start;
    flex: 1;
  `}

  @media (min-width: 768px) {
    padding: 10px;
  }
`

export const Price = styled.div`
  width: 35%;
  
  ${({ isCustomerMode }) => isCustomerMode ? css`
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;
  ` : css`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
  `}

  h2 {
    font-size: 16px;
    margin-block-end: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    margin-block-start: 0.1em;
    font-weight: normal;
  }
  p {
    margin-block-end: 0.1em;
    margin-block-start: ${({ isBusinessesPage }) => isBusinessesPage ? '0.1em' : '1em'};
    color: #ff9300;
    font-size: 0.8em;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
  }

  p[name='view-cart']{
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  @media (min-width: 480px) {
    ${({ isCustomerMode }) => !isCustomerMode && css`
      flex-direction: row;
      align-items: center;
    `}
  }
`

const BusinessLogoWrapperStyled = styled.div`
  display: flex;
  width: 55px;
  min-width: 55px;
  height: 55px;
  min-height: 55px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  border-radius: 7.6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

  margin-right: 8px;
  margin-left: 0px;

  ${props => props.theme.rtl && css`
    margin-left: 8px;
    margin-right: 0px;
  `}

  @media (min-width: 768px) {
    margin-right: 0px;
    margin-left: 8px;

    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 8px;
    `}
  }

  @media (min-width: 576px) {
    width: 86px;
    min-width: 86px;
    height: 86px;
    min-height: 86px;
    ${({ isMulti }) => isMulti && css`
      width: 55px;
      min-width: 55px;
      height: 55px;
      min-height: 55px;
    `}
  }
`

export const BusinessLogoWrapper = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessLogoWrapperStyled {...props} style={style}>
      {props.children}
    </BusinessLogoWrapperStyled>
  )
}
export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 4px;
  display: flex;
  align-items: center;

  button {
    border-radius: 50px;
    font-size: 10px;
    line-height: 15px;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.colors.primaryContrast};
    margin: 5px;

    &.reorder {
      background: ${props => props.theme.colors.primaryContrast};
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`

export const Logo = styled.div`
  width: 55px;
  height: 55px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border-radius: 7.6px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7.6px;
  }

  @media (min-width: 480px){
    width: 86px;
    height: 86px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Map = styled.div`
  width: 100%;
  height: ${({ isBusinessesPage }) => isBusinessesPage ? '200px' : '88px'};
  min-height: ${({ isBusinessesPage }) => isBusinessesPage && '175px'};
  img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-radius: ${({ isBusinessesPage }) => isBusinessesPage && '16px'};
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
  }
  @media(min-width: 480px){
    height: ${({ isBusinessesPage }) => isBusinessesPage ? '200px' : '100px'};
    min-height: ${({ isBusinessesPage }) => isBusinessesPage && '200px'}
  }
`

export const FavoriteWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  top: 41px;
  right: 10px;
  ${props => props.theme.rtl && css`
    left: 10px;
    right: initial;
  `}
  svg {
    color: ${props => props.theme.colors.danger500};
    font-size: 16px;
  }
`
export const ReviewWrapper = styled.div`
  .review-sent {
    border-radius: 7.6px;
  }
`

export const MultiLogosContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    white-space: nowrap;
  }
`
