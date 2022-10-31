import styled, { css } from 'styled-components'

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors?.darkTextColor};

  @media (max-width: 450px) {
    ${props => props.theme.rtl && css`
      padding-right: 30px;
      padding-left: 0;
    `}
  }
`

export const SelectContainer = styled.div`
  #list {
    width: 100%;
  }

  > div {
    width: 100%;
    background-color: #F8F9FA!important;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    min-height: 44px;
    border: none;
    border-radius: 7.6px;
    color: #909BA9 !important;

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: space-between;
    }
    > div#list {
      width: 100%;
      background-color: #F8F9FA!important;
      border: 1px solid #F8F9FA;
      border-radius: 7.6px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
  }

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    background: #000;
    #select-input {
      margin-bottom: 0px;
    }
    div {
      white-space: pre-wrap;
    }
    > div {
      background-color: #000!important;
      border: 1px solid #fff;
      border-radius: 0px;
      color: #fff !important;
      padding: 0px 10px;
      box-sizing: border-box;
      height: auto;
      > div#list {
        background-color: #000 !important;
        border: 1px solid #fff;
        border-radius: 0px;
      }
    }
  `}
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

export const DateWrapper = styled.div``

export const TimeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  width: calc(100% + 24px);
  margin-top: 30px;
  max-height: 250px;
  overflow: auto;
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

export const OrderTimeWrapper = styled.div`
  > p {
    font-weight: 600;
    font-size: 20px;
  }
`

export const MonthYearLayer = styled.div`
  margin-top: 0px;
  margin-bottom: 13px;

  span {
    font-size: 16px;
    line-height: 24px;
  }
`

export const DaysSwiper = styled.div`
  width: 100%;
  position: relative;
  border-top: 1px solid #E9ECEF;
  border-bottom: 1px solid #E9ECEF;

  .swiper-datelist {
    padding: 0 20px;
    .swiper-button-prev {
      background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 20px;
    }

    .swiper-button-prev::after {
      display: none;
    }
    .swiper-button-next {
      background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
      width: 18px;
    }

    .swiper-button-next::after {
      display: none;
    }

    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
      right: 0px;
      left: auto;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
      left: 0px;
      right: auto;
    }
  }
`

export const Day = styled.div`
  display: flex;
  flex-grow: 1;
  color: #B1BCCC;
  cursor: pointer;
  padding: 14px 0 13px 0;
  flex-direction: column;
  align-items: center;
  transition: background-color .16s ease -0.01s;

  ${({ selected }) => selected && css`
    color: #344050;
    background: ${({ theme }) => theme?.colors?.primary};
  `}

  :hover {
    background: ${({ theme }) => theme?.colors?.primary};
  }
`

export const DayName = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
  &:first-letter {
    text-transform: uppercase;
  }

  ${({ isAppoint }) => isAppoint && css`
    font-size: 12px;
    line-height: 22px;
  `}
`

export const DayNumber = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  ${({ isAppoint }) => isAppoint && css`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  `}
`

export const TimeItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 5px 15px;
  margin: 12px;
  width: calc(50% - 24px);
  min-width: calc(50% - 24px);
  box-sizing: border-box;
  user-select: none;
  border: 1px solid #fff;

  ${({ active }) => active && css`
    background: ${({ theme }) => theme?.colors?.primary};
  `}

  span {
    font-size: 14px;
    white-space: nowrap;
  }

  * {
    color: #fff;
  }

  @media (min-width: 400px) {
    width: calc(33.33% - 24px);
    min-width: calc(33.33% - 24px);
  }

  @media (min-width: 576px) {
    width: calc(25% - 24px);
    min-width: calc(25% - 24px);
  }

  @media (min-width: 769px) {
    width: calc(16.66% - 24px);
    min-width: calc(16.66% - 24px);
    ${({ isAppoint }) => isAppoint && css`
      width: calc(33.33% - 24px);
      min-width: calc(33.33% - 24px);
      span {
        font-size: 12px;
      }
    `}
  }
`

export const ClosedBusinessMsg = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
`

export const MomentContainer = styled.div`
  display: flex;
  justify-content: center;
`
