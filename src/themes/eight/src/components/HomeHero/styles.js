import styled, { css } from 'styled-components'

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    font-size: 50px;
    margin-bottom: 80px;
    width: 50%;
  }
`

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.secundary};
  text-align: center;
  margin: 50px auto 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 992px) {
    font-size: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`

export const Slogan = styled.p`
  font-size: 14px;  
  text-align: center;
  color: ${props => props.theme.colors.grayDark};
  margin: 0px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`

export const OrderTypeSelectContainer = styled.ul`
  list-style-type: none;
  max-width: 500px;
  padding: 0px;
  margin: 15px auto 0;

  @media (min-width: 992px) {
    padding: 0 40px;
  }
`

export const OrderTypeItem = styled.li`
  cursor: pointer;
  transition: all .3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 24px 0;
  padding: 40px 20px;

  &:hover {
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
    transform: translateY(-1px);
  }

  img {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    img {
      transform: scale(1);
    }
  }
`

export const OrderTypeInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}

  span {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 12px;
    margin: 6px 0 0 0;
    color: ${props => props.theme.colors.grayDark};
  }

  @media (min-width: 768px) {
    ${props => props.theme?.rtl ? css`
      margin-right: 30px;
    ` : css`
      margin-left: 30px;
    `}

    span {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`
