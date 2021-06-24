import styled, { css } from 'styled-components'

export const DriverTipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  > button {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 30px 0 10px 0;
  }
`

export const TipCard = styled.div`
  display: flex;
  align-items: center;
  border-bottom : 1px solid #CCC;
  padding: 15px 0;
  cursor: pointer;

  svg {
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  &.active {
    svg {
      color: ${props => props.theme.colors.primary};
    }
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
  width: 100%;

  > div:last-child {
    border-bottom: none;
  }
`
