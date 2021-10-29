import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FacebookButton = styled.button`
  border-radius: 30px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
  }
  
  ${({ isSignup }) => isSignup ? css`
    background-color: #FFF;
    border-color: transparent;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    &:active {
      background: ${darken(0.07, '#FFF')};
    }
    ` : css`
    background-color: #3D5A99;
    border: 1px solid #3D5A99;
    &:active {
      background: ${() => darken(0.07, '#3D5A99')};
    }
  `}

`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  ${props => props.theme?.rtl ? css`
    padding-right: 10px;
  ` : css`
    padding-left: 10px;
  `}

  svg {
    font-size: 20px;
    color: #067CEA;
  }

  div {
    font-weight: 500;
    font-size: 14px;
    margin: 0 15px;
  }

  ${({ isSignup }) => isSignup ? css`
    div {
      color: ${props => props.theme.colors.grayDark};
    }
  ` : css`
    div {
      color: #FFF;
    }
  `}
`

export const IconWrapper = styled.span`
  background-color: #FFF;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
