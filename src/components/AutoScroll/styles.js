import styled from 'styled-components'

export const DivContainer = styled.span`
  display: inherit;
  svg{
    background: #D9D9D9;
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    align-self: center;
    top: 0;
    position: sticky;
  }
  svg.right{
    right: 1%;
  }
  svg.left{
    left: 1%;
  }
  svg.hidden{
    display: none;
  }
`
