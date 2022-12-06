import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 27px;
  height: calc(100% - 130px);

  > button {
    position: sticky;
    top: 100%;
    height: 44px;
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 16px;
    ` : css`
      margin-right: 16px;
    `}
  }
`
export const BusinessesContainer = styled.div`
  height: calc(100% - 180px);
  overflow: auto;
`

export const BusinessWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  p {
    margin: 0px;
    font-size: 12px;
  }
`

export const WrapperImage = styled.div`
  max-width: 40px;
  max-height: 40px;
  height: 40px;
  width: 40px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
  `}
  border-radius: 8px;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  margin: 0 10px;
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
  border-radius: 8px;
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
