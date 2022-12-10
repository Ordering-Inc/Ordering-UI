import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 0;
    margin-bottom: 48px;
  }

  > button {
    height: 44px;
    margin-top: 50px;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    margin-bottom: 10px;
    font-size: 14px;
  }
`
