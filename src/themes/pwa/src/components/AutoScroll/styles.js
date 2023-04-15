import styled, { css } from 'styled-components'

export const ScrollBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const ScrollBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE */
  overflow: -moz-scrollbars-none; /* Firefox */

  &::-webkit-scrollbar {
   display: none; /* Chrome and Safari */
 }
`

export const ScrollBoxContainer = styled.div`
  height: 100%;
  display: inline-flex;
`

export const ArrowButton = styled.span`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    width: 25px;
    min-width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D9D9D9;
    opacity: 0.8;

    ${({ isRight }) => isRight && css`
      right: 0px;
    `}

    svg {
      color: #000000;
      font-size: 24px;
    }
  }
`
