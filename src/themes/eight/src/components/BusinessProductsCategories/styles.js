import React from 'react'
import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CategoryCard = styled.div`
  cursor: pointer;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.third};
  margin: 30px 20px;

  width: calc(100% - 40px);

  @media (min-width: 681px) {
    width: calc(50% - 40px);
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

const CategoryImageStyled = styled.div`
  display: flex;
  width: 100%;
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
  color: ${props => props.theme.colors.secundary};
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  bottom: 8%;
  text-align: center;
  padding: 0 10px;
`
