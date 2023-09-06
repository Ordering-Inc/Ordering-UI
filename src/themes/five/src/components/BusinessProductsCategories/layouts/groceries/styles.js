import styled, { css } from 'styled-components'

export const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 7.6px;

  @media (min-width: 993px) {
    /* width: calc(100% - 40px);
    border: 0;
    padding: 0; */
    overflow: auto;
    max-height: calc(90vh - 10px);
  }
`

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 15px 0 0 0;
  padding-bottom: 0;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  text-align: center;
  width: 100%;
  top: 45px;
  position: sticky;
  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  div.special {
    ${props => !props.featured && css`
      display: none;
    `}
  }

  @media (min-width: 381px) {
    padding: 5px;
  }
`

export const CategoryTab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${props => props.categorySpace ?? 0}px;
  text-align: left;
  border-bottom: ${({ isSub }) => !isSub ? '1px solid #ccc' : ''};
  span {
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primaryContrast};
  `}
`

export const IterateCategoriesContainer = styled.div`
  div.level-1 {
    border-bottom: ${({ isSub }) => !isSub ? '1px solid #ccc' : ''} !important;
  }
`
