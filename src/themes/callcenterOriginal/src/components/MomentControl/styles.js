import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors?.darkTextColor};

  @media (max-width: 450px) {
    padding-left: 30px;
    ${props => props.theme.rtl && css`
      padding-right: 30px;
      padding-left: 0;
    `}
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
      color: ${props => props.theme.colors?.darkTextColor};
    }
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;
  `}
`

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    border: 1px solid #E9ECEF;
    box-sizing: border-box;
    border-radius: 7.6px;
  }
`

export const DateWrapper = styled.div`
  width: 100%;
  margin: 14px 0px;
  padding: 10px 2px;
  display: flex;
  justify-content: center;

  .react-calendar {
    border: none;
    border-radius: 7.6px;
    font-family: 'Poppins',sans-serif;

    .react-calendar__tile--active,
    .react-calendar__tile:enabled:focus {
      background: transparent;
      abbr {
        background: #F5F9FF;
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
      color: ${props => props.theme.colors?.disabled};
      cursor: not-allowed;
    }

    .react-calendar__navigation {
      margin-bottom: 5px;
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

  @media (min-width: 768px) {
    width: calc(50% - 12px);
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
    `}
  }
`

export const TimeListWrapper = styled.div`
  width: 100%;
  margin: 14px 0px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;

  > div {
    width: 350px;
    max-width: 100%;
  }

  @media (min-width: 375px) {
    padding: 20px 15px;
  }

  @media (min-width: 768px) {
    width: calc(50% - 12px);
    margin-left: 12px;
    ${props => props.theme.rtl && css`
      margin-right: 12px;
    `}
  }
`

export const TimeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #748194;
  svg {
    font-size: 24px;
    cursor: pointer;
  }
  span {
    font-size: 14px;
  }
`

export const TimeListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 295px;
  overflow: auto;
  margin-top: 14px;

  > button {
    font-size: 14px;
    line-height: 24px;
    padding: 4px 8px;
    margin: 0px 10px 16px 0px;
    ${props => props.theme.rtl && css`
      margin: 0px 0px 16px 10px;
    `}
    width: calc(50% - 15px);

    @media (min-width: 340px) {
      margin: 0px 7px 16px 0px;
      ${props => props.theme.rtl && css`
        margin: 0px 0px 16px 7px;
      `}
    width: calc(33.33% - 7px);
    }

    @media (min-width: 414px) {
      margin: 0px 9px 16px 0px;
      width: calc(25% - 9px);
      ${props => props.theme.rtl && css`
        margin: 0px 0px 16px 9px;
      `}
    }

    @media (min-width: 768px) {
      margin: 0px 15px 16px 0px;
      ${props => props.theme.rtl && css`
        margin: 0px 0px 16px 15px;
      `}
      width: calc(33.33% - 15px);
    }
  }
`

export const CheckedIcon = styled.div`
  border-radius: 50%;
  width: 20px;
  min-width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 6px solid ${props => props.theme.colors?.primary};
  margin: 2px 12px 2px 2px;
  ${props => props.theme.rtl && css`
    margin: 2px 2px 2px 12px;
  `}
`
export const ButtonWrapper = styled.div`
  margin-top: 25px;
  button {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      font-size: 21px;
      ${props => props.theme?.rtl ? css`
        left: 17px;
      ` : css`
        right: 17px;
      `}
    }
  }
`
