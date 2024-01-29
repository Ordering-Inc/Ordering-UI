import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 20px;
`

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
  position: sticky;
  bottom: 0;
  padding: 10px 20px 30px 20px;
  background: white;
  svg {
    position: absolute;
    right: 30px;
    top: 20px;
    font-size: 25px;
    color: #ffffff;
  }
  button {
    width: 100%;
    padding: 5px;
  }
`

export const SearchBarContainer = styled.div`
  margin-bottom: 10px;
`
