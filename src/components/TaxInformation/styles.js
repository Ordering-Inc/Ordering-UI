import styled from 'styled-components'

export const TaxInformationContainer = styled.div`
  h2{
    font-size: 18px;
    margin: 10px;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div{
    border: 1px solid #E9ECEF;
    cursor: initial;
    @media (min-width: 681px){
      width: calc(50% - 45px);
    }

  }
`
