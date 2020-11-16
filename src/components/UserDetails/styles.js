import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  h1 {
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }

  h1,
  svg {
    font-size: 24px;
  }

  svg.edit {
    color: #F2BB40;
    cursor: pointer;
  }
  svg.cancel {
    color: #D81212;
    cursor: pointer;
  }
`

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  * {
    margin-top: 20px;
    ${props => props.theme?.rtl ? css`
      margin-left: 0;
    ` : css`
      margin-right: 0;
    `}
  }

  input {
    padding: 10px 15px;
    width: 90%;
    color: #333;

    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }

  button {
    margin-top: 30px;
    padding: 7px 0px;
    width: 100%;
  }

  @media (min-width: 579px) {
    input {
      width: 95%;
    }
  }

  @media (min-width: 769px) {
    display: block;
    min-height: 200px;

    input {
      width: 43%;
      margin: 5px;
    }
  }
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 80%;
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
      height: 20px;
      width: 35%;
      margin: 5px
    }
  }
`
