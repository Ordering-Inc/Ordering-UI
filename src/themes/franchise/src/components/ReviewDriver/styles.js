import styled, { css } from 'styled-components'
import React from 'react'

export const ReviewDriverContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
    color: ${props => props.theme?.colors.darkTextColor};
  }

  textarea {
    min-height: 104px;
  }
`
export const Send = styled.div`
  margin-top: 30px;
  width: 100%;

  button {
    font-size: 14px;
    padding: 6px 20px;
    width: 100%;
  }
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 124px;
  height: 124px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 124px;
  border-radius: 7.6px;

  @media (min-width: 481px){
    width: 100%;
    height: 100%;
    min-height: 124px;
  }
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

export const WrapperBusinessLogo = styled.div`
  align-self: center;
  width: 124px;
  height: 124px;
  min-height: 124px;
  max-width: 124px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
`

export const ReviewsProgressWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 35px;

  p {
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 14px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
`

export const ReviewsProgressContent = styled.div`
  background: #E9ECEF;
  border-radius: 50px;
  width: 100%;
  height: 4px;
  position: relative;
  margin-bottom: 30px;
`

export const ReviewsProgressBar = styled.div`
  height: 4px;
  border-radius: 50px;
  background: #344050;
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
        margin-right: 50%;
        margin-left: 0;
      `}

      > span {
        position: absolute;
        height: 4px;
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

export const LogoAndReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CommentsList = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  button {
    border-radius: 50px;
    margin-bottom: 18px;
    margin-right: 40px;
  
    ${props => props.theme?.rtl && css`
      margin-left: 40px;
      margin-right: 0;
    `}

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
