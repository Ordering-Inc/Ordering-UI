import styled, { css } from 'styled-components'

export const HelperContent = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    ${props => props.theme?.rtl ? css`
      margin-left: 13px;
    ` : css`
      margin-right: 13px;
    `}
  }
  p {
    flex: 1;
    font-size: 14px;
    line-height: 24px;
    margin: 0;

    span {
      font-weight: 600;
    }
  }

  > svg {
    color: #FFC700;
    font-size: 30px;
    margin-right: 20px;
  }
`
