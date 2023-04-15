import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const MomentContainer = styled.div`
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }
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
  width: calc(100% / 3);
  /**
    ** Modify this validation in case the dates to display change
   */
  &:nth-child(1) div,
  &:nth-child(2) div,
  &:nth-child(3) div {
    margin-bottom: 5px;
  }

  &:nth-child(3) div,
  &:nth-child(6) div {
    ${props => props.theme?.rtl ? css`
        border-left: 0      
    ` : css`
       border-right: 0;
    `}
  }

  &:nth-child(4) div,
  &:nth-child(5) div,
  &:nth-child(6) div {
    margin-top: 5px;
  }

  @media (min-width: 426px) {
    width: calc(100% / 6);
    &:nth-child(3) div.content-day {
      border-right: 1px solid #d9d9d9;
      ${props => props.theme?.rtl && css`
        border-right: 0;
        border-left: 1px solid #d9d9d9;
      `}
    }
  }

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

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
`

export const MiddleLine = styled.span`
  display: block;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.disabled};

  ${props => props.theme?.rtl && css`
    left: initial;
    right: 50%;
    transform: translateX(50%);
  `}

  @media (min-width: 426px) {
    display: none;
  }
`
