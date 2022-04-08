import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ isOnline }) => isOnline ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 150px auto 100px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 70px auto;
  }
`

export const Image = styled.div`
  padding-left: 20px;
  img {
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
`
