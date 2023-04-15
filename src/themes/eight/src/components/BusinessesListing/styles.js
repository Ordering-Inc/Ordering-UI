import styled from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;
  min-height: calc(100vh - 390px);

  > h1 {
    color: ${props => props.theme.colors.secundary};
    font-size: 24px;
    text-align: center;
    width: 100%;
    margin: 0 0 20px 0;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 32px;
    }
  }

  @media (min-width: 992px) {
    width: 80%;
    min-height: calc(100vh - 350px);

    > h1 {
      font-size: 40px;
    }
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - 430px);
    margin: 70px auto;
    > h1 {
      font-size: 48px;
    }
  }
`

export const BusinessList = styled.div`
  @media (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`

export const PreviousOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0px;
`

export const BusinessesTitle = styled.h1`
  font-size: 18px;
  margin: 0px 20px;
`

export const PreviousButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button{
    width: 80%;
  }

  @media(min-width: 681px){
      button{
      width: 40%;
    }
  }
`
