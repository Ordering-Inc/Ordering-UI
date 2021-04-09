import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const OrderTypeWrapper = styled.span`
  div {
    max-width: 120px;
  }
  @media (min-width: 380px) {
    div{
      max-width: initial;
    }
  }
`

export const SelectedOption = styled.p`  
  margin: 0;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 380px) {
      max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: 80px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
`

export const ModalContainer = styled.div`
  button {
    width: 100%;
    height: 50px;
  }
`

export const ModalHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  column-gap: 10px;
  
  svg {
    display: none;
  }

  p {
    max-width: initial;
  }
`
