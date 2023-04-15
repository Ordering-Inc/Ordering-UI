import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.darkTextColor};

  @media (max-width: 450px) {
    padding-left: 30px;
    ${props => props.theme.rtl && css`
      padding-right: 30px;
      padding-left: 0;
    `}
  }
`

export const CalendarWrapper = styled.div`
  width: 100%;
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
      // color: ${props => props.theme?.colors.disabled};
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

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 430px) {
    width: 325px;
  }

  .react-datepicker-popper {
    display: none;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  > svg {
    cursor: pointer;
    font-size: 20px;
    right: 5px;
    top: 9px;
    color: #B1BCCC;
    position: absolute;

    ${props => props.theme.rtl && css`
      left: 5px;
      right: initial;
    `}
  }

  input {
    width: 100%;
    color: #B1BCCC;
    font-size: 12px;
    border: 1px solid #DEE2E6;
    border-radius: 7.6px;
    padding: 9px 14px;
  }
`

export const CheckBoxWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  span {
    font-size: 14px;
    color: #909BA9;
  }

  svg {
    color: #B1BCCC;
    font-size: 24px;
    margin-right: 10px;
    min-width: 24px;

    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}
  }

  ${({ highlight }) => highlight && css`
    span {
      font-weight: 600;
      color: ${props => props.theme.colors.darkTextColor};
    }
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
`

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 16px;
    font-size: 16px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const HourListWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100px;

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}

  > div {
    width: 100%;
    background-color: #FFFFFF !important;
    border: 1px solid #DEE2E6;
    border-radius: 7.6px;

    > div {
      justify-content: space-between;
    }

    #list {
      width: 100%;
      border-radius: 7.6px;
    }
  }

  #select-input {
    height: 44px;
    > div:first-child {
      height: 44px;
      font-size: 14px;
      color: #B1BCCC;

      span {
        font-size: 14px;
        color: #B1BCCC;
      }

      svg {
        font-size: 16px;
        color: #748194;
      }
    }
  }
`
