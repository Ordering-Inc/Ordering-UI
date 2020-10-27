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
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 10px 0;
  padding: 3px 0;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d9d9d9;
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5px 0;
  align-items: center;
  font-weight: 300;
  color: #9A9A9A;
  width: calc(100% / 6);

  /**
    ** Modify this validation in case the dates to display change
   */
  @media (max-width: 425px) {
    width: calc(100% / 3);
    &:nth-child(1) div,
    &:nth-child(2) div,
    &:nth-child(3) div {
      margin-bottom: 5px;
    }

    &:nth-child(3) div,
    &:nth-child(6) div {
      border-right: 0;
    }

    &:nth-child(4) div,
    &:nth-child(5) div,
    &:nth-child(6) div {
      margin-top: 5px;
    }
  }

  ${({ selected }) => selected && css`
    font-weight: 400;
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

export const MiddleLine = styled.span`
  display: none;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.disabled};

  @media (max-width: 425px) {
    display: block;
  }
`
