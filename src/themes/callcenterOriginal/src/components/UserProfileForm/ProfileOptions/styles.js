import styled from 'styled-components'

export const FlexTabs = styled.div`
  width: 100%;
  div{
    justify-content: space-evenly
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }

  svg{
    position: relative;
    top: 2px;
  }

  @media (min-width: 480px){
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 768px){
    width: 50%;
  }
`
