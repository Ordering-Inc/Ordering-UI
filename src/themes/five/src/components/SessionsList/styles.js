import styled from 'styled-components'

export const SessionsListContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 15px 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 280px);

  @media (min-width: 769px) {
    width: 70%;
  }
`
export const Title = styled.h1`
  padding: 0 15px;
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 40px;
`
export const SessionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
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
  > button {
    width: 90%;
    margin: 30px auto 0 auto;
    height: 44px;
  }

  @media (min-width: 768px) {
    > button {
      width: 65%;
    }
  }
`
