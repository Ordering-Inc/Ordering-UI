import styled, { css } from 'styled-components'

export const Container = styled.div`
  &.error {
    background-color: orange;
  }
`

export const WrapHeader = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
  display: flex;
  flex-direction: column;

  span {
    &:not(:first-child) {
      color: ${props => props.theme.colors.grayTextColor};
      font-size: 12px;
      font-weight: 400;
    }
  }
`

export const Flag = styled.span`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 10px 15px;
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  font-weight: 500;
  
  @media (min-width: 381px) {
    font-size: 14px;
  }

  color: #028389;
  
  ${({ error }) => error && css`
    background: #FEFE58;
    color: ${props => props.theme.colors.grayTextColor};
  `}
`
