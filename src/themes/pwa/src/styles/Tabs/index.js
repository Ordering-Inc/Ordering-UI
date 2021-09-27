import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}
  
`

export const Tab = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  &:first-child {
    padding-left: 0;
    ${props => props.theme?.rtl && css`
        padding-left: 15px;
        padding-right: 0
    `}
  }
  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 3px solid;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}
`
