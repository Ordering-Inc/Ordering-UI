import styled, { css } from 'styled-components'

export const ReviewOf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 30%;
  }
`

export const Content = styled.div`
  > h3 {
    color: "#D81212";
  }
  min-height: 180px;
`

export const ReviewsNotFound = styled.h2`
  margin-top: 50px;
`

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 30px 0;
`

export const Comments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;

  div p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
    }
  }
`
export const Comment = styled.div`
  width: 60%;
`
export const Scores = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex: 1;
  text-align: center;
  flex-wrap: wrap;

  @media (min-width: 481px){
    flex-wrap: nowrap;
  }
`

export const ScoreDiv = styled.div`
  border: 1px solid #ccc;
  width: 22%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 10px 0px;

  p {
    margin: 0px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
       margin-left: 5px;
       margin-right: 0;
    `}
    }
  }

  @media(max-width: 768px){
    font-size: 14px;
  }

  @media(max-width: 480px){
    width: 44%;
    margin-bottom: 10px;
  }
`

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 30px 0;
    > div{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
`
