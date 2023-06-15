import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 25px 20px;
  overflow: auto;

  > h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;

    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 4px;
  }
`
