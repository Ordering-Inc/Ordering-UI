import styled, { css } from 'styled-components'
import React from 'react'

export const Container = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 16px;
  }
`

export const ProfessionalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 11px;
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: 7.6px;
  cursor: pointer;
  margin: 0px 6px;
  transition: all 0.3s linear;
  width: 205px;
  min-width: 205px;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => props.theme.colors.primaryContrast};
  }

  > svg {
    height: 42px;
    width: 42px;
    min-width: 42px;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.name {
      margin-left: 12px;
      ${props => props.theme.rtl && css`
        margin-right: 12px;
        margin-left: 0px;
      `}
    }
  }

  ${({ active }) => active && css`
    border: 1px solid ${props => props.theme.colors.primary};
  `}
`

const ProfessionalPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 42px;
  width: 42px;
  min-width: 42px;
  border-radius: 7.6px;
`
export const ProfessionalPhoto = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <ProfessionalPhotoStyled {...props} style={style}>
      {props.children}
    </ProfessionalPhotoStyled>
  )
}

export const ContentWrapper = styled.div`
  overflow: auto hidden;
  width: 100%;
`

export const ProfessionalListing = styled.div`
  display: flex;
`
