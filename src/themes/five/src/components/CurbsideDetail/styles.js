import styled, { css } from 'styled-components'

export const CurbsideContainer = styled.div`
  & > h1 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 20px;
  }

`
export const FormInputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  & > .spotWrapper {
    width: 100%;
  }
  & > .VehicleType > #select-input {
    background-color: #FFF!important;
    border-radius: 7.6px;
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    height: unset;

    & > #list {
      width: 100%;
      background-color: #FFF!important;
      border-radius: 7.6px;
    }
  }
`
export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 49%;
  input{
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`
