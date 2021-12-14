import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  min-height: auto;
  box-sizing: border-box;

  @media (min-width: 769px) {
    padding: 40px;
  }

  @media (min-width: 993px) {
    min-height: calc(100vh - 382px);
  }
`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  width: calc(100% + 40px);
  margin-left: -20px;

  @media (min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`
export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #344050;
  padding-left: 10px;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
 `}
`
