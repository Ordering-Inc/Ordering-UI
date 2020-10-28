import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 360px) {
    padding: 20px 10px;
  }
`

export const Title = styled.h1`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  padding: 0px 10px 15px;
`
