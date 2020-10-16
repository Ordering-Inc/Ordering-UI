import styled, { css } from 'styled-components'
export const Tabs = styled.div`
  display: flex;
  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.primary};
  `}
  
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}
`
