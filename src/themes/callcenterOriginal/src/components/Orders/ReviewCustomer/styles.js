import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../../../styles/Buttons'

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 29px 0;
  }

  > button {
    width: 100%;
    height: 44px;
    margin-top: 40px;
  }
`
export const PhotoWrapper = styled.div`
  max-width: 133px;
  max-height: 133px;
  height: 133px;
  width: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;

  svg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  @media print {
    display: none;
  }
`
const PhotoStyled = styled.div`
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
export const Photo = (props) => {
  return (
    <PhotoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </PhotoStyled>
  )
}
export const CustomerName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-top: 15px;
`
export const ReviewsProgressWrapper = styled.div`
  width: 100%;
  margin: 30px 0;

  p {
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 14px;
  }
`
export const ReviewsProgressContent = styled.div`
  background: ${props => props.theme.colors.borderColor};
  border-radius: 50px;
  width: 100%;
  height: 4px;
  position: relative;
  margin-bottom: 30px;
`
export const ReviewsProgressBar = styled.div`
  height: 4px;
  border-radius: 50px;
  background: ${props => props.theme.colors.primary};
  transition: all 0.2s linear;
`

export const ReviewsMarkPoint = styled.div`
  position: absolute;
  top: 15px;
  font-size: 12px;
  color: #CED4DA;
  cursor: pointer;

  ${({ active }) => active && css`
    > span {
      color: #344050;
    }
  `}

  &.mark-point {
    span {
      position: relative;
      margin-left: -50%;
      ${props => props.theme?.rtl && css`
        margin-right: -50%;
        margin-left: 0;
      `}

      > span {
        position: absolute;
        height: 6px;
        top: -15px;
        width: 2px;
        background: #CED4DA;
        transition: all 0.3s;
      }
    }
  }

  ${({ pass }) => pass && css`
    span {
      > span {
        background: transparent !important;
      }
    }
  `}
`
export const CommentsList = styled.div`
  width: 100%;
  p {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 14px;
  }

  > button {
    border-radius: 50px;
    margin-bottom: 18px;
    &:not(:last-child) {
      ${props => props.theme?.rtl ? css`
        margin-left: 40px;
      ` : css`
        margin-right: 40px;
      `}
    }
  
    svg {
      vertical-align: middle;
      margin-left: 5px;

      ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: 0;
      `}
    }
  }
`

export const CommentButton = styled(Button)`
  border-radius: 50px;
  margin-bottom: 18px;
  padding: 0 10px;
  font-size: 12px;
  color: #414954;
  background: ${props => props.theme.colors.borderColor};
  border: 1px solid ${props => props.theme.colors.borderColor};
  transition: all 0.3s linear;
  line-height: 26px;

  svg {
    vertical-align: middle;
    margin-left: 5px;

    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0;
    `}
  }

  ${({ active }) => active && css`
    background: ${props => props.theme?.colors.primary};
    border: 1px solid ${props => props.theme?.colors.primary};
    color: white;
  `}
`

export const Comments = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;

  p {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 14px;
  }

  textarea {
    min-height: 104px;
  }
`
