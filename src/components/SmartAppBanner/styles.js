import React from 'react'
import styled, { css } from 'styled-components'
export const smartbannerCloseMargin = 5
export const smartbannerCloseSize = 17
export const smartbannerIconMargin = 12
export const smartbannerIconSize = 57
export const smartbannerButtonSize = 100
export const spaces = smartbannerCloseMargin + smartbannerCloseSize + smartbannerIconMargin + smartbannerIconSize + smartbannerButtonSize

export const Banner = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 0px;
  line-height: 80px;
  font-family: 'Helvetica Neue', sans-serif;
  background: #f4f4f4;
  z-index: 9998;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  -webkit-text-size-adjust: none;
  transition:height 0.4s;

  &.smartbanner-ios {
    background: #f2f2f2;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    line-height: 80px;
    .banner-close {
      border: 0;
      width: 18px;
      height: 18px;
      line-height: 18px;
      font-family: Arial;
      color: #888;
      text-shadow: 0 1px 0 #fff;
      -webkit-font-smoothing: none;
      &:active,
      &:hover {
        color: #888;
      }
    }
    .banner-icon {
      background-size: cover;
    }
    .banner-info {
      color: #6a6a6a;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
      font-weight: 300;
    }
    .banner-title {
      color: #4d4d4d;
      font-weight: 500;
    }
    .banner-button {
      padding: 0 10px;
      min-width: 10%;
      color: #6a6a6a;
      background: #efefef;
      background: linear-gradient(to bottom, #efefef, #dcdcdc);
      border-radius: 3px;
      box-shadow: inset 0 0 0 1px #bfbfbf, 0 1px 0 rgb(255 255 255 / 60%), 0 2px 0 rgb(255 255 255 / 70%) inset;
      &:active,
      &:hover {
        background: linear-gradient(to bottom, #dcdcdc, #efefef);
      }
    }
  }
  &.smartbanner-android {
    background: #3d3d3d url('data:image/gif;base64,R0lGODlhCAAIAIABAFVVVf///yH5BAEHAAEALAAAAAAIAAgAAAINRG4XudroGJBRsYcxKAA7');
    box-shadow: inset 0 4px 0 #88b131;
    line-height: 82px;
    .banner-close {
      border: 0;
      max-width: ${smartbannerCloseSize}px;
      width: 100%;
      height: ${smartbannerCloseSize}px;
      line-height: ${smartbannerCloseSize}px;
      margin-right: 7px;
      color: #b1b1b3;
      background: #1c1e21;
      text-shadow: 0 1px 1px #000;
      text-decoration: none;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8) inset, 0 1px 1px rgba(255, 255, 255, 0.3);
      cursor: pointer;
      &:active,
      &:hover {
        color: #eee;
      }
    }
    .banner-icon {
      background-color: transparent;
      box-shadow: none;
    }
    .banner-info {
      color: #ccc;
      text-shadow: 0 1px 2px #000;
    }
    .banner-title {
      color: #fff;
      font-weight: bold;
    }
    .banner-button {
      min-width: 12%;
      color: #d1d1d1;
      font-weight: bold;
      padding: 0;
      background: none;
      border-radius: 0;
      box-shadow: 0 0 0 1px #333, 0 0 0 2px #dddcdc;
      &:active,
      &:hover {
        background: none;
      }
    }
    .banner-button-text {
      text-align: center;
      display: block;
      padding: 0 10px;
      background: #42b6c9;
      background: linear-gradient(to bottom, #42b6c9, #39a9bb); // sass-lint:disable-block no-duplicate-properties
      text-transform: none;
      text-shadow: none;
      box-shadow: none;
      &:active,
      &:hover {
        background: #2ac7e1;
      }
    }   
  }
`
export const BannerContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;
`
export const BannerClose = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin: 0 ${smartbannerCloseMargin}px 0 0;
  font-family: 'ArialRoundedMTBold', Arial;
  font-size: 20px;
  text-align: center;
  color: #888;
  text-decoration: none;
  border: 0;
  border-radius: 14px;
  padding: 0 0 1px;
  background-color: transparent;
  -webkit-font-smoothing: subpixel-antialiased;
  &:active,
  &:hover {
    color: #aaa;
  }
`
export const BannerIconStyled = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: ${smartbannerIconSize}px;
  height: ${smartbannerIconSize}px;
  margin-right: ${smartbannerIconMargin}px;
  border-radius: 10px;
  ${({ active }) => active && css`
    & > * {
      color
    }
  `}
  ${({ bgImg }) => bgImg && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  ${({ ios }) => ios && css`
    background-size: cover;
  `}
  ${({ andriod }) => andriod && css`
    background-color: transparent;
    box-shadow: none;
  `}
`
export const BannerIcon = (props) => {
  const style = {}
  if (props.bgImg) {
    style.backgroundImage = `url(${props.bgImg})`
  } else {
    style.backgroundColor = '#ddd'
  }
  return (
    <BannerIconStyled {...props} style={style}>
      {props.children}
    </BannerIconStyled>
  )
}
export const BannerInfo = styled.div`
  white-space: normal;
  display: inline-block;
  vertical-align: middle;
  width: calc(99% - ${spaces}px);
  font-size: 11px;
  line-height: 1.2em;
  font-weight: bold;
`
export const Title = styled.div`
  font-size: 13px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
`
export const AppAuthor = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:empty {
    + .banner-description {
      max-height: 50px;
    }
  }
`
export const Description = styled.div`
  max-height: 40px;
  overflow: hidden;
`
export const BannerWrapper = styled.div`
  max-width: ${smartbannerButtonSize}px;
  display: inline-block;
  text-align: right;
  width: 100%;
  .banner-button {
    margin: auto 0;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    color: #6a6a6a;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
    &:active,
    &:hover {
      color: #aaa;
    }
  }
`
