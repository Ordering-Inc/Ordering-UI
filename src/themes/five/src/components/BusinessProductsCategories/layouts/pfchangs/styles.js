import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px 0px 0px 0px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: ${({ subcategoriesLayout }) => subcategoriesLayout ? 'none' : '1px solid #D9D9D9'};
  text-align: center;
  width: ${props => props.w ?? '100%'};
  ${({ pfchangs }) => !pfchangs && css`
  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 10px 0px;
    margin: 0 15px;
    &:nth-of-type(1) {
      margin-left: 0;
      ${props => props.theme.rtl && css`
        margin-left: 15px;
        margin-right: 15px;
      `}
    }
  `}

  div.special {
    ${props => !props.featured && css`
      display: none
    `}
  }

  @media (min-width: 381px) {
    padding: 15px 0px 0px 0px;
  }
  @media (min-width: 992px) {
    width: ${props => props.w ?? 'auto'};
  }
`

export const CategoryPFChangs = styled.div`
  display: flex;
  flex-direction: column;
  ${({ active }) => active && css`
    span {
      background: ${({ theme }) => theme.colors.primary};
      margin: 0 40px;
      height: 4px;
      margin-bottom: 10px;
    }
  `}
`

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
