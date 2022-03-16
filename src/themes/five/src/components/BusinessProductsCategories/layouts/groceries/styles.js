import styled, { css } from 'styled-components'

export const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 933px){
    width: calc(100% - 40px);
  }
`

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px;
  padding-bottom: 0;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  top: 0;
  text-align: center;
  width: 100%;
  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  div.special{
    ${props => !props.featured && css`
      display: none;
    `}
  }

  @media (min-width: 381px) {
    padding: 15px 15px 0 0;
  }
`

export const CategoryTab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${props => props.categorySpace ?? 0}px;
  border-radius: 8px;
  text-align: left;

  span {
    width: 90%;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primaryContrast};
  `}
`
