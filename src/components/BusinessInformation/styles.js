import React from 'react'
import styled from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
`
const BusinessHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: left;
  align-items: flex-end;
`

export const Header = (props) => {
  const style = {}
  if (props.img) {
    style.backgroundImage = `url(${props.img})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.img})`
  }
  return (
    <BusinessHeaderStyled {...props} style={style}>
      {props.children}
    </BusinessHeaderStyled>
  )
}

export const BussinessTitle = styled.div`
  z-index: 1000;
  display: inline-flex;
  width: 50%;
  background: #ffffff;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  padding: 10px;
`
export const HeaderImage = styled.div`
  width: 20%;
  margin-top: auto;
  > img {
    width: 100%;
  }
`

export const BusinessBasicContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  max-height: 75px;
  width: 340px;
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
      text-transform: capitalize;
      svg {
        margin-right: 4px;
        &.start {
          color: #FFC917;
        }
        &.popup {
          color: #D81313;
          cursor: pointer;
        }
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

export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5 {
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.3em;
    > svg {
      vertical-align: middle;
    }
  }
`
export const Stars = styled.div``

export const BusinessContent = styled.div`
  height: 80%;
`

export const FlexTabs = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10%;
  padding-top: 30px;
`
export const BusinessLocation = styled.div`
  height: 20%;
`
export const Map = styled.div`
  width: 100%;
  height: 20vh;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
`

export const BusinessOpeningTime = styled.div``

export const Times = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  > div {
    padding: 0 5px;
    > h4 {
      color: #d81212;
    }
  }
`

export const DeliveryDetails = styled.div`
  display: flex;
  justify-content: space-around;
`
export const BusinessGallery = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    > img {
      margin: 10px 10px;
    }
  }
`

export const BusinessVideos = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    > iframe {
      margin: 10px 10px;
    }
  }
`
