import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ isBusinessList }) => isBusinessList && css`
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  `}
  margin-top: 10px;
`

export const AddressMenu = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundPage};
  font-weight: 600;
  border-radius: 50px;
  padding: 13px 19px;
  margin-bottom: 10px;
  ${({ isCheckOut }) => isCheckOut && css`
    background-color: ${props => props.theme.colors.grayDividerColor};
  `}

  span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  svg {
    margin-right: 5px;
    color: ${props => props.theme.colors.lightGray};
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }
`

export const FeatureItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ItemInline = styled.div`
  > span #select-input {
    background-color: ${props => props.theme.colors.grayDividerColor} !important;
    border: none;
    border-radius: 7.6px;
    svg {
      font-size: 14px;
    }
    #list {
      background-color: ${props => props.theme.colors.backgroundPage};
      border: none;
      border-radius: 7.6px;

      left: 0px;
      right: initial;

      ${props => props.theme.rtl && css`
        left: initial;
        right: 0px;
      `}
    }

    > div:first-child {
      font-size: 11px;
    }
  }

  .moment-popover {
    > div:first-child {
      font-size: 11px;
      padding: 4px 7px;
      svg {
        font-size: 14px;
      }
    }
  }
`
