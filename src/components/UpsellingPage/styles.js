import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 160px);
  width: 100%;
  padding-bottom: 20px;
  button {
    width: 45%;
    margin-top: 20px;
  }
  
  @media (min-width: 768px){
    justify-content: flex-start;
    height: auto;
  }
`
export const UpsellingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 25%;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;

  @media (min-width: 580px){
    width: 20%;
  }

  @media (min-width: 768px){
    width: 15%;
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
  font-size: 16px;
  div {
    width: 100%;
     h3 {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }
  }
  p{
    color: #D81313;
    margin: 10px auto;
  }
  button {
    width: 100%;
    margin: 5px auto;
    font-size: 0.9em;
  }

  @media (min-width: 480px){
    div{
      h3{
        font-size: 14px;  
      }
    }
    button {
      width: 70%
    }
  }

  @media (min-width: 980px){
    button{
      width: 50%
    }
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;

  button{
    width: 60%;
  }

  @media (min-width: 720px){
    button{
      width: 40%;
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
