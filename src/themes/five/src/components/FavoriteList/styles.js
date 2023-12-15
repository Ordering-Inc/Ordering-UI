import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 35px;
`

export const ErrorMessage = styled.span`
  padding: 20px;
  width: 100%;
  margin: 0px 15px;
  color: ${props => props.theme.colors.danger500};
  font-weight: bold;
`

export const FavoriteListWrapper = styled.div`
  overflow: auto hidden;
  width: 100%;

  ${({ isLoading }) => isLoading ? css`
    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
  ` : css`
      ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
      }
  `}
`

export const FavoriteListing = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  #favorite {
    > div {
      width: calc(100vw - 40px);
      min-width: calc(100vw - 40px);

      @media (min-width: 681px) {
        width: calc(50vw - 40px);
        min-width: calc(50vw - 40px);
      }
      @media (min-width: 993px) {
        width: calc(33vw - 40px);
        min-width: calc(33vw - 40px);
      }
      @media (min-width: 1200px) {
        width: calc(25vw - 40px);
        min-width: calc(25vw - 40px);
      }
    }
  }
  ${({ isOrder }) => isOrder && css`
    #favorite {
      > div {
        @media (min-width: 681px) {
          min-width: 400px;
        }
      }
    }
  `}
`

export const ReadMoreCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 44px;
  }
`

export const FavPopupView = styled.div`
  margin-top: 20px;
  text-align: center;
  h2 {
    font-size: 16px;
  }
  @media(min-width: 720px){
    h2 {
      font-size: 20px;
    }
  }
`

export const SingleBusinessOffer = styled.div`
  display: flex;
  button{
      font-size: 12px;
    }
  @media (min-width: 720px){
    button{
      font-size: 16px;
    }
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  button{
    height: 44px;
  }
  p{
    font-size: 12px;
    width: 50%;
    text-align: left;
  }
  @media(min-width: 720px){
    p{
      font-size: 16px;
      width: 70%;
    }
  }
`

export const Image = styled.div`
  width: 100%;
  img{
    width: 100%;
    height: auto;
    border-radius: 16px;
    aspect-ratio: attr(width) / attr(height)
  }
`

const BusinessLogoStyled = styled.div`
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 65px;
  border-radius: 7.6px;

  @media (min-width: 481px){
    min-width: 75px;
    min-height: 75px;
    height: 75px;
    width: 75px;
    min-height: 75px;
    ${({ isCustomerMode }) => isCustomerMode && css`
      width: 100%;
      height: 100%;
    `}
  }
`

export const BusinessLogo = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <BusinessLogoStyled {...props} style={style}>
      {props.children}
    </BusinessLogoStyled>
  )
}

