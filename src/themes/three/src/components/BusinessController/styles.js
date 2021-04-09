import React from 'react'
import styled, { css } from 'styled-components'
export const ContainerCard = styled.div`
  width: 100%;
  margin: 10px;
  cursor: ${({ isSkeleton }) => isSkeleton ? 'default' : 'pointer'};

  @media (min-width: 668px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 993px) {
    width: calc(33% - 20px);
    ${({ isCustomMode }) => isCustomMode && css`
      width: calc(50% - 20px);
    `
  }

  @media (min-width: 1200px) {
    ${({ isCustomMode }) => isCustomMode && css`
      width: calc(33% - 20px);
    `}
  }
`
export const BusinessHero = styled.div`
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
  min-height: 120px;
  background-position: center;
  justify-content: center;
  align-items: center;

  h1 {
    color: #FFF;
    opacity: 0.5;
  }

  @media (min-width: 481px) {
    min-height: 200px;
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
  margin: 10px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
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
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 0px;
    ` : css`
        margin-right: 0px;
    `
    }
    }
  }

  @media (min-width: 475px) {
    margin: 15px;
  }
`
export const BusinessContent = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BusinessName = styled.h6`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${props => props.theme.colors?.darkTextColor};

  @media (max-width: 576px) {
    font-size: 18px;
  }
`
export const BusinessInfoRow = styled.div`
  display: flex;
  column-gap: 20px;

  div {
    color: ${props => props.theme.colors.grayTextColor};
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  span {
    color: ${props => props.theme.colors.grayTextColor};
    font-size: 14px;
  }

  svg {
    color: ${props => props.theme.colors.grayTextColor};
  }

  @media (max-width: 576px) {
    span {
      font-size: 12px;
    }
  }
`
export const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const WrapperReview = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors?.lightGreen};
  color: ${props => props.theme.colors?.darkGreen};
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
`
