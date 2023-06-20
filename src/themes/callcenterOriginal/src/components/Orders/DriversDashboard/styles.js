import styled, { css } from 'styled-components'

export const DriversDashboardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 0px;

  @media (min-width: 760px) {
    margin-top: 15px
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 122px);
  }
`

export const FilterContainer = styled.div`
  position: sticky;
  top: 0px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  z-index: 100;
`

export const DriversContainer = styled.div`
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  margin-top: 20px;
  padding: 10px;

  @media (min-width: 1024px) {
    width: 330px;
    max-width: 330px;
    margin-top: 0px;
  }

  @media (min-width: 1300px) {
    max-width: 500px;
    width: 500px;
  }
`

export const WrapperDriversList = styled.div`
  height: calc(100% - 100px);
  overflow-x: hidden;
`

export const WrapperDriversLocation = styled.div`
  height: calc(var(--vh, 1vh) * 100 - 190px);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  
  @media (min-width: 1024px) {
    margin-top: 0px;
    height: 100%;
    flex: 1;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`
