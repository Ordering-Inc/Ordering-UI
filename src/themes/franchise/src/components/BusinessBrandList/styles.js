import styled, { css } from 'styled-components'

export const BranchListContainer = styled.div`
  margin-bottom: 30px;
`

export const BranchTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme?.colors.headingColor};
  margin-top: 0;
  margin-bottom: 10px;
`

export const BranchContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const BranchInfoBlock = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 14px;
    color: ${props => props.theme?.colors.darkGray};
    margin-bottom: 10px;
    margin-top: 0;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme?.colors.darkPrimaryColor};
    cursor: pointer;
    user-select: none;
    transition: all 0.3s linear;
  
    &:hover {
      color: ${props => props.theme?.colors.primary};
    }
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
  color: ${props => props.theme?.colors.lightGray};
  font-size: 14px;
  margin-top: 5px;

  &:first-child {
    padding-left: 0;
   ${props => props.theme?.rtl && css`
      padding-right: 0;
      padding-left: 10;
   `}
  }

  &:last-child {
    padding-right: 0;
    border: none;
   ${props => props.theme?.rtl && css`
      padding-left: 0;
      padding-right: 10;
   `}
  }

  ${({ isSkeleton }) => isSkeleton && css`
    border: none;
  `}
`
