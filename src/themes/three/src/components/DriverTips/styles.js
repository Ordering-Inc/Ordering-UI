import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  margin-top: 20px;
  p {
    font-size: 12px;
    margin-top: 0px;
    color: ${props => props.theme.colors.darkGray};
  }
`

export const WrapDriverTip = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;
  height: 30px;
  width: 30px;
  font-size: 14px;
  background-color: ${props => props.theme.colors.secundary};

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  }

  @media (min-width: 768px) {
    padding: 5px 30px;
  }
`
