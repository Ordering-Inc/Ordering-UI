import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  text-align: left;
  padding: 30px 0 45px 0;
  flex-wrap: wrap;

  ${props => props.theme?.rtl && css`
      text-align: right;
    `} 

  > * {
    margin: 0 auto;
  }

  h5 {
    font-size: 1.1em;
    text-transform: uppercase;
    margin-block-end: 1em;
    margin-block-start: 1em;
  }

  > :first-child{
    margin-left: 10%
    ${props => props.theme?.rtl && css`
      margin-right: 10%;
      margin-left: 0;
    `} 
  }
  
  @media (max-width: 980px){
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    > * {
      margin: 0 25% 0 25%;
    }
    > :first-child{
    margin-left: auto
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: initial;
    `} 
  }
  }
`

export const Content = styled.div`
  width: 25%;
  > * {
    display: block;
    text-decoration: none;
    color: initial;
    font-size: 14px;
    margin: 10px 0;
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
  }

  @media(max-width: 720px){
    width: 30%;
    font-size: 10px;
  }
  @media (max-width: 640px) {
    width: 50%;
    margin-bottom: 20px;
    > * {
      font-size: 16px;
    }
    h1 {
      font-size: 16px;
    }
  }
`
export const SocialMedia = styled.div`
  width: 30%;
  h1 {
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0;
  }

  @media(min-width: 720px){
    margin-right: 0;
    margin-left: 0;
  }
  @media(max-width: 720px){
    width: 30%;
    font-size: 10px;
  }

  @media (max-width: 640px) {
    width: 50%;
    margin-bottom: 20px;
    h1 {
      font-size: 16px;
    }
  }
`

export const SocialIcon = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  color: initial;
  svg {
    width: 100%;
    height: 100%;
  }
  &:first-child{
    margin-left: 0
  }
  @media (max-width: 980px) {
    width: 24px;
    height: 24px;
    margin: 0 5px;  
  }
  @media(max-width: 720px){
    width: 20px;
    height: 20px;
    margin: 0 5px;  
  }
`

export const Copy = styled.div`
  margin: 0;
  margin-top: 10px;
  width: 80%;
  text-align: center;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  @media (max-width: 640px){
    margin: auto;
  }

`
