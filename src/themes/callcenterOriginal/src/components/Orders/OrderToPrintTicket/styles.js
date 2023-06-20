import styled from 'styled-components'

export const PrintContainer = styled.div`
  display: none;
  font-family: arial !important;
  color: #000 !important;
  padding: 80px 50px;
  max-width: 420px;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  @media print {
    display: block;

    @page { size: portrait; }
  }
`

export const PrintTextContainer = styled.p`
  font-size: 16px
`
export const PrintProductsContainer = styled.div`
  display: flex;
  flex-direction:column;
`

export const PrintProducts = styled.div`
  display: flex;
  flexDirection:row;
  flex-wrap:wrap;
`

export const Products = styled.div`
  display:flex;
  width:100%;
`

export const ProdcutCommentsContainer = styled.div`
  font-size: 16px;
  width:100%;
`

export const ProductComments = styled.div`
  margin-left: 10px;
`

export const InfoContainer = styled.div`
  display: flex;
`

export const InsideInfo = styled.div`
  display:flex;
  justify-content: flex-start;
  font-size: 16px;
  width: 70%
  font-weight: bold
`

export const InsideInfo2 = styled.div`
  display:flex;
  justify-content: flex-end;
  font-size: 16px;
  width: 30%
`
