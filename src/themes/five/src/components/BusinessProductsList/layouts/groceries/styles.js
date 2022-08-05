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
    justify-content: ${({ isCategorySelected }) => isCategorySelected ? 'flex-start' : 'space-between'};
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
    width: 100%;
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

export const HeaderWrapper = styled.div`
  width: 100%;
`

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

export const RibbonBox = styled.div`
  padding: 2px 8px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.colorTextSignForm};
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  background-color: ${props => props.theme.colors.primary};
  max-width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-left: 5px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 5px;
  `}

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `}

  ${({ isRoundRect }) => isRoundRect && css`
    border-radius: 7.6px;
  `}

  ${({ isCapsule }) => isCapsule && css`
    border-radius: 50px;
  `}
`

export const CategoryDescripion = styled.div`
    margin-left: 15px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-end;
    p {
      margin: 0;
      color: #909BA9;
      max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth - 200}px` : 'initial'};
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: anywhere;
    }
    span {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
      margin-left: 10px;
      cursor: pointer;
      white-space: nowrap;
      overflow: visible;
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

export const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
