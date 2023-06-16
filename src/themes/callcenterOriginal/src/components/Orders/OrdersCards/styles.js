import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  height: calc(100% - 200px);
  padding: 0 12px 15px 12px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 1024px) and (max-width: 1300px) {
    height: calc(100% - 230px);
  }
`
export const OrderNunberContainer = styled.div`

`
export const OrderCard = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors?.secundary};
  margin-bottom: 20px;
  padding: 15px 20px;
  padding-left: 25px;

  ${props => props.theme?.rtl && css`
    padding-left: 0px;
    padding-right: 25px;
 `}
 

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border: 1px solid ${props => props.theme.colors.primary};
  `}

  p,
  h2 {
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
  }
  
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
`

export const OrderHeader = styled.div`
  > div {
    display: flex;
    margin: 5px 0 10px;
    > p {
      font-size: 12px;
    }
  }

  > p {
    font-size: 14px;
    margin-top: 5px;
    color: ${props => props.theme.colors.colorPage};
  }
`
export const Timer = styled.div`
  align-items: right;
  p {
    font-size: 10px;
    line-height: 15px;
  }

  .bold {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  .in_time{
    color: #00D27A;
  }

  .at_risk {
    color: #FFC700;
  }
  
  .delayed {
    color: #E63757;
  }
`

export const ViewDetails = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  text-decoration: underline;
  margin: 0 10px;
`

export const InfoItemContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 5px 0;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 125px;

  }
  display: flex;
  align-items: center;

  div.info {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
    p {
      margin: 0px;
      color: ${props => props.theme.colors?.headingColor};
      font-size: 12px;
    }
    p.bold {
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (min-width: 1300px) {
    width: 50%;
    margin: 0;
  }
`

export const WrapperImage = styled.div`
  max-width: 45px;
  max-height: 45px;
  height: 45px;
  width: 45px;
  ${({ isSkeleton }) => !isSkeleton && css`
    border: 1px solid #E3E3E3;
    border-radius: 10px;
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 7.6px;
    object-fit: cover;
  }

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`
export const WrapperPagination = styled.div`
  margin: 10px 15px 0 15px;
`

export const UnreadMessageCounter = styled.div`
  position: absolute;
  top: 12px;
  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightPrimary};
  border-radius: 8px;
  font-size: 12px;
  height: 24px;
  color: ${props => props.theme.colors.primary};
  padding: 0 10px;
`
export const Timestatus = styled.div`
  position: absolute;
  width: 4px;
  height: 130px;
  border-radius: 20px;
  left: 10px;
  top: 17px;
  ${props => props.theme?.rtl && css`
    left: unset;
    right: 10px;
 `}
 ${({ timeState }) => timeState === 'in_time' && css`
    background-color: #00D27A;
  `}
  ${({ timeState }) => timeState === 'at_risk' && css`
    background-color: #FFC700;
  `}
  ${({ timeState }) => timeState === 'delayed' && css`
    background-color: #E63757;
  `}
`
