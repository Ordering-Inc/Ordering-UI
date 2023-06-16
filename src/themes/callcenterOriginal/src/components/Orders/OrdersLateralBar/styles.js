import React from 'react'
import styled, { css } from 'styled-components'

export const LateralBarContainer = styled.div`
  width: 0;
  padding: 28px 20px;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  overflow-x: hidden;
  transition: 0.3s;
  height: calc(var(--vh, 1vh) * 100);
  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);

  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    right: 0;
  `}
`

export const OrdersContainer = styled.div`
  max-width: 560px;

  #orderTable {
    border-top: 1px solid ${props => props.theme.colors.borderColor};

    table {
      min-width: initial;
      width: 100%;
    }
  }
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 25px;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperImage = styled.div`
  max-width: 50px;
  max-height: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`

const ImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`
export const Image = (props) => {
  return (
    <ImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ImageStyled>
  )
}

export const Name = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
  p {
    margin: 0px;
    color: ${props => props.theme.colors?.headingColor};
    font-size: 14px;

    &:first-child {
      font-size: 20px;
      font-weight: 600;
    }
  }
`
