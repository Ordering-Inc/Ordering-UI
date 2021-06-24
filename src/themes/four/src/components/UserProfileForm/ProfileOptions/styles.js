import styled, { css } from 'styled-components'

export const ProfileMenuContainer = styled.div`
`

export const ProfileMenuInnerContainer = styled.div`
  position: sticky;
  top: 0px;
`

export const ProfileMenuItem = styled.div`
  a {
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px;
    cursor: pointer;
  }

  svg {
    font-size: 24px;

    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
`
