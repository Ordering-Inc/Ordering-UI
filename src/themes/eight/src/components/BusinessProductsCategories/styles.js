import React from 'react'
import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CategoryCard = styled.div`
  cursor: pointer;
  overflow: hidden;
  padding: 20px 35px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${props => props.theme.colors.grayMedium};
  > svg {
    color: ${props => props.theme.colors.secundary};
  }

  @media (min-width: 681px) {
    justify-content: center;
    padding: 20px;
    margin: 30px 20px;
    border: none;
    border-radius: 7.6px;
    flex-direction: column;
    width: calc(50% - 40px);
    background-color: ${props => props.theme.colors.third};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);

    > svg {
      display: none;
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
    }
  }

  @media (min-width: 993px) {
    margin: 40px;
    width: calc(33% - 80px);
  }

  @media (min-width: 1600px) {
    margin: 50px;
    width: calc(25% - 100px);
  }
`

export const WrapImage = styled.div`
  ${({ isSkeleton }) => isSkeleton && css`
    div {
      display: none;
    }
  `}
  @media (min-width: 681px) {
    padding: 0 20px;
    width: calc(100% - 40px);
    ${({ isSkeleton }) => isSkeleton && css`
      div {
        display: block;
      }
      span {
        display: none;
      }
    `}
  }
`

const CategoryImageStyled = styled.div`
  ${({ isSkeleton }) => isSkeleton && css`
    span {
      width: 100%;
      height: 100%;
    }
  `}
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-top: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-width: 90px;
  border-radius: 8px;
`

export const CategoryImage = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }

  return (
    <CategoryImageStyled {...props} style={style}>
      {props.children}
    </CategoryImageStyled>
  )
}

export const CategoryName = styled.div`
  color: ${props => props.theme.colors.grayDark};
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  padding: 0 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (min-width: 681px) {
    padding: 10px 0 0 0;
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.colors.secundary};
  }
`
export const WrapperNotFound = styled.div`
  height: 500px;
  width: 100%;
  > div{
    height: 100%;
  }
`
