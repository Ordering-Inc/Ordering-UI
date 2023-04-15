import styled, { css } from 'styled-components'

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: none;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    border: 1px solid #B1BCCC;
    border-radius: 2px;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  }

  &:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    ${props => props.theme?.rtl ? css`
      right: 0;
    ` : css`
      left: 0;
    `}
    background-color: ${props => props.theme.colors.primary};
    border: none;
  }
  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    ${props => props.theme?.rtl ? css`
      right: 7px;
    ` : css`
      left: 7px;
    `}
  }
`
