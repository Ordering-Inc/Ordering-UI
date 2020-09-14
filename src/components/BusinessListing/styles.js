import styled from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BusinessList = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    flex-grow: 1;
  }
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  background-color: #CCCCCC;
  margin: 0px 15px;
  color: #D81313;
  font-weight: bold;
`
