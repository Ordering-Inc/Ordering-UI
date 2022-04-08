import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ isOnline }) => isOnline ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 60px auto;
  box-sizing: border-box;

  > h1 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    margin: 0;
  }

  > p {
    font-size: 14px;
    line-height: 24px;
    margin: 13px 0;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`

export const Image = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  img {
    max-width: 300px;
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 34px 0;
  > button {
    height: 44px;
    border-radius: 8px;
  }
`
