import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '90vh' : '100vh'};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSide = styled(Side)`
  display: none;

  @media (min-width: 768px) {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.primaryContrast};
    background-color:  ${props => props.theme.colors.primary};
  }
`

export const TitleHeroSide = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 50px;
  }

  h1,
  p {
    margin: 0px;
    color: #FFF;
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: ${({ isPopup }) => isPopup ? 'auto' : '20px 0px'};

  img {
    width: 200px;
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }

  @media (min-width: 768px) {
    width: 45%;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }
`

export const SignUpWith = styled.div`
  font-size: 14px;

  @media (min-width: 992px) {
    font-size: 18px;
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  ${({ isSkeleton }) => !isSkeleton && css`
    * {
      padding: 8px 20px;
      margin: 10px;
    }
  `}

  input:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 768px) {
    ${({ isPopup }) => isPopup && css`
      flex-direction: row;
      font-size: 13px;
    `};
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export const SocialButtons = styled.div`
   width: calc(100% - 40px);
   margin-top: 5px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
`
