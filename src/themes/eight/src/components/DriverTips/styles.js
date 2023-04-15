import styled from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  text-transform: capitalize;
  font-size: 13px;
  color: ${props => props.theme.colors.primary};
  width: 70px;
  height: 70px;

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
  }
`

export const FormDriverTip = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  input {
    width: 65%;
    box-sizing: border-box;
    flex: 1;
    margin-right: 10px;
    padding: 7px 15px;
  }

  @media (min-width: 768px) {
    input {
      width: 80%;
    }
  }
`

export const DriverTipMessage = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`

export const WrapperTips = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  > div {
    margin: 5px;
  }
`
