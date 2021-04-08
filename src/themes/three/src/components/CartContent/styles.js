import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 20px;
  
  h1 {
    font-size: 24px;
  }

  div:not(:last-child) {
    padding-bottom: 5px;
  }

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
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0px;
  }

  button {
    height: 45px;
    width: 100%;
    margin-top: 20px;
  }
`
