import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;  
  
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}

  ${({ vertical }) => vertical
    ? css`
        flex-direction: column;
        align-items: flex-start;
      `
      : css`
        flex-direction: row;
        border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        width: 100%;
      `
  }
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 2px solid;
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}
`
