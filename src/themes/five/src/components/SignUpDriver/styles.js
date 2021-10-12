import styled, { css } from 'styled-components'
import React from 'react'

export const SignupBusinessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 70px 15px;

  > div {
    width: 100%;
  }

  @media (min-width: 993px) {
    flex-direction: row;
    padding: 150px 70px;
    > div {
      width: 50%;
    }
  }
`

export const SignUpHeroWrapper = styled.div`
  margin-top: 15px;
  padding: 65px 0 0 0;
  box-sizing: border-box;

  @media (min-width: 993px) {
    padding-right: 70px;
    ${props => props.theme.rtl && css`
      padding-right: 0px;
      padding-left: 70px;
    `}
  }
`

export const SignUpHeroStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 380px;
  border-radius: 7.6px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const SignUpHero = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <SignUpHeroStyled {...props} style={style}>
      {props.children}
    </SignUpHeroStyled>
  )
}

export const SignUpFormWrapper = styled.div`
  margin-top: 15px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 0;
  }
`

export const FormInput = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    height: 44px;
    font-size: 14px;
    box-sizing: border-box;
    margin-bottom: 24px;
    width: 100%;
  }

  .half-input {
    width: 100%;
  }

  @media (min-width: 576px) {
    .half-input {
      width: 49%;
    }
  }

  button {
    margin-top: 12px;
    width: 100%;
    height: 44px;
  }
`

export const PhoneInputWrapper = styled.div`
  border-radius: 7.6px;
  margin-bottom: 24px;
  border: 1px solid #DBDCDB;
  padding-left: 15px;
  background: white;
  width: 100%;
  position: relative;

  ${props => props.theme.rtl && css`
    padding-right: 15px;
    padding-left: 0;
  `}

  input.PhoneInputInput {
    border: none !important;
    border-radius: 7.6px;
    margin-bottom: 0;
    font-size: 14px;
  }

  .phone_number {
    > span {
      left: 0;
      position: absolute;
      font-size: 13px;
    }
  }
`
