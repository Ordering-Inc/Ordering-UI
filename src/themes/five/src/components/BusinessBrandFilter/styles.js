import styled from 'styled-components'

export const Container = styled.div`
  > h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

export const BrandListWrapper = styled.div`
  max-height: 300px;
  overflow: auto;
`

export const BrandItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    transition: all 0.3s linear;
  }

  svg {
    color: ${props => props.theme.colors.success500};
    font-size: 16px;
  }
  &:hover {
    span {
      color: ${props => props.theme.colors.secundaryContrast};
    }
  }
`

export const NoResult = styled.div`
  text-align: center;
`
