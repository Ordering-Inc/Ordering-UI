import styled from 'styled-components'

export const MyOrdersContainer = styled.div`
  background-color: #f8f8f8;
`

export const MyOrdersTitle = styled.div`
  margin: 0 auto;
  width: 80%;
`

export const ActiveOrders = styled.div`
  text-align: center;
  display: flex;
  overflow: auto;
  width: auto;
`

export const Card = styled.div`
  min-width: 400px;
  margin: 0 10px;
  display: inline-block;
  background: white;
  height: 250px;
  border-radius: 16px;
`
export const Map = styled.div`
  width: 100%;
  height: 40%;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
`

export const Content = styled.div`
  display: inline-flex;
  width: 95%;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
`
export const Logo = styled.div`
  width: 20%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`
export const BusinessInformation = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0 10px;
  width: 70%;
  > h5 {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
  }
  > p {
    margin-block-end: 0.1em;
    margin-block-start: 0.1em;
  }
  > p[name]{
    color: #D81313;
    cursor: pointer
  }
  
`

export const OpenOrder = styled.div`
  height: 15%;
  width: 95%;
  margin: auto;
  > a {
    > button {
    width: 100%;
    height: 100%;
  }
  }
`
export const Price = styled.div`
  > h5 {
    margin-block-end: 1em;
    margin-block-start: 0;
  }
  > p {
    margin-block-end: 0;
    margin-block-start: 1em;
    color: #ff9300;
  }
`
export const OrdersPast = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const IndividualOrderPast = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
 
`
export const OrderPastContent = styled.div`
  display: inline-flex;
  width: 35%;
  align-items: center;
  padding: 10px 0;
`
export const Reorder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > p {
    color: #53ad26;
  }
`
