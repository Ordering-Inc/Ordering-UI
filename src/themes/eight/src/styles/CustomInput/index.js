import React from 'react'
import styled, { css } from 'styled-components'

const CustomInputContainer = styled.div`
  position: relative;

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.grayMedium};
    position: absolute;
    top: 10px;
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }

  > input {
    width: 100%;
    border: 2px solid ${props => props.theme.colors.grayDark};
    padding: 30px 20px 15px 20px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 7.6px;
    outline: none;
    color: ${props => props.theme.colors.grayDark};

    &:focus {
      border-color: ${props => props.theme.colors.secundary};
    }
  }
`

export const CustomInput = (props) => {
  const {
    placeholder
  } = props
  return (
    <CustomInputContainer>
      <span>{placeholder}</span>
      {props.children}
    </CustomInputContainer>
  )
}
