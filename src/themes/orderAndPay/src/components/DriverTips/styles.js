import styled, { css } from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  overflow: auto;
`

export const TipCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #E9ECEF;
  width: 62px;
  height: 62px;
  min-width: 62px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 14px;
  color: #B1BCCC;
  transition: all 0.3s;

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

export const DriverTipLabel = styled.label`
  font-size: 16px;
  align-self: flex-start;

  ${props => props.theme?.rtl && css`
    margin-left: 20px;
    margin-right: 0;
  `}
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  input {
    width: 65%;
    padding: 4px 15px;
    box-sizing: border-box;
    flex: 1;
    margin-right: 10px;
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
  justify-content: center;
  align-items: center;
  overflow: auto;
  > div {
    margin: 5px;
  }
`
