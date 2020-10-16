import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  > button {
    width: 45%;
    margin-top: 20px;
  }
`
export const UpsellingContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  overflow: auto;
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 15%;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
  @media (max-width: 720px){
    width: 35%;
    overflow: auto;
  }
`

export const Image = styled.div`
  width: 100%;
  > img{
    width: 100%;
    border-radius: 16px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9em;
  overflow: hidden;
  > div {
     h5 {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  > p{
    color: #D81313;
    margin: 10px auto;
  }
  > button {
    width: 50%;
    margin: 5px auto;
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;
  button{
    width: 40%;
  }
  @media (max-width: 720px){
    button{
      width: 60%;
    }
  }
`

export const SkeletonContainer = styled.div`
  display: flex;
  width: 15%;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
`
