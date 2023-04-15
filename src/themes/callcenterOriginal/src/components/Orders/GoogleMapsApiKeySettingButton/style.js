import styled, { css } from 'styled-components'

export const Container = styled.div`
  > button {
    height: 44px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
`
export const ModalBody = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 12px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 38px;

    &.error {
      color: ${props => props.theme.colors.danger};
      margin-top: 10px;
    }
  }
  button {
    height: 44px;
    width: fit-content;
    margin-top: 60px;
  }
`
