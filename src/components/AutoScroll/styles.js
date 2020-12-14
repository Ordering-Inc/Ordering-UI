import styled, { css } from 'styled-components'

export const AutoscrollContainer = styled.span`
  display: ${props => props.modal ? 'flex' : 'inherit'};
  width: ${props => props.modal ? '300vw' : 'initial'};
  
  svg{
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    min-width: 20px;
    height: 20px;
    align-self: center;
    top: ${props => props.modal ? '35%' : '0'};
    position: sticky;
    color: #000000;
    border: 1px solid #333;
    opacity: 0.9;
  }

  #right-autoscroll{
    ${props => props.theme?.rtl ? css`
      left: 92%;
    ` : css`
      right: 1%;
    `}
  }
  #left-autoscroll{
    ${props => props.theme?.rtl ? css`
      right: 92%;
    ` : css`
      left: 1%;
    `}    
  }
  svg:active{
    border: 0
  }
  svg.hidden{
    opacity: 0;
  }

  @media (min-width: 480px){
    #right-autoscroll{
    ${props => props.theme?.rtl && css`
      left: 95%;
    `}
   }
    #left-autoscroll{
      ${props => props.theme?.rtl && css`
        right: 95%;
      `
      }
    }
  }

  @media (min-width: 768px){
    width: ${props => props.modal && '100%'};
    display: inherit;
    ${props => props.modal && css`
      #left-autoscroll{
        opacity: 0;
      }
      #right-autoscroll{
        opacity: 0;
      }
    `}
  }

  @media (min-width: 1024px){
    #right-autoscroll{
    ${props => props.theme?.rtl && css`
      left: 97%;
    `}
   }
    #left-autoscroll{
      ${props => props.theme?.rtl && css`
        right: 97%;
      `
    }
  }
  }
`
