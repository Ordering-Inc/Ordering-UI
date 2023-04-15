import styled, { css } from 'styled-components'

export const MomentControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;

  ${({ isPopup }) => isPopup ? css`
    width: 100%;
  ` : css`
    width: 90%;
    margin: 20px auto;
  `}

  @media (min-width: 768px) {
    ${({ isPopup }) => isPopup ? css`
      width: 100%;
    ` : css`
      width: 60%;
      margin: 50px auto;
    `}
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.secundary};
  font-size: 24px;
  text-align: center;
  width: 100%;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 992px) {
    font-size: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 7.6px;
  padding: 15px 0;
  border: 2px solid ${props => props.theme.colors.grayDark};

  input {
    padding: 10px;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    outline: none;
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: ${props => props.theme.colors.secundary};
  }

  .react-datepicker {
    border-color: transparent;
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
  }

  .react-datepicker__header {
    border: none;
    background-color: white;
  }

  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
    border-radius: 50%;
  }

  .react-datepicker__day--selected {
    background-color: #f8ccd6;
    border-radius: 50%;
    color: ${props => props.theme.colors.grayDark};
  }

  @media (max-width: 576px) {
    .react-datepicker {
      display: flex;
      flex-direction: column;
    }
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
    color: ${props => props.theme.colors.grayMedium};
  }

  svg {
    color: #B1BCCC;
    font-size: 24px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0px;
    `}
  }

  ${({ highlight }) => highlight && css`
    span {
      color: ${props => props.theme.colors.colorPage};
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
    border: 2px solid ${props => props.theme.colors.grayDark};
    border-radius: 7.6px;
    padding-top: 3px;
    padding-bottom: 3px;

    > div {
      justify-content: space-between;
    }

    #list {
      width: 100%;
      max-height: 200px;
      overflow: auto;
      background-color: #FFFFFF;
    }
  }

  #select-input {
    > div:first-child {
      color: ${props => props.theme.colors.colorPage};
    }
  }
`

export const DatePickerInput = styled.div`
  border: 1px solid ${props => props.theme.colors.grayDark};
  border-radius: 7.6px;
  padding: 6px 15px;
  width: 200px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;

  @media (min-width: 375px) {
    width: 250px;
  }
`
