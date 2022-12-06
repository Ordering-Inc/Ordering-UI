import styled, { css } from 'styled-components'

export const Option = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;

  ${({ isDefault }) => isDefault ? css`
    padding: 5px 15px;
  ` : css`
    padding: 10px;
  `}

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }

  ${({ isDefault }) => !isDefault && css`
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  `}
`

export const PlaceholderTitle = styled(Option)`
  color: ${props => props.theme.colors.headingColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  ${({ isDefault }) => isDefault ? css`
    padding: 5px 15px;
    ` : css`
    padding: 10px;
    margin-right: 0px;
    margin-left: 0px;
  `}
`
