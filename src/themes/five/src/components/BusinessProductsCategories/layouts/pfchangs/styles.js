import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px 0px 0px 0px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 100;
  position: sticky;
  top: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts?.special?.name}, Arial, Helvetica;
  ${({ subcategoriesLayout }) => subcategoriesLayout ? css`
    border-bottom: ${({ subcategoriesLayout }) => subcategoriesLayout ? 'none' : '1px solid #D9D9D9'};
    ` : css`
    justify-content: center;
  `}
  width: ${props => props.w ?? '100%'};
  position: relative;
  ${({ pfchangs }) => !pfchangs && css`
  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 10px 0px;
    margin: 0 15px;
    color: #000;
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
  &.category-lists{
    display: flex;
    width: 102%;
    ${({ centerAutoscroll }) => centerAutoscroll && css`
      width: 100%;
      justify-content: center;
    `}
  }
  div.center {
    display: flex;
    align-items: center;
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
      margin: 0 5px;
      height: 4px;
      margin-bottom: 10px;
      @media (min-width: 580px){
        margin: 0 30px;
        margin-bottom: 10px;
      }
      @media (min-width: 768px){
        margin: 0 40px;
        margin-bottom: 10px;
      }
    }
  `}
  &:hover {
    ${({ hover }) => hover && css`
      span {
        background: ${({ theme }) => theme.colors.primary};
        margin: 0 5px;
        height: 4px;
        margin-bottom: 10px;
        @media (min-width: 580px){
          margin: 0 30px;
          margin-bottom: 10px;
        }
        @media (min-width: 768px){
          margin: 0 40px;
          margin-bottom: 10px;
        }
      }
    `}
  }
`

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ hide }) => hide && css`
    display: none;
  `}
`

export const Diviver = styled.div`
  position: relative;
  height: 1px;
  background: #fff;
  width: calc(100% + 40px);
  z-index: 1;
  left: -20px;
`
