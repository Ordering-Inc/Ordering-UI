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
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 992px) {
    width: calc(50% - 40px);
  }
  @media (max-width: 680px) {
    width: calc(100% - 40px);
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  > * {
    margin: 5px;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    text-align: left;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  span {
    color: #D81313;
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
  return (
    <CardLogoStyled {...props} style={style}>
      {props.children}
    </CardLogoStyled>
  )
}
