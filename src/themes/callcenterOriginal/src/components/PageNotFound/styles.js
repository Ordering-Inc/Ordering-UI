import styled from 'styled-components'

export const PageNotFoundContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px;
  margin-top: 60px;
  div{
    width: 50%;
  }
  img {
    width: 100%;
  }
  @media (max-width: 980px){
    div{
      width: 80%;
    }
  }
  @media (max-width: 550px){
    div{
      width: 100%;
    }
  }
`

export const PageNotFoundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  span{
    padding: 12px 20px;
    background-color: white;
    font-size: 2.5rem;
    border-radius: 12px;
    border: 2px solid black;
  }
  img{
    position: relative;
    width: 8%;
    bottom: 17px;
  }
  @media (max-width: 1024px){
    span{
      padding: 10px 20px;
      font-size: 1.7rem;
      border: 1.8px solid black;
    }
    img{
      bottom: 14px;
    }
  }
  @media (max-width: 980px){
    span{
      border: 2px solid black;
    }
    img{
      width: 7%;
    }
  }
  @media (max-width: 425px){
    span{
      font-size: 1.2rem;
      border-width: 1px;
      padding: 10px 15px
    }
  }
  @media (max-width: 320px){
    img{
      width: 10%;
    }
  }
`
