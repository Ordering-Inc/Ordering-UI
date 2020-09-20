import styled, { css } from 'styled-components'

const theme = {
  colors: {
    primary: '#D81313',
    primaryContrast: '#FFF',
    secundary: '#9A9A9A',
    secundaryContrast: '#000'
  }
}

export const Tabs = styled.div`
  display: flex;
  
  ${({ variant }) => variant === 'primary' && css`
    color: ${theme.colors.primary};
  `}
  
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;

  ${({ active }) => !active && css`
    color: #CBCBCB ;
  `}
`
