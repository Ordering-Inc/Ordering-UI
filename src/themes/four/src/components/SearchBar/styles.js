import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;

    ${props => props.theme?.rtl ? css`
      padding-left: 60px;
    ` : css`
      padding-right: 60px;
    `}
    background-color: ${props => props.theme?.colors?.backgroundPage};

    ${({ isCustomLayout }) => !isCustomLayout && css`
      justify-content: center;
    `}
  }
`

export const DeleteContent = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  font-weight: 300;
  color: #FFF;
  font-size: 14px;
  max-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  list-style: cambodian;
  padding: 0 10px;

  ${props => props.theme?.rtl ? css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  ` : css`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}

  span {
    cursor: pointer;
  }
  svg {
    font-size: 24px;
  }
`
export const SearchIcon = styled.div`
  background-image: url(${props => props.theme?.images?.general?.searchIcon});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 15px;
  background-color: ${props => props.theme?.colors?.backgroundPage};
`
