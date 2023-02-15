import styled, { css } from 'styled-components'

export const ChannelsContainer = styled.div`
  margin-top: 27px;
  height: calc(100% - 130px);
  overflow: auto;

  > button {
    position: sticky;
    top: 100%;
    height: 44px;
  }
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 16px;
    ` : css`
      margin-right: 16px;
    `}
  }
`
export const ChannelItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 14px;
    ` : css`
      margin-left: 14px;
    `}
  }
`
