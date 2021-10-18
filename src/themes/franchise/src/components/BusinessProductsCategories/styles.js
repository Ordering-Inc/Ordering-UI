import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px;
  padding-bottom: 0;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #D9D9D9;
  text-align: center;

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
    padding: 15px 0 0 0;
  }
`
