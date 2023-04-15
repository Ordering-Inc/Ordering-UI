import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${props => props.theme.colors.fontSecundary};
    font-weight: 200;
    margin: 0px 0 10px;
  }
  button {
    height :40px;
    width: 100px;
  }
`

export const SideForm = styled.div`
  width: 100%;
  margin-top: 25px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const UserData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}
  > * {
    margin: 8px 0;
    width: 75%;
  }

  
`
