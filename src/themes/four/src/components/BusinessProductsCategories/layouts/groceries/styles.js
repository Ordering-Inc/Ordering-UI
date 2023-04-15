import styled, { css } from 'styled-components'

export const CategoriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  top: 0;
  text-align: center;

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
`;

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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primaryContrast};
    font-weight: bold;
  `}
`
