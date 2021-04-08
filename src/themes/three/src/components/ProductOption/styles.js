import styled from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  padding: 0 15px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: ${props => props.theme.colors?.darkGray};
  font-weight: 500;

  @media (min-width: 381px) {
    font-size: 14px;
  }
`
export const WrapOptionTitle = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`
