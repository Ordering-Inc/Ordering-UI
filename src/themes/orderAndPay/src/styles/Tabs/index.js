import styled, { css } from 'styled-components'

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
    ${({ onlyTwoOptions }) => onlyTwoOptions && css`
      padding-left: 0;
      padding-right: 0;
    `}
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 3px solid;
      font-size: 14px;
      font-weight: 600;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.textDisabled};
    font-size: 12px;
  `}
`
