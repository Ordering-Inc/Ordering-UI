import styled, { css } from 'styled-components'

export const ReviewOf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0px;
    font-size: 16px;
  }

  > div {
    width: 30%;
  }
`

export const Content = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin: 0px;
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
  width: 44%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 10px 0px;
  margin-bottom: 10px;
  font-size: 14px;

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
