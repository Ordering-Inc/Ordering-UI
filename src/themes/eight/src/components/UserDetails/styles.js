import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
    color: ${props => props.theme.colors.grayDark};
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }
  a {
    font-size: 14px;
    cursor: pointer;
  }
  a.edit {
    color: ${props => props.theme.colors.primary};
  }
  a.cancel {
    color: #F2BB40;
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
  color: ${props => props.theme.colors.grayDark};
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  > * {
    margin: 0;
    width: 75%;
    font-weight: 300;
  }
`
