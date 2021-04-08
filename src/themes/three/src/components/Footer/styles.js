import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 50px 0;
`
export const InnerContainer = styled.div`
  width: 91%;
  margin: 0 auto;
`
export const FooterTopContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const LogoContainer = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
export const LinkMainContent = styled.div`
  width: 50%;
  display: flex;
  @media (max-width: 992px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
export const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  h1 {
    font-size: 18px;
    color: ${props => props.theme.colors.white};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
export const AppDownloadContariner = styled.div`
  display: flex;
  column-gap: 30px;
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const WrapAppImgae = styled.div`
  width: 150px;
  border-radius: 10px;
  height: 45px;
  overflow: hidden;
  border: 2px solid ${props => props.theme.colors.darkGray};
  img {
    width: 100%;
    height: 100%;
  }
`
export const FooterBottomContainer = styled.div`
  display: flex;
  padding: 30px 0 10px 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`
export const SocialLinkContainer = styled.div`
  display: flex;
  column-gap: 20px;
`
export const SocialIcon = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
  }
`
export const PolicyContainer = styled.div`
  display: flex;
  column-gap: 15px;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
  }
`
export const CopyWritterContainer = styled.div`
  font-size: 14px;
  margin: 0px;
  color: ${props => props.theme.colors.white};
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`
