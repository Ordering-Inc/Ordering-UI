import styled, { css } from 'styled-components'

export const OrderStatusFilterContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  padding: 10px 0;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}

  @keyframes spinner-content {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }

  svg {
    animation: spinner-content 1.85s linear infinite;
    color: ${props => props.theme.colors.headingColor};
  }
`
