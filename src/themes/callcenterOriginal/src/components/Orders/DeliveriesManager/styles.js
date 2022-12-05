import styled from 'styled-components'

export const DeliveriesContainer = styled.div`
  flex: 1;
  transition: all 0.5s;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`
export const OrdersContent = styled.div`
`
export const WrapItemView = styled.div`
  width: 100%;
`
