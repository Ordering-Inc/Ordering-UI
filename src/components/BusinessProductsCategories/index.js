import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { CategoriesContainer } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'

const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected
  } = props

  const [width, setWidth] = useState(window.innerWidth)
  const [categoriesElement, setCategoriesElement] = useState([])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleScroll()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  useEffect(() => {
    const element = document.getElementById('categories')
    setCategoriesElement(element)
    handleScroll()
  }, [isSkeleton, categoriesElement])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const scrolling = (left) => {
    const element = document.getElementById('categories')
    if (left) {
      element.children[1].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    } else {
      element.children[categories.length].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const handleScroll = () => {
    const container = document.getElementById('container')
    const botonRight = document.getElementsByClassName('right')[0]
    const botonLeft = document.getElementsByClassName('left')[0]
    if (botonLeft || botonRight) {
      if (container.scrollLeft < 60) {
        botonLeft.classList.add('hidden')
      } else {
        botonLeft.classList.remove('hidden')
      }
      if (container.scrollLeft > categoriesElement.scrollWidth - container.offsetWidth - 30) {
        botonRight.classList.add('hidden')
      } else {
        botonRight.classList.remove('hidden')
      }
    }
  }

  return (
    <CategoriesContainer onScroll={() => handleScroll()} id='container'>
      {!isSkeleton ? (
        <Tabs variant='primary' id='categories'>
          {
            width < categoriesElement.offsetWidth + 50 ? <BsArrowLeft className='left' onClick={() => scrolling('left')} /> : ''
          }
          {categories && categories.length && categories.map(category => category.id !== 0 && ( // delete this validation when PR#59 is merged
            <Tab className='category' active={categorySelected?.id === category.id} key={category.name} onClick={() => handlerClickCategory(category)}>
              {category.name}
            </Tab>
          ))}
          {
            width < categoriesElement.offsetWidth + 50 ? <BsArrowRight className='right' onClick={() => scrolling()} /> : ''
          }
        </Tabs>
      ) : (
        <Tabs variant='primary'>
          {[...Array(4).keys()].map(i => (
            <Tab key={i}>
              <Skeleton width={100} />
            </Tab>
          ))}
        </Tabs>
      )}
    </CategoriesContainer>
  )
}

export const BusinessProductsCategories = (props) => {
  const businessProductsCategoriesProps = {
    ...props,
    UIComponent: BusinessProductsCategoriesUI
  }

  return (
    <ProductsCategories {...businessProductsCategoriesProps} />
  )
}
