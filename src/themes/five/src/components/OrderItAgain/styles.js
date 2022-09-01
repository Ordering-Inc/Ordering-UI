import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding-top: 30px;
  ${({ isGroceries }) => isGroceries && css`
    padding-top: 0px;
  `}
  margin-right: 30px;
  ${props => props.theme.rtl && css`
    margin-left: 30px;
    margin-right: 0px;
  `}
`

export const ContentHeader = styled.div`
  margin-bottom: 27px;

  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
    color: ${props => props.theme.colors.darkGray};
  }
  ${({ isGroceries }) => isGroceries && css`
    ${props => props.theme.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  `}
`

export const ProductListWrapper = styled.div`
  overflow: auto hidden;
  width: 100%;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;

  #orderItAgain > div {
    width: 350px;
  }
`
