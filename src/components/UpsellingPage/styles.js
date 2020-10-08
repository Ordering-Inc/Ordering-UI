import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > button {
    width: 45%
  }
`
export const UpsellingContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  height: 90%;
`

export const Item = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 25%;
  margin: 10px;
  padding: 10px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
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
  height: 50%;
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
    width: 50%
  }
`
