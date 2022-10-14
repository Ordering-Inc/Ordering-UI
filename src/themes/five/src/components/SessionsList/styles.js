import styled, { css } from 'styled-components'

export const SessionsListContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 15px 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 280px);

  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    color: #fff;
  `}

  @media (min-width: 769px) {
    width: 70%;
  }
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    padding: 0 15px;
  }
`
export const SessionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  
  > p.current {
    flex: 1;
    font-weight: 700;
    font-size: 14px;
    margin: 0 15px;
  }

  @media (min-width: 768px) {
    padding: 15px;
  }
`
export const DurationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 14px;
  }
  > span {
    display: none;
    margin: 0 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    > span {
      display: block;
    }
  }
`
export const SeessionDelete = styled.span`
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  padding: 3px;
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }
  &:hover {
    background-color: ${props => props.theme.colors.grayDividerColor};
    svg {
      color: ${props => props.theme.colors.darkGray};
    }
  }
`
export const NoMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`
export const SessionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoSessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    height: 44px;
    margin-top: 50px;
  }
`
export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  > button {
    height: 44px;
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`
