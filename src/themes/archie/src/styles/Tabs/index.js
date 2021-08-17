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
      width: 100%;

      @media (min-width: 1024px) {
        max-width: 1200px;
        margin: 0 auto;
      }

      @media (min-width: 1405px) {
        max-width: 1420px;
      }
    `
  }
`

export const Tab = styled.div`
  padding: ${({ vertical }) => vertical ? '10px 0' : '10px 15px'};
  cursor: pointer;
  font-weight: 500;
  ${({ active }) => active && css`
    ${({ borderBottom }) => borderBottom && css`
      border-bottom: 2px solid ${props => props.theme.colors.primary};
    `}
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.disabled};
  `}
`
