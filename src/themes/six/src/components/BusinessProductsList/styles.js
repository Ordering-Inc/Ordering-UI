import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
  h2 {
    margin-bottom: 0;
  }
   h3 {
    padding: 7px;
    margin-top: 0;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
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
  display: flex;
  flex-wrap: wrap;
`

export const WrapAllCategories = styled.div`
  h3 {
    margin-left: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
  }
`
