
import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 10px;

  > button {
    width: 100%;
    margin-top: 20px;
    border-radius: unset;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  @media (min-width: 769px) {
    padding: 0px;
  }
`
export const Title = styled.h1`
  margin: 0px;
  font-size: 30px;
  font-weight: 600;
  padding: 0px 10px 15px;
`
export const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  padding-bottom: 10px;
`
export const WrapperAddress = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  svg {
    font-size: 20px;
  }
`
export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
export const WrapScheduleTime = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    font-size: 20px;
  }
`
export const AddressFormContainer = styled.div`
`
