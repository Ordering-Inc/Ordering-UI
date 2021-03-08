import styled, { css } from 'styled-components'

export const OptionStripeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WarningMessage = styled.p`
  color: #D81212;
  font-size: 24px;
  padding-left: 10px;
  font-weight: bold;
  opacity: 0.8;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
  `}
`

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ borderBottom }) => borderBottom && css`
    border-bottom: 7px solid ${props => props.theme.colors.lightGrayColor};
  `}

  ${({ bottomSection }) => bottomSection && css`
    padding-top: 20px;
  `}

  button.addcard {
    width: 100%;
    margin-top: 20px;
    padding-top: 8px;
    padding-bottom: 8px;

    @media (min-width: 381px) {
      width: 60%;
    }
  }

  > p {
    width: 100%;
    padding: 0 10px;
    margin: 0px;
    font-weight: 500;
    font-size: 18px;
  }
`

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #EAEAEA;
`

export const CardItemContent = styled.div`
  flex: 1;
  display: flex;

  > span {
    font-weight: 500;
  }

  .checks svg {
    color: #D81212;
    font-size: 22px;
  }

  .brand svg {
    font-size: 26px;
  }

  .brandName {
    text-transform: capitalize;
  }

  > * {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`

export const CardItemActions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 15px;
  > svg {
    cursor: pointer;
    font-size: 24px;
    cursor: pointer;
  }
`

export const CardItemActionsContent = styled.div`
  position: absolute;
  box-shadow: 0px 3px 6px #00000029;
  background: #fff;
  border-radius: 10px;
  padding: 0 10px;
  right: 0px;
  top: 35px;
  display: flex;
  flex-direction: column;
  z-index: 10;

  > span {
    cursor: pointer;
    white-space: nowrap;
    padding: 10px 0;
    font-weight: 500;
    &:first-child {
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }
  }

  ${props => props.theme?.rtl && css`
    right: initial;
    left: 0px;
  `}
`

export const ActionsModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;

  button {
    width: 48%;
    padding-top: 8px;
    padding-bottom: 8px;
    &:disabled {
      opacity: 0.5;
    }
  }
`

export const BlockLoading = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
export const DefaultCardItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-weight: 500;
`
export const AddActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #EAEAEA;
  padding: 10px;
  margin-top: 10px;

  svg {
    font-size: 26px;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 500;
  }
`
export const Layer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  ${props => props.theme?.rtl ? css`
    right: 0;
  ` : css`
    left: 0;
  `}
`
