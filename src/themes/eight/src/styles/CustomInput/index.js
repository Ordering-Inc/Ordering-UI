import React from 'react'
import styled, { css } from 'styled-components'

const CustomInputContainer = styled.div`
  position: relative;

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.grayMedium};
    position: absolute;
    top: 15px;
    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }

  > input,
  > textarea {
    width: 100%;
    border: 2px solid ${props => props.theme.colors.grayDark};
    padding: 40px 20px 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 7.6px;
    outline: none;
    color: ${props => props.theme.colors.grayDark};

    &:focus {
      border-color: ${props => props.theme.colors.secundary};
    }
  }

  > textarea {
    resize: none;
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
