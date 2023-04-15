import styled, { css } from 'styled-components'

export const Medadata = styled.div`
  margin-top: 5px;
  display: flex;
  font-weight: 300;
  font-size: 12px;
  color: #909BA9;
  ${({ isCustomerMode }) => isCustomerMode && css`
    > div {
      flex-direction: column;
    }
  `}
  p {
    color: #909BA9;
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0;
    `}
    }

    span {
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

  @media (min-width: 481px) {
    font-size: 14px;
  }
`

export const CallCenterInformation = styled.div`
  display: flex;
  flex-direction: column;
  div{
    justify-content: space-evenly;
  }
`

export const CallCenterInformationBullet = styled.div`
  display: flex;
  padding: 2px;
  margin-bottom: 2px;
  border-radius: 16px;
  background: ${({ bgcolor }) => bgcolor};
  width: 50px;
  color: #fff;

  svg{
    font-size: 18px;
  }
`

export const BranchListContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
`

export const BranchTitle = styled.div`
  display: flex;
  align-items: center;

  > h2 {
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme?.colors.headingColor};
    margin-top: 0;
    margin-bottom: 10px;
  }
`

export const BranchContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 470px) {
    flex-direction: row;
  }

  @media (min-width: 850px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

export const BranchInfoBlock = styled.div`
  margin-bottom: 20px;
  max-width: 250px;
  box-sizing: border-box;

  padding-right: 15px;
  ${props => props.theme.rtl && css`
    padding-left: 15px;
    padding-right: 0px;
  `}

  @media (min-width: 1300px) {
    max-width: 70%;
  }

  p {
    font-size: 14px;
    color: ${props => props.theme?.colors.darkGray};
    margin-bottom: 10px;
    margin-top: 0;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme?.colors.darkPrimaryColor};
  }

  h1 {
    font-size: 14px;
    margin: 0;
  }
`

export const OrderBtnWrapper = styled.div`
  margin-bottom: 20px;
`

export const OrderTypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const OrderType = styled.div`
  padding: 0 10px;
  border-right: 1px solid ${props => props.theme?.colors.lightGray};
  margin-top: 5px;
  display: flex;
  align-items: center;

  ${props => props.theme.rtl && css`
    border-left: 1px solid ${props => props.theme?.colors.lightGray};
    border-right: none;
  `}

  svg {
    margin-right: 5px;
    ${props => props.theme.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }

  span {
    color: ${props => props.theme?.colors.lightGray};
    font-size: 14px;
  }

  &:first-child {
    padding-left: 0;
   ${props => props.theme?.rtl && css`
      padding-right: 0;
      padding-left: 10px;
   `}
  }

  &:last-child {
    padding-right: 0;
    border: none;
   ${props => props.theme?.rtl && css`
      padding-left: 0;
      padding-right: 10px;
   `}
  }

  ${({ isSkeleton }) => isSkeleton && css`
    border: none;
  `}
`

export const RibbonBox = styled.div`
  padding: 2px 8px;
  box-sizing: border-box;
  z-index: 10;
  color: ${props => props.theme.colors.colorTextSignForm};
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  background-color: ${props => props.theme.colors.primary};
  max-width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-left: 5px;
  margin-bottom: 10px;

  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 5px;
  `}

  ${({ bgColor }) => bgColor && css`
    background-color: ${bgColor};
  `}

  ${({ isRoundRect }) => isRoundRect && css`
    border-radius: 7.6px;
  `}

  ${({ isCapsule }) => isCapsule && css`
    border-radius: 50px;
  `}
`
