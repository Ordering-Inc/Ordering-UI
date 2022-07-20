import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    width: 100%;
    font-size: 12px;
  }

  @media (min-width: 1200px){
    font-size: 0.9em;
  }
`

export const FormInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input:not(:last-child) {
    margin: 5px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }

  .phone_number {
    margin: 10px 0;
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  color: #333;
  font-size: 24px;
  transform: translate(-150%, 24%);
  max-height: 100%;
  ${props => props.theme?.rtl && css`
    transform: translate(150%, 24%);
  `}
  span{
    cursor: pointer;
  }

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.lightGray};
  }
`

export const InputBeforeIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;

  ${props => props.theme.rtl && css`
    right: 14px;
    left: initial;
  `}

  svg {
    font-size: 16px;
    color: #B1BCCC;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 5px;

  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px !important;
    padding-left: 40px !important;
    margin: 10px 0;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.darkTextColor};
`

export const SubTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.lightGray};
  text-align: center;
`

export const ValidationText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.danger500};
`
