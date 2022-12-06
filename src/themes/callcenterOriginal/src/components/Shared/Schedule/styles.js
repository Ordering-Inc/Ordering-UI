import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  min-width: 400px;
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
      padding: 0 16px;
    }

    &:first-child {
      width: 95px;
    }

    &:nth-child(2) {
      flex-direction: column;
      flex: 1;
      ${props => props.theme?.rtl ? css`
        padding-right: 10px;
      ` : css`
        padding-left: 10px;
      `}
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
  
        svg {
          font-size: 20px;
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
          font-size: 20px;
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

  @media (min-width: 380px) {
    > div {
      h4 {
        font-size: 14px;
      }
      &:nth-child(2) {
        p {
          font-size: 14px;
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

  @media (min-width: 380px) {
    width: 100px;
  }
`

export const Option = styled.div`
  white-space: nowrap;
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
  width: 56px;
  ${({ isHide }) => isHide ? css`
    opacity: 0;
    pointer-events: none;
  ` : css`
    opacity: 1;
  `}
`

export const AddScheduleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 56px;
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
`
