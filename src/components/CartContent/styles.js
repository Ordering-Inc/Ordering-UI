import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 769px) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px 0px;
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
  }
  h1 {
    margin: 5px 0px 0px;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
  }
`
