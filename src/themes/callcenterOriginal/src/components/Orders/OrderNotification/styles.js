import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  padding: 10px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 200ms;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }

  p {
    text-align: center;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 22px;

    span {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    margin: 40px 0;
  }

  @keyframes fadeIn {
    from {
      transform: scale(2);
    }
  
    to {
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    img {
      width: 290px;
      height: 290px;
    }
  }
`
export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 39px;
  }

  > div {
    display: flex;
    flex-direction: column;
    color: #344050;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
    span {
      &:first-child {
        font-size: 14px;
        line-height: 21px;
        font-weight: 500;
        margin-bottom: 2px;
      }
      &:last-child {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`
