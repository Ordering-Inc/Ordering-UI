import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;

  div:not(:last-child) {
    padding-bottom: 5px;
  }

  @media (min-width: 769px) {
    margin-bottom: 10px;
    padding: 15px;
  }
`

export const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 8px;
  line-height: 30px;
  margin-top: 0;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left;
  }
`
