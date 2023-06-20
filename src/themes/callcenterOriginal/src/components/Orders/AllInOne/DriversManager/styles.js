import styled from 'styled-components'

export const DriversContainer = styled.div`
  box-sizing: border-box;
`

export const DriversHeader = styled.div`
  display: flex;
  flex-direction: column;
  > div:last-child {
    margin-top: 20px;
  }
  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > div:last-child {
      margin-top: 0px;
    }
  }
`

export const DriversContent = styled.div`
`

export const DriverListContainer = styled.div`
  height: 100%;
  overflow: hidden;
  margin-top: 20px;
  @media (min-width: 992px) {
    width: 350px;
    max-width: 350px;
    margin-top: 0px;
  }
`
export const FilterContainer = styled.div`
  position: sticky;
  top: 0px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  z-index: 100;
`
export const WrapperDriversList = styled.div`
  overflow-x: hidden;
  @media (min-width: 992px) {
    max-height: calc(var(--vh, 1vh) * 100 - 410px);
  }
`
