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

export const Text = styled.div`
  display: flex;
  font-weight: 300;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px;

  div {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #000;
  }

  span {
    margin-left: 10px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => props.theme?.rtl && css`
      margin-left: 0;
      margin-right: 10px;    
    `}
  }
`

export const SuboptionPrice = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 300;
  font-size: 14px;
  color: #000;
  margin-left: 5px;
  min-width: 60px;
  max-width: 60px;
  ${props => props.theme?.rtl && css`
    margin-right: 5px;
    margin-left: 0px;
  `}
`
