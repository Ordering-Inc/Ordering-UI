import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  

  ${({ isVerticalList }) => isVerticalList && css`
    padding: 0px;
  `}


  div.special{
    ${props => !props.featured && css`
      display: none;
    `}
  }

  @media (min-width: 381px) {
    padding: 15px;
  }

  @media (min-width: 768px) {
    padding: 0px;
  }
`
