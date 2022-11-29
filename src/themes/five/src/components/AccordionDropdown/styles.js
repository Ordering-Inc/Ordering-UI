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
    width: 9
    0%;
  }

  > div {
    display: flex;
    align-items: center;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primaryContrast};
  `}
  
`

export const SelectCategory = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme?.colors?.primary};
  margin-right: 10px;
  height: 20px;
  svg {
    color: ${({ theme }) => theme?.colors?.primary}
  }
  &:hover{
    opacity: 0.8;
  }
`
