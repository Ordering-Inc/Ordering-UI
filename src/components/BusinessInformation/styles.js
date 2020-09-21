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
  background: #FFFFFF;
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

export const Information = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  > h5{
    margin-block-end: 0.8em;
    margin-block-start: 0.8em;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 0.4em;
  }
`
export const BusinessContent = styled.div`
  height: 80%;
`

export const FlexTabs = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10%;
`
export const BusinessLocation = styled.div`
  height: 20%;
`

export const BusinessOpeningTime = styled.div`

`

export const Times = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  > div {
  padding: 0 5px;
    > h4{
    color: #D81212
    }
  }
`

export const DeliveryDetails = styled.div`

`
export const BusinessGallery = styled.div`

  > div {
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;
    > img {
      margin: 10px 0;
    }
  }
`
