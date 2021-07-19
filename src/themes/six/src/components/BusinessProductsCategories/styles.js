import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  position: sticky;
  top: 0;
  text-align: center;
  z-index: 5;

  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  div.special{
    ${props => !props.featured && css`
      display: none
    `}
  }

  @media (min-width: 381px) {
    padding: 15px;
  }
`
