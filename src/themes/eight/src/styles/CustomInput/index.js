import React from 'react'
import styled, { css } from 'styled-components'

const CustomInputContainer = styled.div`
  position: relative;

  > span {
    font-size: 12px;
    color: ${props => props.theme.colors.grayMedium};
    position: absolute;
    top: 10px;
    ${props => props.theme?.rtl ? css`
      margin-right: 22px;
    ` : css`
      margin-left: 22px;
    `}
  }

  > input,
  > textarea {
    width: 100%;
    border: 2px solid ${props => props.theme.colors.grayDark};
    padding: 32px 20px 10px 20px;
    box-sizing: border-box;
    font-size: 14px;
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

  @media (min-width: 768px) {
    span {
      top: 15px;
      font-size: 14px;
    }
    > input,
    > textarea {
      padding: 40px 20px 10px 20px;
      font-size: 16px;
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
