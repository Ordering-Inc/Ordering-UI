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

  ${({ hover }) => hover && css`
    border: 1px solid transparent;
    @keyframes hoverTab {
      from { 
        color: ${props => props.theme.colors.darkGray};
      }
      to { 
        color: ${({ activeColor }) => activeColor || ''};
      }
    }
    
    &:hover{
      animation-name: hoverTab;
      animation-duration: 1s;
      color: ${({ activeColor }) => activeColor || ''};
      ${({ borderBottom }) => borderBottom && css`
        border-bottom: 1px solid ${({ activeColor }) => activeColor || ''};
      `}
    }
  `}

  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 1px solid ${({ activeColor }) => activeColor || ''};
    `}
    color: ${({ activeColor }) => activeColor || ''};
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.darkGray};
  `}
`
