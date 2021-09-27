import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.darkTextColor};

  @media (min-width: 576px) {
    font-size: 24px;
  }

`

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  input {
    padding: 10px;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    outline: none;
  }

  .react-datepicker {
    border: 1px solid #E9ECEF;
  }

  .react-datepicker-wrapper {
    display: flex;
    justify-content: center;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-popper {
    position: relative !important;
    transform: translate(0, 0) !important;
  }

  .react-datepicker__day--selected {
    background-color: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.darkTextColor};
    border-radius: 50%;
  }

  .react-datepicker__input-container {
    text-align: center;
    @media (max-width: 576px) {
      width: 240px;
      input {
        width: 100%;
      }
    }
  }

  .react-datepicker__header {
    border: none;
    background-color: white;
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
    flex: 1;
  }

  svg {
    color: #B1BCCC;
    font-size: 20px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}

    @media (min-width: 576px) {
      font-size: 24px;
    }
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
  text-align: center;

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
    }
  }

  #select-input {
    >div:first-child {
      color: ${props => props.theme.colors.darkTextColor};
    }
    @media (max-width: 576px) {
      width: 240px;
    }
  }
`
