import styled, { css } from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
  width: 100%;
  h4 {
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
    `}
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
  }
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
    padding-bottom: 3px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
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
  p {
    font-size: 14px;
    line-height: 24px;
    color: #212629;
    margin: 0;
  }
`
