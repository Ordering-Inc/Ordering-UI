import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { StarFill, Facebook, Tiktok, Pinterest, Whatsapp, Instagram, Snapchat } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { BusinessInformation } from '../BusinessInformation'
import { BusinessReviews } from '../BusinessReviews'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

import { useUtils, useOrder, useLanguage, useConfig, useOrderingTheme } from 'ordering-components'

import { convertHoursToMinutes, shape } from '../../../../../utils'
import { Select } from '../../styles/Select'
import { MomentContent } from '../MomentContent'
import CgSearch from '@meronex/icons/cg/CgSearch'
import { SearchProducts } from '../SearchProducts'

import {
  BusinessContainer,
  BusinessContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  BusinessInfoContainer,
  BusinessInfoContent,
  WrapperSearch,
  BusinessDetail,
  BusinessMoreDetail,
  TitleWrapper,
  RibbonBox,
  SearchIconWrapper,
  SearchComponentContainer,
  SocialList,
  IconWrapper
} from './styles'
import { BusinessPreorder } from '../BusinessPreorder'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'

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
    isCustomerMode
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [orderingTheme] = useOrderingTheme()
  const [isBusinessReviews, setIsBusinessReviews] = useState(false)
  const [isPreOrder, setIsPreOrder] = useState(false)
  const [openSearchProducts, setOpenSearchProducts] = useState(false)
  const [{ configs }] = useConfig()
  const isPreOrderSetting = configs?.preorder_status_enabled?.value === '1'

  const showLogo = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.logo?.hidden
  const showDeliveryFee = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.fee?.hidden
  const showTime = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.time?.hidden
  const showBusinessInfo = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.business_info?.hidden
  const showReviews = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.reviews?.hidden
  const showDistance = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.distance?.hidden
  const showSort = !orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.sort?.hidden
  const isInfoShrunken = orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.layout?.position === 'shrunken'
  const showCity = orderingTheme?.theme?.business_view?.components?.header?.components?.business?.components?.city?.hidden

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

  const SearchComponent = () => {
    return (
      <WrapperSearch>
        <SearchIconWrapper
          onClick={() => setOpenSearchProducts(true)}
        >
          <CgSearch />
        </SearchIconWrapper>
        {showSort && (
          <Select
            notAsync
            notReload
            options={sortByOptions}
            defaultValue={sortByValue}
            onChange={(val) => handleChangeSortBy && handleChangeSortBy(val)}
          />
        )}
      </WrapperSearch>
    )
  }

  const SocialNetWork = ({ url, icon }) => {
    return (
      <IconWrapper href={url} target='_blank' rel='noopener noreferrer'>
        {icon}
      </IconWrapper>
    )
  }

  const BusinessInfoComponent = () => {
    return (
      <BusinessInfoContainer>
        <BusinessInfoContent>
          <BusinessInfo className='info'>
            <BusinessInfoItem isInfoShrunken={isInfoShrunken}>
              {!loading ? (
                <TitleWrapper>
                  <h2 className='bold'>{business?.name}</h2>
                  {business?.ribbon?.enabled && (
                    <RibbonBox
                      bgColor={business?.ribbon?.color}
                      isRoundRect={business?.ribbon?.shape === shape?.rectangleRound}
                      isCapsule={business?.ribbon?.shape === shape?.capsuleShape}
                    >
                      {business?.ribbon?.text}
                    </RibbonBox>
                  )}
                </TitleWrapper>
              ) : (
                <Skeleton width={isCustomerMode ? 100 : 150} height={isCustomerMode ? 35 : 'auto'} />
              )}
              {showBusinessInfo && (
                <>
                  {!loading ? (
                    <p className='type'>{getBusinessType()}</p>
                  ) : (
                    <Skeleton width={isCustomerMode ? 100 : 150} />
                  )}
                </>
              )}
              {showCity && business?.city?.name && (
                <>
                  {!loading ? (
                    <p className='type'>{business?.city?.name}</p>
                  ) : (
                    <Skeleton width={isCustomerMode ? 100 : 150} />
                  )}
                </>
              )}
              {!loading ? (
                <SocialList>
                  {business?.facebook_profile && (
                    <SocialNetWork
                      url={business?.facebook_profile}
                      icon={<Facebook />}
                    />
                  )}
                  {business?.instagram_profile && (
                    <SocialNetWork
                      url={business?.instagram_profile}
                      icon={<Instagram />}
                    />
                  )}
                  {business?.tiktok_profile && (
                    <SocialNetWork
                      url={business?.tiktok_profile}
                      icon={<Tiktok />}
                    />
                  )}
                  {business?.pinterest_profile && (
                    <SocialNetWork
                      url={business?.pinterest_profile}
                      icon={<Pinterest />}
                    />
                  )}
                  {business?.whatsapp_number && (
                    <SocialNetWork
                      url={business?.whatsapp_number}
                      icon={<Whatsapp />}
                    />
                  )}
                  {business?.snapchat_profile && (
                    <SocialNetWork
                      url={business?.snapchat_profile}
                      icon={<Snapchat />}
                    />
                  )}
                </SocialList>
              ) : (
                <SocialList>
                  {[...Array(5).keys()].map(i => (
                    <IconWrapper isSkeleton key={i}>
                      <Skeleton width={27} height={27} />
                    </IconWrapper>
                  ))}
                </SocialList>
              )}
              <BusinessDetail isSkeleton={loading}>
                {orderState?.options.type === 1 && showDeliveryFee && (
                  <>
                    {!loading ? (
                      <>
                        <h5>
                          <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                          {business && parsePrice(business?.delivery_price || 0)}
                        </h5>
                        <span className='dot'>•</span>
                      </>
                    ) : (
                      <Skeleton width={isCustomerMode ? 70 : 50} />
                    )}
                  </>
                )}
                {showTime && (
                  <>
                    {!loading ? (
                      <>
                        {orderState?.options?.type === 1 ? (
                          <>
                            <h5>
                              {convertHoursToMinutes(business?.delivery_time)}
                            </h5>
                            <span className='dot'>•</span>
                          </>
                        ) : (
                          <>
                            <h5>
                              {convertHoursToMinutes(business?.pickup_time)}
                            </h5>
                            <span className='dot'>•</span>
                          </>
                        )}
                      </>
                    ) : (
                      <Skeleton width={isCustomerMode ? 70 : 50} />
                    )}
                  </>
                )}
                {showDistance && (
                  <>
                    {!loading ? (
                      <>
                        <h5>
                          {parseDistance(business?.distance || 0)}
                        </h5>
                        <span className='dot'>•</span>
                      </>
                    ) : (
                      <Skeleton width={isCustomerMode ? 70 : 50} />
                    )}
                  </>
                )}
                {showReviews && (
                  <>
                    {!loading ? (
                      <div className='review'>
                        <StarFill className='start' />
                        <p>{business?.reviews?.total}</p>
                      </div>
                    ) : (
                      <Skeleton width={isCustomerMode ? 100 : 50} />
                    )}
                  </>
                )}
              </BusinessDetail>
              {
                !loading ? (
                  <div className='preorder-Reviews'>
                    {isPreOrderSetting && (
                      <>
                        <span onClick={() => setIsPreOrder(true)}>{t('PREORDER', 'Preorder')}</span>
                        <span className='dot'>•</span>
                      </>
                    )}
                    {business.reviews?.reviews && <span onClick={() => setIsBusinessReviews(true)}>{t('REVIEWS', 'Reviews')}</span>}
                  </div>
                ) : (
                  <Skeleton width={isCustomerMode ? 100 : 150} />
                )
              }
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessInfoContent>
        {(categoryState?.products?.length !== 0 || searchValue) && !errorQuantityProducts && !isInfoShrunken && (
          <SearchComponent />
        )}
      </BusinessInfoContainer>
    )
  }

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
            handleChangeSearch('')
            setOpenSearchProducts(false)
          }}
          business={businessState.business}
        />
      )}
      {!isInfoShrunken && (
        <BusinessInfoComponent />
      )}
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open}>
        {(!loading && !business?.open) && <h1>{t('CLOSED', 'Closed')}</h1>}
        {showLogo && (
          <BusinessContent>
            <WrapperBusinessLogo>
              {!loading ? (
                <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              ) : (
                <Skeleton height={70} width={70} />
              )}
            </WrapperBusinessLogo>
          </BusinessContent>
        )}
        {isInfoShrunken && (
          <BusinessInfoComponent />
        )}
        {!loading && (
          <>
            {isInfoShrunken && (
              <SearchComponentContainer>
                <SearchComponent />
              </SearchComponentContainer>
            )}
            <BusinessMoreDetail>
              <BsInfoCircle onClick={() => setOpenBusinessInformation(true)} />
            </BusinessMoreDetail>
          </>
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
