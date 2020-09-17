import React from 'react'
import styled from 'styled-components'

export const ContainerCard = styled.div`
  max-height: 300px;
  height: ${({ isSkeleton }) => isSkeleton ? 'auto' : '300px'};
  border-radius: 10px;
  margin: 30px 20px;
`

export const WrapperBusinessCard = styled.div`
  border-radius: 10px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};
`

export const BusinessHero = styled.div`
  border-radius: 10px;
`

const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  h1 {
    color: #FFF;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    min-height: 175px;
  }
`

export const BusinessHeader = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 15px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #FFC917;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    background-color: #6C6C6C;
    font-size: 12px;
    color: #FFF;
    padding: 8px;
    border-radius: 10px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  margin-top: 15px;
  max-height: 75px;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  div {
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      img {
        margin-right: 4px;
      }
    }
    p.bold {
      font-weight: bold;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`

export const BusinessName = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
