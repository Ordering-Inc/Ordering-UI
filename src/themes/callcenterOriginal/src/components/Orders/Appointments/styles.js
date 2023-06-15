import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const SpinnerLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  > div {
    height: 100%;
  }
`
export const Header = styled.div`
  display: flex;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    margin: 0px;
    line-height: 30px;
    font-weight: 700;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`
export const BusinessName = styled.span`
  cursor: pointer;
`
export const BusinessSelectorWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 3px 0;

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryLight};
    &.calendar {
      color: ${props => props.theme.colors.primary};
    }
  }

  > svg {
    margin: 0 10px;
  }
`
export const CalendarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
  overflow: auto;

  .rbc-calendar {
    min-width: 728px;
    color: ${props => props.theme.colors.lightGray};

    .rbc-header {
      padding: 7px 3px;
      span {
        font-size: 16px;
        font-weight: 600;
        color: ${props => props.theme.colors.headingColor};
      }
    }

    .rbc-time-view {
      border-left: none;
      border-right: none;
      .rbc-allday-cell {
        display: none;
      }
      .rbc-time-content {
        border-width: 1px;
      }
    }
    .rbc-event {
      background-color: ${props => props.theme.colors.backgroundPage};
      border: none;
      padding: 0;
      color: ${props => props.theme.colors.headingColor};
    }
    .rbc-event-label {
      display: none;
    }
    .rbc-timeslot-group {
      min-height: 60px;
    }
  }
`
export const CalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const CalendarLabelContainer = styled.div`
  display: flex;
  align-items: center;

  span.label {
    font-weight: 600;
    font-size: 16px;
    margin: 0 3px;
    color: ${props => props.theme.colors.headingColor};
  }
  > button {
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`
export const ViewButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 3px;
  }
`
export const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 2px 5px;
  border-radius: 8px;
  height: 100%;

  > div.info {
    width: calc(100% - 42px);
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p.name {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      margin: 0;
    }
    p.date {
      font-size: 10px;
      line-height: 15px;
      color: ${props => props.theme.colors.lightGray};
      margin: 0;
    }
  }
`
export const EventProfessionalPhoto = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  svg {
    width: 85%;
    height: 85%;
  }
`
export const WarningText = styled.p`
  margin-top: 30px;
  color: ${props => props.theme.colors.danger};
`
