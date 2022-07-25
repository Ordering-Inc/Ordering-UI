import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0px;
  position: relative;

  ${({ bgimage }) => bgimage && css`
  background-image: url(${bgimage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 400px) {
    font-size: 65px;
  }

  @media (min-width: 576px) {
    font-size: 72px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 24px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 37px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 25px;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 27px;

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
  `}
  
  p {
    color: ${props => props.theme.colors.darkTextColor};
    position: relative;
    margin: 0;
  }

  svg {
    color: ${props => props.theme.colors.primary};
    width: 22px;
    height: 22px;
    min-width: 22px;

    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}

  }
`

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${props => props.contentPosition === 'left' && css`
    align-items: center;
    justify-content: left;
  `}

  ${props => props.contentPosition === 'right' && css`
    align-items: center;
    justify-content: right;
  `}

  ${props => props.contentPosition === 'top' && css`
    align-items: start;
    justify-content: center;
  `}

  ${props => props.contentPosition === 'bottom' && css`
    align-items: end;
    justify-content: center;
  `}

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 40px);
    position: relative;
    padding: 20px;

    ${props => props.theme?.rtl && css`
      padding: 20px;
    `}

    button {
      width: 180px;
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      padding: 40px;
      width: 50%;
      ${props => props.theme?.rtl && css`
        padding: 40px;
      `}
    }
  }

`
