import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;

  > div {
    width: 100%;
    border: none;

    > div {
      &:first-child {
        background: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid ${props => props.theme.colors.secondary};
      }
      &:not(:first-child) {
        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 90px;
  }
`
export const Option = styled.div`
  padding-left: 20px;
  font-size: 14px;
`
