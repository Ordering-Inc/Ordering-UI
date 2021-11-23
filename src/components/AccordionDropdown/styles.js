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
