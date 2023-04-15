import styled from 'styled-components'

export const PageNotFoundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  height: ${({ width }) => width > 820 ? 'calc(100vh - 65px)' : 'calc(100vh - 97px)'};

  @media (min-width: 1024px) {
    height: auto;
    margin: 40px auto;
  }
`

export const PageNotFoundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  border: 2px solid black;
  padding: 10px;
  position: relative;

  h1{
    font-size: 23px;
    margin: 0px;
    padding: 0px;
    font-weight: 600;
  }

  img{
    position: absolute;
    top: 42px;
  }
`

export const PageNotFoundImage = styled.div`
  @media (min-width: 1024px) {
    img {
      width: 450px;
      height: 450px;
    }
  }
`
