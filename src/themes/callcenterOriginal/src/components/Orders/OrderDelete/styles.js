import styled from 'styled-components'

export const WrapperCheckPassword = styled.div`
  padding: 10px;
  color: ${props => props.theme.colors?.headingColor};

  h3 {
    font-size: 24px;
    margin: 0px;
    font-weight: 600;
  }

  p {
    margin-top: 25px;
    margin-bottom: 10px;
  }

  input {
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid rgba(20, 20, 20, 0.2);
    width: 100%;
    padding: 10px 15px;
    &:focus {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  button {
    margin-top: 40px;
    width: 150px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
export const ErrorText = styled.div`
  text-align: center;
  margin: 10px 0;
`
