import styled from 'styled-components'

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
`

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button.addcard {
    width: 60%;
    margin-top: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
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
  display: flex;
  cursor: pointer;
  width: 90%;

  .checks svg {
    color: #D81212;
    font-size: 22px;
  }

  .brand svg {
    font-size: 26px;
  }

  > * {
    margin-right: 10px
  }
`

export const CardItemActions = styled.div`
  max-width: 10%;
  svg {
    color: #D81212;
    font-size: 24px;
    cursor: pointer;
  }
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
