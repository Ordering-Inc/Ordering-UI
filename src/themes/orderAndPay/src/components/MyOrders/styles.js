import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;

  @media (min-width: 769px) {
    padding: 40px;
  }
`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  width: calc(100% + 40px);
  margin-left: -20px;

  @media(min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`
