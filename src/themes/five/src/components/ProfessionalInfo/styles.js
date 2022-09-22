import styled from 'styled-components'
import React from 'react'

export const Container = styled.div`
  position: relative;
  padding: 30px 20px 0px 20px;
`

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 220px;
    height: 200px;
  }
`

const ProfessionalPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 298px;
  width: 314px;
  min-width: 300px;
  border-radius: 7.6px;
  margin-bottom: 36px;
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

export const InfoWrapper = styled.div`
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    margin-top: 0px;
    margin-bottom: 4px;
  }
`

export const OccupationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  > p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
  }
`

export const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`

export const Divider = styled.div`
  background: ${props => props.theme.colors.grayDividerColor};
  margin-left: -20px;
  width: calc(100% + 40px);
  height: 8px;
`

export const ReviewWrapper = styled.div`
  margin-top: 25px;
  > h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
`

export const ReviewItemContatiner = styled.div`
  margin-bottom: 40px;
`

export const ReviewQualityContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReviewBarContainer = styled.div`
  margin: 15px 0;
`

const ReviewBarStyled = styled.div`
  height: 6px;
  border-radius: 10px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.headingColor} ${props.percentage}%, ${props.theme.colors.grayDividerColor} ${props.percentage}%)`};
`

export const ReviewBar = (props) => {
  return (
    <ReviewBarStyled
      {...props}
    >
      {props.children}
    </ReviewBarStyled>
  )
}

export const ReviewQualityTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
  }
`

export const Comment = styled.div`
  font-size: 12px;
  margin: 25px 0;
`

export const NotReviewed = styled.p`
  font-size: 14px;
`
