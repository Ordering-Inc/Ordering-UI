import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #D9D9D9;
  text-align: center;
  overflow: auto;
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

  @media (min-width: 768px) {
    display: block;
    padding: 0px;
    text-align: initial;
    border-bottom: none;
  }
`

export const Tabs = styled.div`
  display: flex;  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}  
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 3px solid;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #CCC;
    padding: 10px 5px;

    svg {
      font-size: 24px;
    }
  }
`
