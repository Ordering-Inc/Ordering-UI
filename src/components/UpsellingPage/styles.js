import styled from 'styled-components'

export const UpsellingContainer = styled.div`
  display: flex;
  height: 90%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 100%;
  > button {
    width: 45%
  }
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 25%;
  height: 80%;
  margin: 0 10px;
  padding: 0 5px;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
`

export const Image = styled.div`
  width: 100%;
  height: 50%;
  > img{
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`
export const Details = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  > p {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }
`
