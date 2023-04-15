import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  overflow: hidden;
  .swiper-slide {
    /* position: relative; */
    /* height: 256px; */
  }
  .swiper-button-next {
    background-image: url(${props => props.theme.images.general.rightArrow});
    background-color: #d1d0d04d;
    background-repeat: no-repeat;
    background-position: 55% center;
    width: 32px;
    height: 32px;
    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
    border-radius: 50%;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  .swiper-button-prev {
    background-image: url(${props => props.theme.images.general.leftArrow});
    background-color: #d1d0d04d;
    background-repeat: no-repeat;
    background-position: 45% center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    display: none;
  }
`
export const ImageWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding-top: 18%;
  position: relative;
  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
