import styled, { css } from 'styled-components'

export const CategoryTab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${props => props.categorySpace ?? 0}px;
  border-radius: 8px;
  text-align: left;

  .accordion__icon{
    transform: rotate(90deg);
  }
  
  .rotate {
    transform: rotate(180deg);
  }

  span {
    width: 90%;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primaryContrast};
  `}
`
