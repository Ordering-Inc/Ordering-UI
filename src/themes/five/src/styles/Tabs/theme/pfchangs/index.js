import styled, { css } from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  ${({ variant }) => variant === 'primary' && css`
    color: ${props => props.theme.colors.darkTextColor};
  `}
`

export const Tab = styled.div`
  padding: 0px 15px !important;
  margin: 0px 5px;
  font-size: 15px;
  cursor: pointer;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  height: 70px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.tertiary || '#fff'};

  @media (min-width: 580px){
    width: 170px;
    padding: 0px 30px !important;
    margin: 0px 25px;
    margin-bottom: 5px;
    font-size: 20px;
  }
  @media (min-width: 769px){
    width: 230px;
    padding: 0px 40px !important;
    margin: 0px 40px;
    margin-bottom: 5px;
    font-size: 22px;
  }
`
