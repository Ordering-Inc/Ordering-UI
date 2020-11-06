import styled, { css } from 'styled-components'

export const DivContainer = styled.span`
  display: ${props => props.modal ? '-webkit-box' : 'inherit'};
  
  svg{
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    align-self: center;
    top: ${props => props.modal ? '35%' : '0'};
    position: sticky;
    color: #000000;
  }

  #right-autoscroll{
    ${props => props.theme?.rtl ? css`
      left: 95%;
    ` : css`
      right: 1%;
    `}
  }
  #left-autoscroll{
    ${props => props.theme?.rtl ? css`
      right: 95%;
    ` : css`
      left: 1%;
    `}    
  }
  svg.hidden{
    display: none;
  }

  @media (min-width: 768px){
    width: ${props => props.modal && '100%'};
    display: inherit;
    ${props => props.modal && css`
      #left-autoscroll{
        display: none;
      }
      #right-autoscroll{
        display: none;
      }
    `}
    
  }
`
