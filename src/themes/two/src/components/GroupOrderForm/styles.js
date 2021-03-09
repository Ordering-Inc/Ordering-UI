import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
`

export const Header = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`

export const Content = styled.div`
  p {
    font-weight: 500;
  }
`
export const TabsContainer = styled.div`
  display: flex;
  border-radius: 25px;
  height: 44px;
  background: ${props => props.theme.colors.secondary};
`

export const Tab = styled.div`
  cursor: pointer;
  border-radius: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${props => props.theme.colors.darkTextColor};

  ${({ active }) => active && css`
    color: #fff;
    background: ${props => props.theme.colors.darkTextColor};
  `}
`
export const ActionButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  margin-top: 20px;

  button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
