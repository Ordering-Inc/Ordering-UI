import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 25px;
  height: 40px;
`

export const TipCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  text-transform: capitalize;
  height: 100%;
  font-size: 14px;
  width: 25%;

  &.active {
    background: ${props => props.theme.colors.darkTextColor};
    color: #fff;
  }
`
