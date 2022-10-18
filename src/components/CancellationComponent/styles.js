import styled, { css } from 'styled-components'

export const Hero = styled.div`
  margin-bottom: 30px;
  width: 100%;
  background: black;
  overflow: hidden;
  position: relative;

  @media (min-width: 450px) {
    height: 370px;
  }

  @media (min-width: 821px) {
    height: ${({ height }) => height || '450px'};
  }
`

export const BgImg = styled.img`
  ${({ src }) => src && css`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    object-fit: cover;
    position: absolute;
  `}
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${props => props.theme.colors.backgroundPage};
    opacity: .9;
    text-align: center;

  .title {
    font-size: 40px;
    margin: 10px 0;
  }

  .sub-title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 100;
      margin: 0;
      max-width: 560px;
  }

  .terms {
      font-style: italic;
  }
`

export const LogoImg = styled.img`
  ${({ src }) => src && css`
    width: 120px;
    height: 120px;
    border-radius: 8px;
    margin-bottom: 30px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  height: 200px;
  background-color: #F3F9FF;
  text-align: center;

  p {
    font-size: x-large;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
    max-width: 600px;
  }

  button {
    margin-top: 20px;
  }
`

export const Segment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  text-align: center:
  width: 100%;
  text-align: center;

  p {
    font-size: x-large;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
    max-width: 660px;
    margin-bottom: 30px;
  }
`

export const InputWrapper = styled.div`
  margin: 10px 20px 0px;
  display: flex;
  
  button {
    width: 80px;
    margin-left: -10px;
    border-radius: 0 7.6px 7.6px 0;
    padding: 4px;
    z-index: 100;
  }
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%; 
    padding: 0 20px;
    margin-right: 20px;
    
    @media(min-width: 681px){
      width: 60%;
      padding: 0;
    }

    @media(min-width: 1201px){
      width: 50%;
    }
`

export const BusinessSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  input {
    border: none;
    border-bottom: 1px solid #E9ECEF;
    border-radius: 0px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 30px 18px;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 50px;

    @media (min-width: 681px) {
      width: 100%;
    }

  }
`