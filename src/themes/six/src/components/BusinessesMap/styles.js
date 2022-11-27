import styled, { css } from 'styled-components'

export const WrapperMap = styled.div`
  position: relative;
  display: flex;  
  justify-content: center;
  box-sizing: border-box;
  min-height: 70vh;
  height:100%;
  
  > div {
    width: 100% !important;
    height: 100% !important; 
  }

  #map {
    top: 1px;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none
  `}

  @media(min-width: 850px){
    width:60vw;    
  }

  @media(min-width: 1201px){
    
  }

`
