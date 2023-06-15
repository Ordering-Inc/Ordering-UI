import styled, { css } from 'styled-components'

export const GpsButtonStyle = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  padding: 0;
  width: 43px;
  height: 43px;
  line-height: 34px;
  text-align: center;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  ${props => props.theme?.rtl && css`
    left: 0;
    right: initial;
  `}
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 25px;
  }
`
