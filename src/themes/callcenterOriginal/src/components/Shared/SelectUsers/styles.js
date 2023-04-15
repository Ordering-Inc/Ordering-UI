import styled, { css } from 'styled-components'

export const UsersContainer = styled.div`
  margin-top: 27px;

  > button {
    height: 44px;
    margin-top: 20px;
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const UserItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  display: flex;
  align-items: center;

  span.name {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 14px;
    ` : css`
      margin-left: 14px;
    `}
  }
`
export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`
