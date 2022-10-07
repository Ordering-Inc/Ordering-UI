import styled, { css } from 'styled-components'

export const BusinessReviewsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 10px;
  box-sizing: border-box;
`

export const ReviewOf = styled.div``

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  
  h3{
    display: none;
  }

  @media (min-width: 480px){
    h3 {
      display: block;
      color: ${props => props.theme.colors.primary};
      margin: 0px;
      svg{
        font-size: 26px;
        vertical-align: text-top;
      }
    }
  }
`

export const Review = styled.div`
  margin: 10px 0;
  @media (min-width: 480px){
    margin: 20px 0;
  }
`

export const ReviewsNotFound = styled.h2`
  margin: 65px 0;
  font-size: 14px;
  color: #B1BCCC;
  text-align: center;
`

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    > div{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
`

export const ReviewsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  ${props => props.theme?.rtl && css`
    padding-right: 30px;
    padding-left: 0;
  `}

  svg {
    font-size: 30px;
    color: ${props => props.theme?.colors.primary};
    margin-right: 13px;
    ${props => props.theme?.rtl && css`
       margin-left: 13px;
       margin-right: 0;
    `}
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    margin: 10px 0;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  ${({ noReviews }) => noReviews && css`
    svg {
      color: #B1BCCC;
    }
  `}
`

export const ReviewsProgressWrapper = styled.div`
  p {
    margin-top: 0;
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
`

export const ReviewsMarkPoint = styled.span`
  position: absolute;
  top: 15px;
  font-size: 12px;
  color: #CED4DA;
  cursor: pointer
`

export const ReviewTime = styled.p`
  font-size: 12px;
  color: #909BA9;
  margin: 0;
`

export const ReviewItemHeader = styled.div`
  margin-bottom: 17px;
`

export const ReviewItemContent = styled.div`
  font-size: 12px;
  color: ${props => props.theme?.colors.darkTextColor};
`

export const SearchContainer = styled.div`
  margin: 35px 0;
  
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #E9ECEF;
    border-radius: 0px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 20px 18px;
    background-position: left center;
    box-sizing: border-box;
    padding: 7px 0 7px 30px;

    ${props => props.theme?.rtl && css`
      padding: 7px 30px 7px 0;
      background-position: right center;
    `}
  }
`

export const ReviewStars = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
