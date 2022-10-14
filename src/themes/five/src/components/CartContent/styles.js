import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 0px 10px;

  div:not(:last-child) {
    padding-bottom: 5px;
  }

  
  ${({ theme }) => theme?.layouts?.header?.components?.cart?.components?.layout?.type === 'pfchangs' && css`
    padding: 0;
  `}

  @media (min-width: 769px) {
    margin-bottom: 10px;
    padding: 15px;
    ${({ theme }) => theme?.layouts?.header?.components?.cart?.components?.layout?.type === 'pfchangs' && css`
      padding: 0;
    `}
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

export const NotCartsPFChangs = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  h1{
    text-transform: uppercase;
    margin: 5px;
    font-weight: bold;
  }
  h2{
    font-size: 16px;
  }
  button{
    width: 100%;
    background: ${({ theme }) => theme?.colors?.gold};
    height: 46px;
    color: #000;
  }
`

export const BackToMenuButton = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px -1px 4px 0px;
  background: #fff;
  cursor: pointer;
  p {
    text-decoration: underline;
    color: #000;
    cursor: pointer;
  }
`
