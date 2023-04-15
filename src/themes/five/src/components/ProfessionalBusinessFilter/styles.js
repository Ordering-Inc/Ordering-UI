import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  #select-input {
    border-radius: 8px;
    height: 40px;
    > div:first-child {
      height: 100%;
    }
  }
`

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const FilterItem = styled.div`
  span {
    font-weight: 400;
    font-size: 14px;
    margin-right: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 15px;
      margin-right: 0px;
    `}
  }
  input {
    width: 50px;
    box-sizing: border-box;
  }
  margin-right: 15px;
  ${props => props.theme.rtl && css`
    margin-left: 15px;
    margin-right: 0px;
  `}

  @media (min-width: 500px) {
    input {
      width: 100px;
    }
    margin-right: 25px;
    ${props => props.theme.rtl && css`
      margin-left: 25px;
      margin-right: 0px;
    `}
  }
`

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${props => props.theme.colors.disabled};
  margin-right: 25px;
  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 25px;
  `}
`

export const SearchWrapper = styled.div`
  width: 100%;
  margin-bottom: 23px;
  input {
    width: 100%;
  }
`
