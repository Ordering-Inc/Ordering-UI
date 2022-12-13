import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}
`

export const Tab = styled.div`
  padding: 0px 40px !important;
  margin: 0px 40px;
  cursor: pointer;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  height: 70px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.tertiary || '#fff'};
  @media (min-width: 480px){
    width: 230px;
    font-size: 22px;
  }
`
