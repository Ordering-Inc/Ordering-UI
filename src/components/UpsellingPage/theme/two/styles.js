import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: auto;
`
export const UpsellingContainer = styled.div`
  display: flex;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #eee;
  min-width: 150px;
  padding: 10px 20px;
  margin: 0px 5px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 300px;
  justify-content: space-between;

  @media (max-width: 576px) {
    padding: 5px 10px;
  }
`

export const Image = styled.div`
  img{
    height: auto;
    border-radius: 16px;
    aspect-ratio: attr(width) / attr(height);
  }

  @media (max-width: 576px) {
    width: 50px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  max-width: 170px;
  div {
    width: 100%;
     h3 {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
    }
  }
  p{
    color: ${props => props.theme.colors.grayTextColor};
    margin: 0px;
  }
  button {
    width: auto;
    padding: 0 20px;
    font-size: 1em;
    line-height: 22px;
  }

  @media (min-width: 480px){
    div{
      h3{
        font-size: 14px;
      }
    }
  }

`

export const CloseUpselling = styled.div`
  width: 100%;
  text-align: center;

  button{
    width: 90%;
    font-size: 1.4em;
    padding: 10px 0;
  }

  @media (min-width: 720px){
    button{
      width: 40%;
      padding: 2px;
      font-size: 1em;
    }
  }
`
