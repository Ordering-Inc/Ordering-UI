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

export const WrapperSearch = styled.div`
  margin: 10px 20px 0px;
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
  width: 50%;
  height: 100vh;
  margin: 10px auto;

  div.image {
    max-width: 300px;
    max-width: 300px;

    img {
      width: 300px;
    }
  }

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
      padding: 2px 60px;
    }
  }

  @media (max-width: 576px) {
    width: 80%;
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 20px;
    }
    div button {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`
