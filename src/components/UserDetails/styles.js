import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  h1 {
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }
  h1,
  svg {
    font-size: 24px;
  }
  svg.edit {
    color: #F2BB40;
    cursor: pointer;
  }
  svg.cancel {
    color: #D81212;
    cursor: pointer;
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
