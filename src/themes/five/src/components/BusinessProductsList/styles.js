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
  margin-bottom: 45px;
`

export const WrapAllCategories = styled.div`
  .category-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-bottom: 12px;
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

export const SubCategoriesContainer = styled.div`
  display: flex;
`

export const ContainerButton = styled.div`
  button {
    overflow: hidden;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 50px;
    color: ${({ isSelected }) => isSelected ? '#fff' : '#414954'};
  }
`
