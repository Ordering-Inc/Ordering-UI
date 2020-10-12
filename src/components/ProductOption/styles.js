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

  @media (max-width: 380px) {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 70%;
  }
`

export const Flag = styled.span`
  font-size: 15px;
  margin: 0px;
  text-transform: capitalize;
  color: #A52121;
  font-weight: bold;

  @media (max-width: 380px) {
    font-size: 13px;
  }
`
