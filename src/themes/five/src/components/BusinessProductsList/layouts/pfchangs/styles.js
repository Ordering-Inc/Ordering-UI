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
  margin-bottom: ${({ isSubcategorySearch }) => isSubcategorySearch ? '0px' : '45px'};
`

export const WrapAllCategories = styled.div`
  .category-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-bottom: 12px;
    margin-left: 10px;
    color: #fff;
    font-size: 26px;
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
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }

    @media (min-width: 993px) {
      margin: 0px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.theme?.colors.darkTextColor};
    margin: 0px 0px 0px 10px;
    ${props => props.theme?.rtl && css`
      margin: 0px 10px 0px 0px;
    `}

    @media (min-width: 993px) {
      margin: 0px;
    }
  }
`

export const CategoryDescription = styled.div`
  margin-left: 15px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    p {
      margin: 0;
      color: #fff;
      white-space: pre;
      max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth - 200}px` : 'initial'};
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
      margin-left: 10px;
      cursor: pointer;
      white-space: nowrap;
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
  padding: 0 10px;
  img{
    border-radius: 7.6px;
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin-bottom: 20px;
  }
`

export const DescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  div{
    height: 300px;
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }
  p{
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`

export const SubcategorySearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
