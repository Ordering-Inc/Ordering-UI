import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
  margin: 50px 0 30px 0;

  > p {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 11px;
  }

  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .list {
      max-width: 100%;
    }
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7.6px;
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
  > span {
    max-width: 200px;
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    > span {
      max-width: 560px;
    }
  }
`
