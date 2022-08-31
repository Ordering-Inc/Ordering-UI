import styled, { css } from 'styled-components'

export const SkeletonContainer = styled.div`
  display: flex;
  width: 15%;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 9px;
  overflow: hidden;
`

export const VerticalUpsellingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  margin-top: 20px;
`

export const HorizontalItem = styled.div`
  width: 99%;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-bottom: 0 !important;
  @media (min-width: 768px){
    justify-content: space-between;
  }
`

export const HorizontalImage = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 0 !important;
  img {
    min-width: 100px;
    width: 100px;
    height: 147px;
  }

`

export const HorizontalDetails = styled.div`
  min-width: 100px;
  position: relative;
  height: 147px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  flex: 1;
  h3, p, span{
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    color: ${props => props.theme.colors.darkTextColor};
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.darkTextColor};

    &.discount {
      font-size: 10px;
      color: #909BA9;
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }

  svg {
    width: 30px;
    min-width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
  svg:hover {
    opacity: 0.5;
  }
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: calc(100% + 20px);
  margin-left: -10px;

  @media (min-width: 768px) {
    width: calc(100% + 60px);
    margin-left: -30px;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
