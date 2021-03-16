import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 40px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  > div {
    width: calc(50% - 20px);
  }
  input.form {
    border-radius: 10px;
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }

  @media (max-width: 576px) {
    > div {
      width: 100%;
    }
  }
  ${({ isCheckout }) => isCheckout && css`
    > div {
      width: 100%;
    }
  `}
`

export const ActionsForm = styled.div`
  display: flex;
  width: 100%;

  ${({ isCheckout }) => isCheckout && css`
    justify-content: space-between;
    align-items: center;
  `}

  button {
    flex: 1;
    margin-top: 10px;
    padding: 7px 0px;
    width: 49%;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }
    ${({ isCheckout }) => isCheckout && css`
      margin-right: 5px;
    `}
  }
`

export const SkeletonForm = styled.div`
  width: 100% !important;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  label {
    font-weight: 500;
    font-size: 18px;
  }
`
