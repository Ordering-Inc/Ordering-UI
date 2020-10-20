import styled from 'styled-components'

export const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 60%;
    padding: 48px 0;
  }
  img {
    width: 100%;
  }
  @media (max-width: 980px){
    div{
      width: 80%;
    }
  } 
`