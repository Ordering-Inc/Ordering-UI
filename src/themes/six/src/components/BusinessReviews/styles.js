import styled, { css } from 'styled-components'

export const BusinessReviewsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`

export const ReviewOf = styled.div`
  display: flex;
  flex-direction: column ;
  padding: 25px 25px 12px;
`

export const WrapperStars = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary};
  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem
    }
  }
 
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`
export const TotalStar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  background: #DEE2E6;
  padding: 7px 25px;
  color: #6C757D;
  font-weight: bold;
  svg {
    margin: 0 3px;
  }
`
export const Comment = styled.div`
  width: 100%;
  padding: 0px 25px;
`

export const ScoresContainer = styled.div`
  overflow-x: auto;
  padding: 0px 25px;
`

export const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 736px;
  margin: 10px auto;

  @media (min-width: 1024px){
    width: 100%;
    flex-wrap: wrap;
  }
`

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 21%;
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

  @media (min-width: 1024px){
    width: 42%;
  }

  @media (min-width: 1200px){
    width: 44%;
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
