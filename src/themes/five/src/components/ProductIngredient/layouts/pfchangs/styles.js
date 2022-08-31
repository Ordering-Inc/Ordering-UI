import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0px;
  cursor: pointer;
  max-width: 270px;
  border: 2px solid rgb(244,245,246);
  padding: 20px 10px;
  width: 100%;
  margin: 0 10px 10px 10px;
  height: 100px;
  max-height: 100px;
  box-sizing: border-box;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  ${({ isSelected, theme }) => isSelected && css`
      border: 2px solid ${theme?.colors?.gold};
  `}
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    cursor: not-allowed;
  `}
`
