import styled from 'styled-components'

export const ProductsContainer = styled.div`
  display: block;
`

export const WrapContent = styled.div`
  padding: 15px;
  background: #F8F8F8;
`

export const ProductsNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    opacity: 0.7;
    margin-right: 10px;
  }
  svg {
    font-size: 24px;
    color: #D81313;
  }
`
