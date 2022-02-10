import styled, { css } from 'styled-components'

export const BusinessInfo = styled.div`
  display: flex;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right:5px;
  ${props => props.theme?.rtl && css`
    padding-left: 5px;
    padding-right: 0;
  `}

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin: 0 0 10px 0;
  }

  .type {
    font-size: 14px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0 0 5px 0;
  }

  .preorder-Reviews {
    span {
      user-select: none;
      cursor: pointer;
      font-size: 14px;
      color: ${props => props.theme?.colors.primary};
      text-decoration: underline;
      &:not(:last-child) {
        margin-right: 5px;
        ${props => props.theme?.rtl && css`
          margin-left: 5px;
          margin-right: 0;
        `}
      }

      &.dot {
        font-size: 12px;
        text-decoration: none;
        color: #909BA9;
      }
    }
  }
`

export const BusinessInfoContainer = styled.div`
  margin-bottom: 43px;
  display: flex;
  flex-direction: column;
`

export const BusinessInfoContent = styled.div``

export const WrapperSearch = styled.div`
  margin: 30px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .search-bar {
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
    input {
      width: 100%;
      background-size: 20px 18px;
    }
  }

  div:last-child {
    text-align: right;

    ${props => props.theme?.rtl && css`
      text-align: left;
    `}
  }
`

export const BusinessDetail = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-size: 14px;
    color: #909BA9;
    margin: 0 5px 0 0;
    font-weight: normal;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}

    span {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  }

  .review {
    color: #909BA9;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 15px;
      margin-bottom: 1px;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }

    p {
      font-size: 14px;
      margin: 0px;
    }
  }

  .dot {
    color: #909BA9;
    font-size: 12px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  ${({ isSkeleton }) => isSkeleton && css`
    > span {
      display: flex;
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0px;
      `}
    }
  `}
`

export const BusinessMoreDetail = styled.div`
  display: flex;
  align-items: center;

  margin-left: 12px;
  ${props => props.theme?.rtl && css`
    margin-right: 12px;
    margin-left: 0;
  `}
  svg {
    color: ${props => props.theme?.colors.primary};
    cursor: pointer;
    font-size: 24px;
  }
`

export const BusinessTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;

  > h2 {
    margin: 0px;
  }
`
