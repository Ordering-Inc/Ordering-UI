import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
`

export const PageButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  color: ${props => props.theme.colors.headingColor};
  outline: none;
  border: none;
  border-radius: 27px;
  min-width: 27px;
  min-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 7px;

  ${props => props.theme?.rtl ? css`
    margin-left: 3px;
  ` : css`
    margin-right: 3px;
  `}

  &:hover {
    background-color: #1507260a;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    background-color: #1507261a;
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
  `}

  ${({ noEffect }) => noEffect && css`
    cursor: initial;
    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  `}
`

export const PageSizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  .select {
    border-color: ${props => props.theme.colors.lightGray};
    padding: 5px 0;

    > div:first-child {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`

export const PageSizeTitle = styled.p`
  margin: 0px;
  color: ${props => props.theme.colors.lightGray};
  font-size: 12px;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const Option = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
`
