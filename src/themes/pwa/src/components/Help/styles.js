import styled, { css } from 'styled-components'

export const HelpContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 15px 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 68px);
  @media (min-width: 769px) {
    width: 70%;
  }
`

export const BreadCrumbContainer = styled.div`
  margin-bottom: 23px;
  display: flex;
  align-items: center;
  svg {
    font-size: 13px;
    color: #909BA9;
    margin: 0 7px;
    ${props => props.theme?.rtl && css`
      transform: rotateZ(180deg);
    `}
  }
  span {
    font-size: 12px;
    color: #344050;
    &.deactive {
      color: #909BA9;
      cursor: pointer;
    }
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 10px;
  margin-top: 0;
  color: #344050;
  @media (min-width: 1024px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`

export const SubTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 18px;
`

export const HelpContentWrapper = styled.div``

export const SubPageList = styled.div`
  margin-bottom: 60px;
`

export const SubPage = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 5px;
  span {
    font-size: 14px;
    color: #344050;
    user-select: none;
    cursor: pointer;
  }
`

export const LastOrdersListWrapper = styled.div`
  margin-bottom: 60px;
  h2 {
    font-weight: 500;
    font-size: 20px;
    color: #344050;
    margin-bottom: 10px;
    margin-top: 0;
  }
`
