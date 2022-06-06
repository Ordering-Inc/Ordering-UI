import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  ${({ informationPosition, imageShowed }) => informationPosition && css`
      ${informationPosition === 'left' || (informationPosition === 'right' && !imageShowed)
        ? `
          flex-direction: row;
        `
        : informationPosition === 'right'
        ? `
          flex-direction: row-reverse;
          justify-content: space-between;
        `
        : informationPosition === 'top'
        ? `
          flex-direction: column;
          justify-content: center;
        `
        : `
          flex-direction: column-reverse;
          justify-content: center;
        `
      }
  `}
  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};

  ${props => (
    props.theme.colors.backgroundPage === '#FFF' ||
    props.theme.colors.backgroundPage === '#FFFFFF'
  ) && css`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  `}
  
  @media (min-width: 681px) {
    width: calc(50% - 40px);
  }
`

export const SoldOut = styled.span`
  font-weight: bold;
  position: absolute;
  background: #D6D6D6 0% 0% no-repeat padding-box;
  border-radius: 23px;
  padding: 5px 10px;
  top: 8px;
  right: 6px;
  text-transform: uppercase;
  font-size: 14px;
  ${props => props.theme?.rtl && css`
    left: 6px;
    right: initial;
  `}
`
export const PriceWrapper = styled.div`
  display: flex;
  ${({ informationPosition }) => informationPosition && css`
    ${informationPosition === 'top' || informationPosition === 'bottom' ? 'align-items: center;flex-direction:column;' : ''}
  `
  }
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ informationPosition }) => informationPosition && css`
    ${informationPosition === 'top' || informationPosition === 'bottom' ? 'align-items: center;' : ''}
  `
  }
  max-width: calc(100% - 90px);
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 16px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 275px;
  }
  
  svg{
    color: #233E37;
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  p {
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '200'};
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${({ soldOut, theme }) => soldOut ? lighten(0.05, theme.colors.primary) : theme.colors.primary};
    font-weight: bold;
    display:flex;
  }

  p, span {
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }

    span {
      font-size: 15px;
    }
  }
`

export const WrapLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
  ${({ imgScale, imgSize }) => (imgScale && imgSize && !isNaN(Number(imgSize)) && !isNaN(Number(imgScale))) && css`
    max-width: ${Number(imgSize) * Number(imgScale)}px;
    max-height: ${Number(imgSize) * Number(imgScale)}px;
    height: ${Number(imgSize) * Number(imgScale)}px;
    width: ${Number(imgSize) * Number(imgScale)}px;
  `
  }
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0px;
  `}
`

  const IconCustoom = styled.span`
   display:flex;
  `

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 75px;
  min-width: 75px;
  width: 75px;
  height: 75px;
  ${({ imgScale, imgSize }) => (imgScale && imgSize && !isNaN(Number(imgSize)) && !isNaN(Number(imgScale))) && css`
    min-width: ${Number(imgSize) * Number(imgScale)}px;
    min-height: ${Number(imgSize) * Number(imgScale)}px;
    height: ${Number(imgSize) * Number(imgScale)}px;
    width: ${Number(imgSize) * Number(imgScale)}px;
  `
  }
  border-radius: 100px;
  ${props => props.backgroundImage && css`
    border: 1px solid ${props => props.theme.colors.primary};
  `}
  
`
export const CardLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)'
  }
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}
