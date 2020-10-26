import styled, { css } from 'styled-components'

export const DivContainer = styled.span`
  display: inherit;
  
  svg{
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    align-self: center;
    top: 0;
    position: sticky;
    color: #000000
  }
  svg.right{
    ${props => props.theme?.rtl ? css`
      left: 95%;
    ` : css`
      right: 1%;
    `}
  }
  svg.left{
    ${props => props.theme?.rtl ? css`
      right: 95%;
    ` : css`
      left: 1%;
    `}    
  }
  svg.hidden{
    display: none;
  }
`
