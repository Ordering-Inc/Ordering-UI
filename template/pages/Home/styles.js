import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
  display: flex;
  flex-direction: column;
`
export const HomeSection = styled.div`
  display: flex;
  justify-content: center;

  ${({ bottom }) => bottom && css`
    background-color: #FFF0ED;
  `}

  @media (max-width: 576px) {
    ${({ top }) => top && css`
      background-color: #FFF0ED;
    `}
  }
`
export const InnerSection = styled.div`
  width: 91%;
  display: flex;
  padding: 120px 0;

  ${({ top }) => top && css`
    padding: 0px;
  `}

  @media (max-width: 1200px) {
    padding: 100px 0;

    ${({ top }) => top && css`
      padding-top: 0px;
    `}
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 50px 0;

    ${({ bottom }) => bottom && css`
      flex-direction: column-reverse;
    `}
  }

  @media (max-width: 576px) {
    ${({ top }) => top && css`
      flex-direction: column-reverse;     
    `}

    ${({ bottom }) => bottom && css`
      flex-direction: column;
    `}
  }
`
export const WrapBecomeBlock = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  box-sizing: border-box;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 30px 0 80px 0;
  }
`
export const BecomeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 760px) {
    padding: 20px 0;
  }
  @media (max-width: 576px) {
    flex-direction: row;
  }
`
export const WrapImage = styled.div`
  display: flex;
  justify-content: center;
  max-height: 170px;
  max-width: 100%;

  @media (max-width: 1200px) {
    max-height: 120px;
  }

  @media (max-width: 576px) {
    max-height: 100px;
    width: 40%;
    padding-right: 20px;
    ${props => props.theme?.rtl && css`
      padding-right: 0px;
      padding-left: 20px;
    `}
  }
`
export const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  object-fit: contain;
`
export const TextContent = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
`
export const WrapTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  button {
    font-size: 18px;
    padding: 7px 20px;
  }
  @media (max-width: 992px) {
    padding-bottom: 25px;
  }
  @media (max-width: 576px) {
    padding: 0 15px;
  }
`
export const WrapSectionImg = styled.div`
  width: 55%;

  ${({ top }) => top && css`
    @media (min-width: 1200px) {
      transform: translateY(60px);
    }
  `}
  @media (max-width: 992px) {
    width: 100%;
    padding-bottom: 25px;
    img {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    img {
      display: inline-block;
      width: 70%;
      border-radius: 10px;
    }
   ${({ top }) => top && css`
    margin-top: -120px;
    text-align: right;
   `}
   ${({ bottom }) => bottom && css`
    margin-left: -5%;
   `}
  }
`
export const SectionTitle = styled.h1`
  font-size: 34px;
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 28px;
  }
`
export const SectionTextContent = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  margin: 20px 0;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 27px;
  }
`
export const WrapperGetApp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 91%;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  p {
    width: 55%;
    margin: 0px;
    font-weight: 500;
  }  
`
