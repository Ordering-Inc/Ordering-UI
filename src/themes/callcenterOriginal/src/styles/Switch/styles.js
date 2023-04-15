import styled, { css } from 'styled-components'

export const ToggleSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 14px;
  margin-bottom: 0px;

  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    pointer-events: none;
  `}

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${props => props.theme.colors.primary};
    }
    &:focus + span {
      box-shadow: 0 0 1px ${props => props.theme.colors.primary};
    }
    &:checked + span:before {
      -webkit-transform: translateX(11px);
      -ms-transform: translateX(11px);
      transform: translateX(11px);
    }
  }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`
