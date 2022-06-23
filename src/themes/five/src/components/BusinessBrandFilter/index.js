import React from 'react'
import { Check2 } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, BusinessBrandFilter as BusinessBrandFilterController } from 'ordering-components'

import {
  Container,
  BrandListWrapper,
  BrandItem,
  NoResult
} from './styles'

const BusinessBrandFilterUI = (props) => {
  const {
    brandList,
    filters,
    handleChangeFilters
  } = props

  const [, t] = useLanguage()

  const handleChangeBrandFilter = (brandId) => {
    let franchiseIds = [...filters?.franchise_ids]
    if (filters?.franchise_ids?.includes(brandId)) franchiseIds = filters?.franchise_ids?.filter(item => item !== brandId)
    else franchiseIds.push(brandId)
    handleChangeFilters && handleChangeFilters('franchise_ids', franchiseIds)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <h3>{t('BRANDS', 'Brands')}</h3>
        <BrandListWrapper>
          {brandList?.loading && (
            <>
              {[...Array(5).keys()].map(index => (
                <BrandItem key={index}>
                  <Skeleton width={120} height={15} />
                  <Skeleton width={16} height={16} />
                </BrandItem>
              ))}
            </>
          )}
          {!brandList?.loading && brandList?.brands.map((brand, i) => (
            <BrandItem key={i} onClick={() => handleChangeBrandFilter(brand?.id)}>
              <span>{brand?.name}</span>
              {filters?.franchise_ids?.includes(brand?.id) && <Check2 />}
            </BrandItem>
          ))}
          {!brandList?.loading && (brandList?.brands?.length === 0) && (
            <NoResult>{t('NO_RESULTS_FOUND', 'Sorry, no results found')}</NoResult>
          )}
        </BrandListWrapper>
      </Container>
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}

export const BusinessBrandFilter = (props) => {
  const businessBrandFilterProps = {
    ...props,
    UIComponent: BusinessBrandFilterUI,
    isEnabledList: true
  }
  return <BusinessBrandFilterController {...businessBrandFilterProps} />
}
