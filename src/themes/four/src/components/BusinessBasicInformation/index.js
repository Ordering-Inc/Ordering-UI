import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FiClock from '@meronex/icons/fi/FiClock'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import MdcTruckDelivery from '@meronex/icons/mdc/MdcTruckDelivery'
import FaStar from '@meronex/icons/fa/FaStar'
import BsExclamationCircle from '@meronex/icons/bs/BsExclamationCircle'
import { useTheme } from 'styled-components'

import { Modal } from '../../../../../components/Modal'
import { BusinessInformation } from '../../../../../components/BusinessInformation'

import { useUtils, useOrder, useLanguage } from 'ordering-components'

import { convertHoursToMinutes } from '../../../../../utils'
import { SearchBar } from '../SearchBar'
import { Select } from '../../styles/Select'

import {
  BusinessContainer,
  BusinessInnerContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  WrapperSearch
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    categoryState,
    searchValue,
    sortByValue,
    businessState,
    errorQuantityProducts,
    setOpenBusinessInformation,
    openBusinessInformation,
    handleChangeSortBy,
    handleChangeSearch
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()

  const sortByOptions = [
    { value: null, content: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By'), showOnSelected: t('SORT_BY', theme?.defaultLanguages?.SORT_BY || 'Sort By') },
    { value: 'rank', content: t('RANK', theme?.defaultLanguages?.RANK || 'Rank'), showOnSelected: t('RANK', theme?.defaultLanguages?.RANK || 'Rank') },
    { value: 'a-z', content: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z'), showOnSelected: t('A_to_Z', theme?.defaultLanguages?.A_to_Z || 'A-Z') }
  ]

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open}>
        {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
        <BusinessInnerContainer>
          <WrapperBusinessLogo>
            {!loading ? (
              <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
            ) : (
              <Skeleton height={130} width={130} />
            )}
          </WrapperBusinessLogo>
          <BusinessContent>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {!loading ? (
                    <h2 className='bold'>{business?.name}</h2>
                  ) : (
                    <Skeleton width={100} />
                  )}
                </div>
                <div>
                  {!loading ? (
                    <p className='type'>{getBusinessType()}</p>
                  ) : (
                    <Skeleton width={100} />
                  )}
                  {!loading ? (
                    <p>
                      <FaStar className='start' />
                      {business?.reviews?.total}
                    </p>
                  ) : (
                    <Skeleton width={100} />
                  )}
                </div>
                <div>
                  {!loading ? (
                    <>
                      {orderState?.options?.type === 1 ? (
                        <h5>
                          <FiClock />
                          {convertHoursToMinutes(business?.delivery_time)}
                        </h5>
                      ) : (
                        <h5>
                          <FiClock />
                          {convertHoursToMinutes(business?.pickup_time)}
                        </h5>
                      )}
                    </>
                  ) : (
                    <Skeleton width={70} />
                  )}

                  {!loading ? (
                    <h5>
                      <FaMapMarkerAlt />
                      {parseDistance(business?.distance || 0)}
                    </h5>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {orderState?.options.type === 1 && (
                    <>
                      {!loading ? (
                        <h5>
                          <MdcTruckDelivery />
                          {business && parsePrice(business?.delivery_price || 0)}
                        </h5>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}

                  {!loading && (
                    <h5>
                      <BsExclamationCircle
                        className='popup'
                        onClick={() => setOpenBusinessInformation(true)}
                      />
                    </h5>
                  )}
                </div>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
          {!errorQuantityProducts && (
            <WrapperSearch>
              <SearchBar
                onSearch={handleChangeSearch}
                search={searchValue}
                placeholder={t('SEARCH_PRODUCTS', theme?.defaultLanguages?.SEARCH_PRODUCTS || 'Search Products')}
                lazyLoad={businessState?.business?.lazy_load_products_recommended}
              />
              <Select
                notAsync
                notReload
                options={sortByOptions}
                defaultValue={sortByValue}
                onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
              />
            </WrapperSearch>
          )}
        </BusinessInnerContainer>

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
      </BusinessContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
