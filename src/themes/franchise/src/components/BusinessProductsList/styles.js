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
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
`

export const WrapperNotFound = styled.div`
  height: 500px;
  > div{
    height: 100%;
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
