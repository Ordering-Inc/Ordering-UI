import styled from 'styled-components'

export const PlaceSpotContainer = styled.div`
  min-height: 300px;
  position: relative;
  #select-input, #list {
    width: 100%;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const PlaceGroupContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  button{
    width: 100%;
  }
`
