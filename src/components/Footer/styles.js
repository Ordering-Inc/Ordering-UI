import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.darkTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  h1 {
    color: #fff;
    font-size: 18px;
  }

  a {
    color: ${props => props.theme.colors.grayTextColor};
    text-decoration: none;
    margin: 7px 0;
    font-size: 14px;    
  }

  a.right {
    text-align: right;
  }

  @media (max-width: 768px) {
    h1 {
     text-align: center;
    }

    a {
      text-align: center;
    }
  }

  ${({ isHomePage }) => !isHomePage && css`
    background-color: #fff;
    border-top: 1px solid ${props => props.theme.colors.secondary};

    h1 {
      color: ${props => props.theme.colors.darkTextColor};
    }
  `}
`

export const FooterTopContent = styled.div`
  display: flex;
  width: 91%;

  & > div {
    width: 50%;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }  
`

export const LinkBlock = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 992px) {
    & > div {
      width: initial;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const SupportContent = styled.div`
  display: flex;
  width: 91%;
  justify-content: space-between;
  padding: 30px 0;

  & > div {
    width: 25%;
    a {
      display: block;
    }
  } 
  @media (max-width: 992px) {
    & > div {
      width: initial;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const WrapAppImgae = styled.div`
  display: inline-block;
  width: 150px;
  background-color: ${props => props.theme.colors.grayTextColor};
  border-radius: 10px;
  img {
    width: 100%;
  }
  margin-bottom: 20px;
`
export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91%;

  & > div {
    display: flex;
    align-items: center;

    &:first-child {
      column-gap: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    & > div {
      flex-wrap: wrap;
      justify-content: center;
      &:first-child {
        column-gap: 10px;
      }
    }
  }
`
export const SocialIcon = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 5px !important;
  color: initial;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`
