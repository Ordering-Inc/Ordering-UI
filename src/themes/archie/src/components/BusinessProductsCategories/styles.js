import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px;
  text-align: center;
  position: sticky;

  ${({ vertical }) => vertical
    ? css`
        top: 65px;
        z-index: 4;
        box-shadow: none;
        padding: 0px;
      `
    : css`
        top: 0px;
        z-index: 5;
        border-bottom: 1px solid #DEE2E6;
        
        @media (min-width: 381px) {
          padding: 0 15px;
        }
        @media (min-width: 1024px) {
          background-color: #F7F7F7;
        }
    `
  }

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

  

  
  
`
