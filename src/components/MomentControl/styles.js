import styled, { css } from 'styled-components'

export const Days = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d9d9d9;
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px 0;
  align-items: center;

  ${({ selected }) => selected && css`
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  `}


  :last-child {
    ${ContentDay} {
      border-right: 0;
    }
  }

  :hover {
    background-color: #f9f9f9;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 16px;
`

export const DayNumber = styled.div`
  display: flex;
  font-size: 25px;
`

export const Hours = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Hour = styled.div`
  display: flex;
  width: calc(50% - 22px);
  justify-content: center;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 1000px;
  padding: 5px 10px;
  margin-bottom: 5px;

  ${({ selected }) => selected && css`
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  `}
`
