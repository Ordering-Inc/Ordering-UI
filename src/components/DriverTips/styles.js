import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  text-transform: capitalize;
  height: 30px;
  width: 30px;
  font-size: 14px;
  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  }
  @media (min-width: 768px) {
    border-radius: 16px;
    padding: 5px 30px;
  }
`
