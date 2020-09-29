import styled from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F7F7F7;
`

export const Title = styled.h3`
  font-size: 20px;
  margin: 0px;
  text-transform: capitalize;
`

export const Flag = styled.span`
  font-size: 15px;
  margin: 0px;
  text-transform: capitalize;
  color: #A52121;
  font-weight: bold;
`
