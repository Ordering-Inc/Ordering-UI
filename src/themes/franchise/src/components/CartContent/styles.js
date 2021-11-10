import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 5px;
  margin-top: 35px;

  .cart {
    > div {
      > div {
        > .accordion {
          padding: 10px 5px;
        }
      }
    }
  }

  div:not(:last-child) {
    padding-bottom: 5px;
  }

  @media (min-width: 769px) {
    margin-top: 0px;
    margin-bottom: 10px;
    padding: 15px;
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
