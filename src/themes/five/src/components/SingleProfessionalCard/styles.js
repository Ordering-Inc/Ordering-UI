import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundPage};
  border: 1px solid ${props => props.theme.colors.gray200};
  box-sizing: border-box;
  margin: 10px;
  min-width: 205px;
  ${({ active }) => active && css`
    border: 1px solid ${props => props.theme.colors.primary};
  `}
  ${({ isCursor }) => isCursor && css`
    cursor: pointer;
  `}
`

const UserPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  border-radius: 4px;

  ${({ isSmallPhoto }) => isSmallPhoto ? css`
    min-height: 42px;
    width: 42px;
    height: 42px;
  ` : css`
    min-height: 86px;
    width: 86px;
    height: 86px;
  `}

  ${({ isSkeleton }) => isSkeleton && css`
    background-color: ${props => props.theme.colors.gray200};
  `}
`
export const UserPhoto = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <UserPhotoStyled {...props} style={style}>
      {props.children}
    </UserPhotoStyled>
  )
}
export const UserDummyAvatarWrapper = styled.div`
  svg {
    ${({ isSmallPhoto }) => isSmallPhoto ? css`
      width: 42px;
      height: 42px;
    ` : css`
      width: 86px;
      height: 86px;
    `}
  }
`

export const InfoWrapper = styled.div`
  width: calc(100% - 60px);
  margin-left: 20px;
  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 20px;
  `}
  > h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p {
    margin-top: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }
`

export const ActionWrapper = styled.div`
  ${({ isSmallPhoto }) => !isSmallPhoto && css`
    margin-top: 15px;
  `}
  display: flex;
  align-items: center;
  > .info {
    cursor: pointer;
    font-size: 16px;
    margin-right: 7px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 7px;
    `}
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: ${props => props.theme.colors.danger500};
      font-size: 16px;
      margin-top: 2px;
    }
  }
`
