import styled from 'styled-components'

export const ProductsContainer = styled.div`
  width: 95%;
  margin: 20px auto 0px;
`

export const WrapContent = styled.div`
  padding: 15px;
  background: #F8F8F8;
`

export const WrapperSearch = styled.div`
  margin: 15px 0px 0px;
`

export const ProductsNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    opacity: 0.5;
    text-align: center;
  }

  @media (max-width: 410px) {
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
