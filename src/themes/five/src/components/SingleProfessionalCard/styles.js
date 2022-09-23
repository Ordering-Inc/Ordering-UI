import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundPage};
  border: 1px solid ${props => props.theme.colors.gray200};
  box-sizing: border-box;
  margin: 10px;
`

const UserPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-height: 86px;
  width: 86px;
  height: 86px;
  border-radius: 4px;

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

export const InfoWrapper = styled.div`
  flex: 1;
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
  }
  p {
    margin-top: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }
`

export const ActionWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  > svg {
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
