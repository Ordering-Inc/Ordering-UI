import React from 'react'
import styled, { css } from 'styled-components'

export const ReviewOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ReviewStarWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const StarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
  > svg {
    cursor: pointer
  }
`
export const PlacedDate = styled.p`
  text-align: center;
`
export const Send = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  button {
    font-size: 14px;
    padding: 6px 20px;
    width: 300px;
    height: 45px;
    line-height: 0;
    svg {
      color: white;
      font-size: 21px;
      vertical-align: middle;
      margin-left: 8px;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
        margin-right: 8px;
        transform: rotateZ(180deg);
      `}
    }
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

export const BusinessName = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`
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
  margin-top: 20px;
  margin-bottom: 20px;
  p {
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 15px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
`

export const LogoAndReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ContinueContainer = styled.div`
  display: flex;
  align-items: center;
  p{
    flex: 1
  }
`
