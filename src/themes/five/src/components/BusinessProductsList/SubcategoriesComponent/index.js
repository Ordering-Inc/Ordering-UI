import { useLanguage } from 'ordering-components'
import React from 'react'
import { ContainerButton, SubCategoriesContainer, SubCategoriesInnerContainer } from '../styles'
import { AutoScroll } from '../../AutoScroll'
import { XLg as Close } from 'react-bootstrap-icons'
import { Button } from '../../../styles/Buttons'

const subcategoriesComponentPropsAreEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.category) === JSON.stringify(nextProps.category) &&
    JSON.stringify(prevProps.subcategoriesSelected) === JSON.stringify(nextProps.subcategoriesSelected)
}

export const SubcategoriesComponent = React.memo((props) => {
  const {
    category,
    subcategoriesSelected,
    onClickSubcategory
  } = props

  const [, t] = useLanguage()
  const allsubcategorySelected = !subcategoriesSelected?.some(subcategory => category?.id === subcategory?.parent_category_id)
  return (
    <SubCategoriesContainer>
      <SubCategoriesInnerContainer>
        <AutoScroll scrollId={`scroll_${category?.id}`}>
          <ContainerButton
            isSelected={allsubcategorySelected}
          >
            <Button
              onClick={() => onClickSubcategory(null, category)}
              color={allsubcategorySelected ? 'primary' : 'lightGray'}
            >
              {t('ALL', 'All')}
            </Button>
          </ContainerButton>
          {category?.subcategories?.map(subcategory => {
            const isSubcategorySelected = subcategoriesSelected?.find(_subcategory => _subcategory?.id === subcategory?.id)
            return (
              <ContainerButton
                key={subcategory?.id}
                isSelected={isSubcategorySelected}
              >
                <Button
                  onClick={() => onClickSubcategory(subcategory, category)}
                  color={isSubcategorySelected ? 'primary' : 'lightGray'}
                >
                  {subcategory?.name} {isSubcategorySelected && <Close />}
                </Button>
              </ContainerButton>
            )
          }
          )}
        </AutoScroll>
      </SubCategoriesInnerContainer>
    </SubCategoriesContainer>
  )
}, subcategoriesComponentPropsAreEqual)
