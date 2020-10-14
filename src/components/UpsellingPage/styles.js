import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  > button {
    width: 45%;
    margin-top: 20px;
  }
`
export const UpsellingContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  height: 100%;
  min-height: 405px;
  overflow: auto;
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 25%;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
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
  height: 40%;
  > img{
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`

export const Details = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 100%;
    > p {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
    }
  }
  > button {
    width: 70%
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;
  top: 84%;
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
  width: 25%;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
`
