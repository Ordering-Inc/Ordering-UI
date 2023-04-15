import styled from 'styled-components'

export const Container = styled.div`
  background: #F7F7F7;
  padding: 20px 0;

  @media (min-width: 992px) {
    padding: 30px 0;
  }
`

export const InnerContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    width: 85%;
    flex-direction: row;
  }
`

export const OrdersContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
  flex: 1;
`
