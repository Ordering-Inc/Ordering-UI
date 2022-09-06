import styled, { css } from 'styled-components'

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

  ${({ pfchangs }) => pfchangs && css`
      border-bottom: 1px solid #fff;
      div{
        div{
          flex: 1;
          display: flex; 
          justify-content: center;
          padding: 20px;
          border-bottom-width: 3px;
        }
      }
      a{
        font-size: 24px;
        svg {
          display: none;
        }
      }
  `}

  @media (min-width: 480px){
    width: ${({ pfchangs }) => pfchangs ? '100%' : '70%'};
    margin: 0 auto;
  }

  @media (min-width: 768px){
    width: ${({ pfchangs }) => pfchangs ? '100%' : '70%'};
  }
`
