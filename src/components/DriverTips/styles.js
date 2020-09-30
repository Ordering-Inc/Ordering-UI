import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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

  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    padding: 10px;
  }

  @media (max-width: 360px) {
    height: 25px;
    width: 25px;
    font-size: 14px;
  }
`
