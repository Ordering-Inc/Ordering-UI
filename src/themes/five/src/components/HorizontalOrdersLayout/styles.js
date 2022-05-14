import styled, { css } from 'styled-components'
import React from 'react'

export const Content = styled.div`
  display: flex;
  border-radius: 16px;
  padding: 10px;
  ${({ isCustomerMode }) => isCustomerMode ? css`
    align-items: center;
  ` : css`
    align-items: flex-start;
    flex: 1;
  `}
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

export const Card = styled.div`
  cursor: pointer;
  margin: 10px;
  position: relative;
  background: white;
  border-radius: 16px;
  text-align: left;
  transition: all 0.3s ease;
  
  ${({ isCustomerMode }) => isCustomerMode ? css`
    min-width: 300px;
    width: 300px;
    display: inline-block;
  ` : css`
    min-width: 380px;
    width: 380px;
    display: inline-flex;
    align-items: center;
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

  @media(min-width: 993px){
    ${({ isBusinessesPage }) => isBusinessesPage && css`
      margin: 30px 20px;
      width: calc(33% - 40px);
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

  margin-left: 8px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 8px;
  `}

  @media (min-width: 576px) {
    width: 86px;
    min-width: 86px;
    height: 86px;
    min-height: 86px;
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
    line-height: 19px;
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
