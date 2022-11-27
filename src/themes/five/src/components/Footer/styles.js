import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: none;
  position: relative;
  @media (min-width: 768px) {
    display: block;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const Content = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

  > h4 {
    font-weight: 600;
    font-size: 16px;
    margin: 20px 0px 15px 0px;
  }

  > div {
    margin: 10px 0;
    > a {
      display: inline-block;
      text-decoration: none;
      font-size: 14px;
      text-decoration: none;
      color: #344050;
      transition: all 0.2s linear;

      &:hover {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
      }
    }
  }



  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }

  @media (min-width: 992px) {
    width: 25%;
    margin: 0;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Description = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: #344050;
`

export const SocialIconList = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1400px) {
    width: 25%;
    justify-content: space-between;
  }
`

export const LanguageWrapper = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  margin-right: 15px;
  ${props => props.theme?.rtl && css`
    margin-left: 15px;
    margin-right: 0px;
  `}

  svg {
    font-size: 20px;
  }
  #select-input {
    background-color: transparent !important;
    border: none;
    color: #344050 !important;

    > div:first-child {
      font-size: 14px;
      text-decoration: underline;
      padding-right: 0px !important;
      padding-left: 12px !important;
      ${props => props.theme?.rtl && css`
        padding-right: 12px !important;
        padding-left: 0px !important;
      `}
      svg {
        display: none;
      }
    }
    #list {
      bottom: 100%;
      border-radius: 8px;
    }
  }
`

export const SocialGroup = styled.div`
  display: flex;
  align-items: center;

  a {
    color:  #344050;
    display: flex;
    align-items: center;
    margin: 10px 0px 10px 15px;
    ${props => props.theme?.rtl && css`
      margin: 10px 15px 10px 0px;
    `}
    > svg {
      font-size: 20px;
    }
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.04);
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const PoweredByOrdering = styled.p`
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: pre;
  margin-bottom: 10px;
  a{
    font-weight: 600;
  }
`
