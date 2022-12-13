import styled from 'styled-components'

export const Container = styled.div``

export const CityItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px;
  cursor: pointer;
  span {
    margin-right: 15px;
  }
  .city-checked{
    color: ${props => props.theme.colors.primary};
  }
`

export const ButtonWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 25px;
    color: #ffffff;
  }
  button {
    width: 100%;
    padding: 5px;
  }
`
