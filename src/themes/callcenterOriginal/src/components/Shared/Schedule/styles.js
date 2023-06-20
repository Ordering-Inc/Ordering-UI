import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  min-width: 320px;
`

export const TimeScheduleItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > div {
    display: flex;
    align-items: center;
    h4 {
      font-size: 13px;
      font-weight: 600;
      margin: 0px;
      padding: 0 10px;
    }

    &:first-child {
      min-width: 95px;
    }

    &:nth-child(2) {
      flex-direction: column;
      flex: 1;
      ${props => props.theme?.rtl ? css`
        padding-right: 8px;
      ` : css`
        padding-left: 8px;
      `}
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
  
        svg {
          font-size: 18px;
          cursor: pointer;
        }
      }
      > p {
        margin: 6px 0;
        font-size: 13px;
      }
    }

    &:nth-child(3) {
      > span {
        svg {
          cursor: pointer;
          font-size: 18px;
          color: ${props => props.theme.colors.primary};
          ${props => props.theme?.rtl ? css`
            margin-left: 10px;
          ` : css`
            margin-right: 10px;
          `}
        }
      }
    }
  }

  @media (min-width: 450px) {
    > div {
      h4 {
        font-size: 14px;
        padding: 0 12px;
      }
      &:nth-child(2) {
        p {
          font-size: 14px;
        }
        svg {
          font-size: 20px;
        }
      }
      &:nth-child(3) {
        > span {
          svg {
            font-size: 20px;
          }
        }
      }
    }
  }
`

export const SelectWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  width: 70px;
  display: flex;
  justify-content: center;
  .select {
    border: none;
    svg {
      display: none;
    }
    > div {
      padding-left: 13px;
      padding-right: 13px;
      font-size: 13px;
      > div:last-child {
        margin: 0px;
      }
    }
  }
  .list {
    .options {
      > div {
        > div {
          min-width: initial;
        }
      }
    }
  }

  @media (min-width: 450px) {
    width: 95px;
    .select {
      > div {
        font-size: 16px;
      }
    }
  }
`

export const Option = styled.div`
  white-space: nowrap;
  font-size: 15px;
`

export const SplitLine = styled.div`
  height: 1px;
  width: 8px;
  margin: 0 8px;
  background-color: ${props => props.theme.colors.disabled};
`
export const IconWrapper = styled.span`
  ${({ isHide }) => isHide ? css`
    opacity: 0;
    pointer-events: none;
  ` : css`
    opacity: 1;
  `}
`
export const TrashIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  ${({ isHide }) => isHide ? css`
    opacity: 0;
    pointer-events: none;
  ` : css`
    opacity: 1;
  `}
  @media (min-width: 450px) {
    width: 56px;
  }
`

export const AddScheduleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  > svg {
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl ? css`
      margin-right: 8px;
    ` : css`
      margin-left: 8px;
    `}
    &:last-child {
      color: ${props => props.theme.colors.lightGray};
    }
  }

  @media (min-width: 450px) {
    width: 56px;
  }
`
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    &.date {
      font-weight: normal;
    }
  }
`
