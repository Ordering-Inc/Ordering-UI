import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Days = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  background: ${props => props.theme.colors.secondary};

  @media (min-width: 576px) {
    border-radius: 60px;
  }
`

export const ContentDay = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 3px 0;
  flex-direction: column;
  align-items: center;
  ${props => props.theme?.rtl && css`
    border-right: 0;
    border-left: 1px solid #d9d9d9;
  `}
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-weight: 300;
  width: calc(100% / 3);

  &:nth-child(3) div,
  &:nth-child(6) div {
    ${props => props.theme?.rtl ? css`
        border-left: 0      
    ` : css`
       border-right: 0;
    `}
  }

  @media (min-width: 426px) {
    width: calc(100% / 6);
    &:nth-child(3) div.content-day {
      ${props => props.theme?.rtl && css`
        border-right: 0;
        border-left: 1px solid #d9d9d9;
      `}
    }
  }

  ${({ selected }) => selected && css`
    font-weight: 400;
    color: #fff;
    background: ${props => props.theme.colors.darkTextColor};
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
    background-color: ${props => props.theme.colors.grayTextColor};
  }

  @media (min-width: 576px) {
    border-radius: 60px;
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
`

export const DayNumber = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
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
export const WrapToggle = styled.div`
  display: flex;
  border-radius: 30px;
  background: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`
export const Tab = styled.div`
  width: calc(100% / 2);
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  padding: 5px 0;
  ${({ selected }) => selected && css`
    background: ${props => props.theme.colors.darkTextColor};
    color: #fff;
  `}
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 24px;
    cursor: pointer;
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
`
