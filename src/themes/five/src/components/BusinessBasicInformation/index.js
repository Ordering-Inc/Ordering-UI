import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'
import { BusinessReviews } from '../BusinessReviews'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

import { useUtils, useLanguage } from 'ordering-components'

import { MomentContent } from '../MomentContent'
import { SearchProducts } from '../SearchProducts'
import { SearchProducts as SearchProductsStarbucks } from '../../../../six/src/components/BusinessProductsListing/SearchProducts'
import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessMoreDetail,
  SearchComponentContainer,
  BusinessInfoWrapper,
  WrapperFloatingSearch,
  BackButton
} from './styles'
import { BusinessPreorder } from '../BusinessPreorder'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { BusinessInfoComponent } from './BusinessInfoComponent'
import { SearchComponent } from './SearchComponent'
import { ArrowLeft } from 'react-bootstrap-icons'
import Button from '../../styles/Buttons'

dayjs.extend(timezone)
dayjs.extend(isBetween)

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState,
    setOpenBusinessInformation,
    openBusinessInformation,
    handleChangeSearch,
    searchValue,
    sortByOptions,
    sortByValue,
    handleChangeSortBy,
    categoryState,
    errorQuantityProducts,
    isCustomerMode,
    isCustomLayout,
    setCategoryClicked,
    categoryClicked
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const windowSize = useWindowSize()
  const [isBusinessReviews, setIsBusinessReviews] = useState(false)
  const [isPreOrder, setIsPreOrder] = useState(false)
  const [openSearchProducts, setOpenSearchProducts] = useState(false)

  const hideLogo = theme?.business_view?.components?.header?.components?.logo?.hidden
  const hideInfoIcon = theme?.business_view?.components?.header?.components?.business_info?.hidden
  const hideHeader = theme?.business_view?.components?.header?.hidden

  const isInfoShrunken = theme?.business_view?.components?.header?.components?.business?.components?.layout?.position === 'shrunken'
  const searchLayout = theme?.business_view?.components?.product_search?.components?.layout?.type
  const isChew = theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'

  const businessInfoComponentProps = {
    isChew,
    loading,
    business,
    isInfoShrunken,
    isCustomerMode,
    setIsPreOrder,
    setIsBusinessReviews,
    categoryState,
    searchValue,
    errorQuantityProducts,
    setOpenSearchProducts,
    handleChangeSortBy,
    sortByValue,
    sortByOptions,
    isCustomLayout
  }

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  useEffect(() => {
    if (businessState?.loading) return
    let timeout = null
    const currentDate = dayjs().tz(businessState?.business?.timezone)
    let lapse = null
    if (businessState?.business?.today?.enabled) {
      lapse = businessState?.business?.today?.lapses?.find(lapse => {
        const from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute)
        const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix()
      })
    }
    if (lapse) {
      const to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute)
      const timeToClose = (to.unix() - currentDate.unix()) * 1000
      timeout = setTimeout(() => {
        setIsPreOrder(true)
      }, timeToClose)
    }
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [businessState?.business])

  useEffect(() => {
    document.body.style.overflowY = openSearchProducts ? 'hidden' : 'auto'
  }, [openSearchProducts])

  const handleScroll = () => {
    const searchElement = document.getElementById('search-component')
    if (searchElement) {
      const limit = window.pageYOffset >= (isChew ? searchElement?.offsetTop + 40 : searchElement?.offsetTop) && window.pageYOffset > 0
      if (limit) {
        const classAdded = searchElement.classList.contains('fixed-search')
        !classAdded && searchElement.classList.add('fixed-search')
      } else {
        searchElement && searchElement.classList.remove('fixed-search')
      }
    }

    const businessNameElement = document.getElementById('business_name')
    if (businessNameElement) {
      const limit = window.pageYOffset >= (isChew && searchElement ? searchElement?.offsetTop + 40 : (businessNameElement?.offsetTop - 55)) && window.pageYOffset > 0
      if (limit) {
        const classAdded = businessNameElement.classList.contains('fixed-name')
        !classAdded && businessNameElement.classList.add('fixed-name')
      } else {
        businessNameElement && businessNameElement.classList.remove('fixed-name')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowSize?.width])

  useEffect(() => {
    window.scroll({
      top: window.scrollY - 1,
      left: 0
    })
  }, [sortByValue])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {openSearchProducts && (
        <SearchProducts
          {...props}
          onClose={() => {
            handleChangeSearch && handleChangeSearch('')
            setOpenSearchProducts(false)
            window.scroll({
              top: window.scrollY - 1,
              left: 0
            })
          }}
          business={businessState.business}
        />
      )}
      <BusinessInfoWrapper>
        {(!isInfoShrunken && !isChew) && (
          <BusinessInfoComponent
            {...businessInfoComponentProps}

          />
        )}
        {((business?.header || business?.logo || loading || isInfoShrunken) && !hideHeader) && (
          <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open} isChew={isChew}>
            {(!loading && !business?.open) && <h1>{t('CLOSED', 'Closed')}</h1>}
            {(!hideLogo && business?.logo && !isChew) && (
              <BusinessContent>
                <WrapperBusinessLogo>
                  {!loading && (
                    <BusinessLogo bgimage={optimizeImage(business?.logo, 'h_200,c_limit')} />
                  )}
                </WrapperBusinessLogo>
              </BusinessContent>
            )}
            {(isInfoShrunken || isChew) && (
              <BusinessInfoComponent
                {...businessInfoComponentProps}
              />
            )}
            {!loading && (
              <>
                {isInfoShrunken && (
                  <SearchComponentContainer>
                    <SearchComponent
                      setOpenSearchProducts={setOpenSearchProducts}
                      handleChangeSortBy={handleChangeSortBy}
                      sortByValue={sortByValue}
                      sortByOptions={sortByOptions}
                    />
                  </SearchComponentContainer>
                )}
                {searchLayout === 'floating' && (
                  <WrapperFloatingSearch>
                    <SearchProductsStarbucks
                      handleChangeSearch={handleChangeSearch}
                      searchValue={searchValue}
                      sortByOptions={sortByOptions}
                      sortByValue={sortByValue}
                      onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
                      businessState={businessState}
                      disablePadding
                    />
                  </WrapperFloatingSearch>
                )}
                {!hideInfoIcon  && (
                <BusinessMoreDetail>
                  <BsInfoCircle onClick={() => setOpenBusinessInformation(true)} />
                </BusinessMoreDetail>
                )}
              </>
            )}
          </BusinessContainer>
        )}
        {!business?.header && !business?.logo && !loading && !isInfoShrunken && !hideInfoIcon && (
          <BusinessMoreDetail position='relative'>
            <BsInfoCircle onClick={() => setOpenBusinessInformation(true)} />
          </BusinessMoreDetail>
        )}
      </BusinessInfoWrapper>
      {(windowSize.width <= 768 && categoryClicked) && (
        <BackButton>
          <Button
            color='primary'
            initialIcon
            onClick={() => setCategoryClicked(false)}
          >
            <ArrowLeft />
            <div>{t('GO_TO_ALL_CATEGORIES', 'Go to all categories')}</div>
          </Button>
        </BackButton>
      )}
      <Modal
        width='70%'
        open={openBusinessInformation}
        onClose={setOpenBusinessInformation}
        padding='0'
        hideCloseDefault
        isTransparent
      >
        <BusinessInformation
          business={business}
          getBusinessType={getBusinessType}
          optimizeImage={optimizeImage}
          onClose={setOpenBusinessInformation}
        />
      </Modal>
      <Modal
        width='70%'
        open={isBusinessReviews}
        onClose={() => setIsBusinessReviews(false)}
        padding='20px'
      >
        <BusinessReviews
          businessId={business.id}
          reviews={business.reviews?.reviews}
          businessName={business.name}
          stars={business.reviews?.total}
        />
      </Modal>
      <Modal
        open={isPreOrder}
        width={isCustomerMode ? '700px' : '760px'}
        onClose={() => setIsPreOrder(false)}
        padding={isCustomerMode && '20px'}
      >
        {isCustomerMode ? (
          <MomentContent onClose={() => setIsPreOrder(false)} />
        ) : (
          <BusinessPreorder
            business={business}
            handleClick={() => setIsPreOrder(false)}
          />
        )}
      </Modal>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
