import styled from 'styled-components'

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    opacity: 0.5;
    text-align: center;
  }

  @media (min-width: 840px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;
`
