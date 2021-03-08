import styled, { css } from 'styled-components'

export const BusinessReviewsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`

export const ReviewOf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px; 
  h3 {
    margin: 0px;
    font-size: 16px;
  }

  > div {
    width: 30%;
  }

  span {
    display: none;
    width: 30%;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
    > div {
      width: 100%;
    }
  }

  @media (min-width: 480px){
    span{
      display: block;
    } 
  }
`

export const WrapperStars = styled.div`
  width: 40%;
  text-align: right;
  color: ${props => props.theme.colors.primary};
  svg{
    font-size: 28px;
    vertical-align: bottom;
  }
  @media (min-width: 480px){
    display: none;
  }
`

export const WrapperSelect = styled.div`
  width: 95%;
  margin: 10px 0px;
  > div {
    width: 100%;
  }
  @media (min-width: 480px){
    width: 45%;
    display: none;
  }
`

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
  margin: 20px 0;
  @media (min-width: 480px){
    margin: 40px 0;
  }
`

export const ReviewsNotFound = styled.h2`
  margin: 75px 0;
`

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Comments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;

  h4 {
    margin: 10px 0 5px 0;
  }

  div p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    svg {
      margin-right: 5px;
      font-size: 24px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
    }
  }
`
export const Comment = styled.div`
  width: 100%;
  @media (min-width: 480px){
    width: 60%;
  }
`

export const ScoresContainer = styled.div`
  overflow-x: auto;
`

export const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 800px;
  margin: 10px auto;

  @media (min-width: 768px){
    width: 100%;
  }
`

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 20%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;

  p {
    margin: 0px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 5px;
      font-size: 18px;
      ${props => props.theme?.rtl && css`
       margin-left: 5px;
       margin-right: 0;
    `}
    }
  }
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
