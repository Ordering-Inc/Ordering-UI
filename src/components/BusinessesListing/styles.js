import styled from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const NotFoundBusinesses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 45px);
  margin: auto;

  h1 {
    opacity: 0.5;
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      padding: 10px 60px;
    }
  }

  @media (max-width: 410px) {
    h1 {
      font-size: 24px;
    }
    div button {
      padding: 5px 40px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 20px;
    }
  }
`
