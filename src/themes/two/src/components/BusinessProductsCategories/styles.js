import styled, { css } from 'styled-components'

export const Conatiner = styled.div`
  display: flex;
  align-items: center;
`

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 0 5px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #D9D9D9;
  text-align: center;
  z-index: 10;

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
    padding: 0 5px;
  }
`
