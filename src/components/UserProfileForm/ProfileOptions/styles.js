import styled from 'styled-components'

export const FlexTabs = styled.div`
  width: 50%;
  margin: 0 auto;
    div{
      justify-content: space-evenly
    }
    a{
      text-decoration: none;
      color: inherit
    }
    svg{
      position: relative;
      top: 2px
    }
    @media (max-width: 480px){
      width: 100%
    }
`
