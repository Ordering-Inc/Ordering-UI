import styled from 'styled-components'

export const Container = styled.form`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 25px 20px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 32px;
  }
  > button {
    height: 44px;
    margin-top: 30px;
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
