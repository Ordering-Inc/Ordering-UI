import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    > div {
      width: calc(50% - 10px);
    }
  }
`
export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 17px 15px 3px 15px;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 7.6px;

  input {
    padding: 10px;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    outline: none;
  }

  .react-calendar {
    border: none;
    width: 100%;

    .react-calendar__tile--active,
    .react-calendar__tile:enabled:focus {
      /* background: ${props => props.theme?.colors.primaryContrast}; */
      background: transparent;

      abbr {
        background: #E9F2FE;
        color: #344050;
      }
    }

    .react-calendar__tile:enabled:hover {
      background: transparent;

      abbr {
        background: #EFEFEF;
        color: #344050;
      }
    }

    .react-calendar__tile--now {
      background: transparent;
    }

    .react-calendar__month-view__weekdays {
      font-size: 12px;
      color: #909BA9;
      font-weight: normal;
      text-transform: capitalize;
      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__month-view__days__day {
      font-size: 12px;
      color: #344050;
      abbr {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        @media (min-width: 350px) {
          width: 34px;
          height: 32px;
        }
      }
    }

    .react-calendar__tile:disabled {
      background-color: transparent;
      color: ${props => props.theme?.colors.disabled};
      cursor: not-allowed;
    }

    .react-calendar__navigation {
      button {
        background: transparent!important;
        color: #748194;

        svg {
          font-size: 24px;

          ${props => props.theme.rtl && css`
            transform: rotateZ(180deg);
          `}
        }

        &:disabled {
          cursor: not-allowed;
        }

        span {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          display: inline-block;

          @media (min-width: 768px) {
            width: auto;
            display: initial;
          }
        }
      }

      .react-calendar__navigation__prev2-button,
      .react-calendar__navigation__next2-button {
        display: none;
      }
    }
  }
`
export const TimeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 425px;
  overflow: auto;
  padding: 17px 15px 3px 15px;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  border-radius: 7.6px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const TimeItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E9ECEF;
  border-radius: 7.6px;
  padding: 5px 15px;
  margin: 12px;
  width: calc(50% - 24px);
  min-width: calc(50% - 24px);
  box-sizing: border-box;
  user-select: none;

  ${({ active }) => active && css`
    background: #F5F9FF;
    color: ${props => props.theme.colors.primary};
  `}

  span {
    font-size: 14px;
    white-space: nowrap;
  }
`
export const ClosedBusinessMsg = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
`
