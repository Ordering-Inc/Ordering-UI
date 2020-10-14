import React from 'react'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(33% - 40px);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  background: ${({ soldOut }) => soldOut ? '#B8B8B8' : '#FFF'};

  @media (max-width: 992px) {
    width: calc(50% - 40px);
  }
  @media (max-width: 680px) {
    width: calc(100% - 40px);
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
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 18px;
    font-weight: ${({ soldOut }) => soldOut ? 'bold' : '500'};
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 16px;
    font-weight: font-weight: ${({ soldOut }) => soldOut ? 'bold' : '200'};
    text-align: left;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: ${({ soldOut }) => soldOut ? '#A02525' : '#D81212'};
    font-weight: bold;
    font-size: 15px;
  }

  @media (max-width: 1200px) {
    max-width: 210px;
  }

  @media (max-width: 360px) {
    max-width: 170px;
    h1 {
      font-size: 16px;
    }
    p, span {
      font-size: 13px;
    }
  }
`

export const WrapLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
  margin-right: 5px;
`

const CardLogoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  min-height: 75px;
  border-radius: 10px;
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
