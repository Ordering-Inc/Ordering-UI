import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px;

  div:not(:last-child) {
    padding-bottom: 5px;
  }

  @media (min-width: 769px) {
    margin-bottom: 10px;
    padding: 10px;
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

export const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 18px;
`
