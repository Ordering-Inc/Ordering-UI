import styled, { css } from 'styled-components'

export const Container = styled.div`
  // width: 100%;
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
