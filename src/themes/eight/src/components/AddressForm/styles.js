import styled, { css } from 'styled-components'

export const AddressFormContainer = styled.div`
  ${({ isPopup }) => isPopup ? css`
    width: 100%;
  ` : css`
    width: 90%;
    margin: 20px auto;
  `}

  h1 {
    color: ${props => props.theme.colors.secundary};
    font-size: 24px;
    text-align: center;
    width: 100%;
    margin: 0px;
  }

  h5 {
    color: ${props => props.theme.colors.grayDark};
    font-size: 16px;
    text-align: center;
    width: 100%;
    font-weight: 400;
    margin: 10px 0 30px 0;
  }

  @media (min-width: 768px) {
    ${({ isPopup }) => isPopup ? css`
      width: 100%;
    ` : css`
      width: 60%;
      margin: 50px auto;
    `}
    h1 {
      font-size: 32px;
    }

    h5 {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 40px;
    }

    h5 {
      font-size: 24px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 48px;
    }
  }
`

export const FormActions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    min-width: 150px;
  }
`

export const FormControl = styled.form`
  padding: 0px;

  > * {
    margin-bottom: 20px;
  }

  @media (min-width: 481px) {
    padding: 10px;
  }
`

export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  > div {
    width: 100%;
  }

  > button {
    bottom: 10px;

    ${props => props.theme?.rtl ? css`
      left: 10px;
    ` : css`
      right: 10px;
    `}
  }
`

export const AddressTagSection = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    -webkit-tap-highlight-color: transparent;

    img {
      width: 22px;
      height: 22px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
    }
  }

  button.active {
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 7.6px;
  }
`

export const ShowMap = styled.p`
  text-align: center;
  color: #000;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
`

export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    width: 100%;
  }
`
