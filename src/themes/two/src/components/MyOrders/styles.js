import styled from 'styled-components'

export const Container = styled.div`
  width: 91%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 30px;

  > h1 {
    font-size: 32px;

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }
`
