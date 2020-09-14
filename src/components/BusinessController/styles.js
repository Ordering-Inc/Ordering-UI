import styled, { css } from 'styled-components'

export const ContainerCard = styled.div`
  max-width: 400px;
  max-height: 300px;
  height: 300px;
  width: 360px;
  border-radius: 10px;
  margin: 30px 20px;
`

export const WrapperBusinessCard = styled.div`
  border-radius: 10px;
`

export const BusinessHero = styled.div`
  border-radius: 10px;
`

export const BusinessHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  background-image: ${({ bgimage, isClosed }) =>
    isClosed
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimage})`
      : `url(${bgimage})`
  };
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  h1 {
    color: #FFF;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    min-height: 175px;
  }
`

export const BusinessTags = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 15px;
  width: calc(100% - 35px);

  span.crown {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #FFC917;
  }

  span {
    background-color: #6C6C6C;
    color: #FFF;
    padding: 10px;
    border-radius: 10px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  margin-top: 15px;
  max-height: 75px;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

export const BusinessLogo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #000;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${bgimage});
  `}
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  div {
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      text-transform: capitalize;
      img {
        margin-right: 4px;
      }
    }
    p.bold {
      font-weight: bold;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`
