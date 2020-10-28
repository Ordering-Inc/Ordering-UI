import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Days = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 10px 0;
  padding: 3px 0;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d9d9d9;
  ${props => props.theme?.rtl && css`
    border-right: 0;
    border-left: 1px solid #d9d9d9;
  `}
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5px 0;
  align-items: center;
  font-weight: 300;
  color: #9A9A9A;

  ${({ selected }) => selected && css`
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  `}


  :last-child {
    ${ContentDay} {
      ${props => props.theme?.rtl ? css`
        border-left: 0;
      ` : css`
        border-right: 0;
      `}
    }
  }

  :hover {
    background-color: #f9f9f9;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 24px;
`

export const DayNumber = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 24px;
`

export const Hours = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Hour = styled.div`
  display: flex;
  width: calc(50% - 5px);
  justify-content: center;
  cursor: pointer;
  font-weight: 300;
  border: 1px solid #d9d9d9;
  border-radius: 1000px;
  padding: 5px 10px;
  margin-bottom: 7px;
  box-sizing: border-box;

  ${({ selected }) => selected && css`
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  `}
`
