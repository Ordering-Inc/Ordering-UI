import React from 'react'
import styled, { css } from 'styled-components'

export const WrapperMapMarker = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  position: absolute;
  transform: translate(-50%, -100%);

  svg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    padding: 3px;
    box-sizing: border-box;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    z-index: 1;
  }

  &:after {
    content:'';
    position: absolute;
    top: 77%;
    left: 50%;
    margin-left: -22px;
    width: 0;
    height: 0;
    border-top: solid 22px ${props => props.theme.colors.primary};
    border-left: solid 22px transparent;
    border-right: solid 22px transparent;
    z-index: -1;
  }
`
const MapMarkerImgStyled = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 100%;
  z-index: 100;
`
export const MapMarkerImg = (props) => {
  return (
    <MapMarkerImgStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </MapMarkerImgStyled>
  )
}

export const InfoContainer = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  row-gap: 5px;
  z-index: 200;
  box-shadow: 0px 2px 2px #00000029;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export const TextContainer = styled.div`
  display: flex;
  column-gap: 10px;
`
export const Text = styled.span`
  ${({ fontWeight }) => fontWeight && css`
    font-weight: 600;
  `}
  font-size: 14px;
  white-space: nowrap;
`
