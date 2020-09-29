import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export const TipCard = styled.div`
  border-radius: 16px;
  padding: 5px 30px;
  border: 1px solid #D81212;
  cursor: pointer;
  text-transform: capitalize;

  &.active {
    background-color: #D81212;
    color: #FFF;
  }
`
