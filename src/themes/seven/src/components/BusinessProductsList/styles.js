import styled from 'styled-components'

export const ProductsContainer = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
  @media (min-width: 768px) {
    margin-right: 15px;
  }
`

export const ErrorMessage = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const ProductsListing = styled.div`
  
`

export const WrapAllCategories = styled.div`
  h3 {
    padding: 10px 0;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    color:  ${props => props.theme.colors.primary};
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
  }
`
