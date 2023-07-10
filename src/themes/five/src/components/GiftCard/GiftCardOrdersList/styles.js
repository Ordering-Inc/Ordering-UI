import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 20px 0;
  }
`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
`
export const NoOrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  box-sizing: border-box;
  min-height: calc(100% - 120px);
  width: 100%;

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 25px;
  }
`
