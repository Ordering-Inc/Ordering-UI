import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const ActionsWrapper = styled.div`
  margin-top: 15px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`
export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin: 20px 0 10px 0;
`
export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 2px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`
export const GiftCardsTableWrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    td, th {
      padding: 10px 0;
      font-size: 14px;
    }
    thead {
      border-bottom: 1px solid ${props => props.theme.colors.disabled};
    }
  }
`
export const GiftCardRow = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`
export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  }

  div {
    ${props => props.theme?.rtl ? css`
      margin-right: 9px;
    ` : css`
      margin-left: 9px;
    `}
    p.name {
      margin: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
    }
    p.phone {
      margin: 0;
      font-size: 10px;
      line-height: 15px;
      color: ${props => props.theme.colors.lightGray};
    }
  }
`
export const PaginationWarpper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`
