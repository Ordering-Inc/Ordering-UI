import React from 'react'
import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.headingColor};
  padding: ${({ padding }) => padding || '5px 10px'};
  white-space: nowrap;
  ${({ isPhoneView }) => isPhoneView && css`
    width: 100%;
  `}
  ${({ isRemove }) => isRemove && css`
    color: ${props => props.theme.colors.danger};
    padding: 3px 10px;
    font-size: 14px;
  `}

  img {
    width: 45px;
    border-radius: 8px;
  }

  ${({ small }) => small && css`
    padding: ${({ padding }) => padding || '5px 0px'};
    img {
      width: 25px;
    }
  `}

  @media (max-width: 576px) {
    padding: ${({ padding }) => padding || '5px 0px'};
    ${({ isFilterView }) => isFilterView && css`
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    `}
  }
`

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AdminNameContainer = styled.div`
  line-height: 1.3;
  color: #263238;
`

export const AdminName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: ${props => props.theme.colors.headingColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
  margin: 0px;

  ${({ small }) => small && css`
    font-weight: 400;
  `}

  @media (max-width: 576px) {
    max-width: 90px;
  }
`
export const AdminText = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};
  ${({ small }) => small && css`
    display: none;
  `}
`

export const WrapperAdminImage = styled.div`
  width: 45px;
  height: 45px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;

  svg {
    width: 100%;
    height: 100%;
    padding: 7px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  ${({ small }) => small && css`
    width: 24px;
    height: 24px;
    border-radius: 8px;
    svg {
      padding: 3px;
    }
  `}

  ${props => props.theme?.rtl ? css`
    margin-left: 8px;
  ` : css`
    margin-right: 8px;
  `}
`
const AdminImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 8px;
`
export const AdminImage = (props) => {
  return (
    <AdminImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </AdminImageStyled>
  )
}

export const PlaceholderTitle = styled(Option)`
  padding: 10px;

  ${({ isSingle }) => isSingle && css`
    padding: 0px;
    font-size: 14px;
  `}
`
