import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 20px;

  @media (min-width: 769px) {
    margin-bottom: 10px;
    padding: 0;
  }
`

export const NotCarts = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;

  img {
    width: 200px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 10px 0;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
    color: #000;
  }
  button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export const Divider = styled.div`
  background-color: #F7F7F7;
  border-top: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
  height: 10px;
`
