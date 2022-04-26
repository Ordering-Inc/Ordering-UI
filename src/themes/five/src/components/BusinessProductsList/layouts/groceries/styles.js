import styled, { css } from 'styled-components'

export const ProductsContainer = styled.div`
  background: ${props => props.theme.colors.backgroundPage};
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
  .category-title {
    display: flex;
    align-items: center;
    margin-left: 10px;
    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    img {
      border-radius: 7.6px;
      min-width: 41px;
      min-height: 41px;
      height: 41px;
      width: 41px;
    }
  }
  .category-description {
    margin-left: 15px;
    margin-bottom: 10px;
    display: flex;
    p {
      margin: 0;
      color: #909BA9;
      white-space: pre;
    }
    span {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .wrap-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      min-width: max-content;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.theme?.colors.darkTextColor};
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

export const HeaderWrapper = styled.div``

export const DescriptionModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  img{
    border-radius: 7.6px;
    width: 300px;
    height: 300px;
    min-width: 300px;
    min-height: 300px;
    margin-bottom: 20px;
  }
  p{
    white-space: pre;
  }
`
