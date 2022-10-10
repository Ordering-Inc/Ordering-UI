import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: fit-content;
  height: 374px;
  position:relative;
  margin-bottom: 30vh;


  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 375px) {
    height: 374px;
  }

  @media (min-width: 567px) {
    height: calc(100vh - 65px);
    margin-bottom: 0;
  }
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0px 10vw 0px;
    background-color: #0000004D;

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 576px) {
      justify-content: center;
      padding: 0px 40px 0px;
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #2c2e33;
  opacity: 1;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 381px) {
    font-size: 35px;
  }


  @media (min-width: 576px) {
    font-size: 40px;
    line-height: initial;
  }

  @media (min-width: 850px) {
    font-size: 72px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: .96rem;
  line-height: 24px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  text-shadow: 0px 3px 6px #2c2e33;
  margin-bottom: 30px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
    line-height: initial;
    margin-bottom: 37px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  padding: 8px 16px;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  ${({ withIcon }) => withIcon && css`
    width: calc(100% - 20px);
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }

    @media (min-width: 576px) {
      padding: 10px 25px;
      margin-bottom: 27px;
    }

    @media (min-width: 1024px) {
      width: calc(50% - 20px);
    }
  `}

  p{
    color: ${props => props.theme.colors.darkTextColor};
    position: relative;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 18px;
    @media (min-width: 576px) {
      font-size: 1rem;
      line-height: initial;
    }
  }

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
    ${props => props.theme?.rtl ? css`
      margin-left: 12px;
    ` : css`
      margin-right: 12px;
    `}

    @media (min-width: 576px) {
      ${props => props.theme?.rtl ? css`
        margin-left: 20px;
      ` : css`
        margin-right: 20px;
      `}
    }
  }
`

export const UseAccount = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 30vh;
  padding: 10vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
  }

  > *:last-child {
    margin-top: 14px;
    background-color: #E9F2FE;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 576px) {
    display: none;
  }
`

export const SectionHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #344050;
  margin: 0;
  margin-bottom: 27px;
  width: 100%;
`

export const LogoWrapper = styled.div`
  width: 150px;
  margin: 53px auto;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    object-fit: fill;
  }
`
export const HeroContent = styled.div`
  button{
    font-size: 12px;
    line-height: 18px;
    padding: 10px 16px;
    margin-bottom: 45px;
    white-space: nowrap;

    @media (min-width: 576px) {
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 18px;
      width: 180px;
      line-height: initial;
    }
  }
`
