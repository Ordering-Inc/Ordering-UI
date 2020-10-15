import React from 'react'
import styled from 'styled-components'

export const BusinessInformationContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`
export const BusinessHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;
  justify-content: left;
  align-items: flex-end;
  position: relative;

  img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: calc(100% + 50px);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`

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
  z-index: 1;
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

export const BusinessContent = styled.div`
  height: 80%;
  padding: 0 20px;
`

export const FlexTabs = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10%;
  padding-top: 30px;
`

export const SectionTitle = styled.h3`
  font-weight: bold;
`

export const Map = styled.div`
  width: 100%;
  height: 20vh;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
`

export const ScheduleSection = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

export const ScheduleContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    overflow: auto;
    width: 100%;
  }
`

export const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 15px;
  border-right: 1px solid #CCC;
  width: 15%;

  h4 {
    margin: 0px 0px 3px;
    font-weight: bold;
    text-transform: uppercase;
    color: #D81212;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }

  &:last-child {
    border: 0;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px;
  border-top: 1px solid #CCC;
  border-bottom: 1px solid #CCC;

  div {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    div {
      width: 100%;

      &:last-child {
        h5:not(:last-child) {
          margin-top: 0px;
        }
      }
    }
  }
`
export const BusinessMediaContent = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    > img,
    > iframe {
      object-fit: cover;
      border-radius: 10px;
      margin: 10px 10px;
      width: calc(25% - 20px);

      @media (max-width: 992px) {
        width: calc(33% - 20px);
      }

      @media (max-width: 680px) {
        width: calc(50% - 20px);
      }

      @media (max-width: 480px) {
        width: calc(100% - 12px);
      }
    }
  }
`

export const ModalIcon = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  z-index: 1;
  background: rgba(0,0,0,0.1);
`
