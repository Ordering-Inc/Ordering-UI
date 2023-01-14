import styled from 'styled-components'
import React from 'react'

export const WrapperMap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EEE;
  position: relative;
`
export const WrapperOnlineDrivers = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  max-width: 60%;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow-y: hidden;
  & > p {
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    margin: 0 0 5px 0;
  }
`
export const OnlineDrivers = styled.div`
  display: flex;
`
export const WrapDriverInfo = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin: 0 10px;
  color: ${props => props.theme.colors?.headingColor};
`
export const WrapperDriverImage = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    padding: 3px;
    box-sizing: border-box;
    border: none;
    background: none;
  }
`
const DriverImgStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 5px;
`
export const DriverImage = (props) => {
  return (
    <DriverImgStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </DriverImgStyled>
  )
}

export const DriverInfo = styled.div`
  p {
    margin: 0px;
    &:first-child {
      font-size: 14px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:last-child {
      font-size: 12px;
    }
  }
`
