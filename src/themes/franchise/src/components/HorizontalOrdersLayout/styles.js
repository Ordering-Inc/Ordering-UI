import styled, { css } from 'styled-components'
import React from 'react'

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 16px;
  padding: 10px;
  flex: 1;
`

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
  }
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
`

export const Card = styled.div`
  min-width: 380px;
  width: 380px;
  margin: 10px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: white;
  height: ${({ isBusinessesPage }) => isBusinessesPage && '300px'};
  max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '220px'};
  border-radius: 16px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
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
    max-height: ${({ isBusinessesPage }) => isBusinessesPage ? '300px' : '250px'};;
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
