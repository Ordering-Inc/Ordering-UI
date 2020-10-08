import styled from 'styled-components'

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 10px auto;

  h1 {
    opacity: 0.5;
    text-align: center;
  }

  @media (max-width: 576px) {
    width: 80%;
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 20px;
    }
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;
  max-width: 300px;

  img {
    width: 300px;
  }
`
