import styled from 'styled-components'

export const ReviewOf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 30%;
  }
`

export const Content = styled.div`
 > h3{
   color: '#D81212';
 }
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
 overflow: hidden
`
export const Comment = styled.div`
width: 60%
`
export const Scores = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex: 1;
  text-align: center;
`

export const ScoreDiv = styled.div`
  border: 1px solid #ccc;
  width: 22%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 16px;
`