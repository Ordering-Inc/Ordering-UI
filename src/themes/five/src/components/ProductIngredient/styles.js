import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;

  span {
    display: flex;
    font-size: 14px;
    color: ${props => props.theme.colors.darkGray};
  }

  span:nth-child(1) {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 24px;
      &[disabled] {
        color: ${props => props.theme.colors.lightGray};
      }
    }
  }
`
