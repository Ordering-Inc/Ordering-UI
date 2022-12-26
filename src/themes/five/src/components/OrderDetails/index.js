import React, { useState, useEffect, useMemo } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController,
  useEvent,
  useUtils,
  useConfig,
  useOrder,
  useCustomer,
  GoogleMapsMap,
  useOrderingTheme
} from 'ordering-components'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'

import { ProductItemAccordion } from '../ProductItemAccordion'
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../ReviewOrder'
import { ReviewProduct } from '../ReviewProduct'
import { ReviewDriver } from '../ReviewDriver'
import { ProductShare } from '../ProductShare'
import { OrderBillSection } from './OrderBillSection'
import { ActionsSection } from './ActionsSection'
import { OrderPreferencesSection } from './OrderPreferencesSections'
import { PlaceSpot } from '../PlaceSpot'
import { Confirm } from '../Confirm'

import {
  Container,
  WrapperContainer,
  Content,
  OrderBusiness,
  BusinessWrapper,
  BusinessInfo,
  OrderInfo,
  OrderIdSec,
  StatusBar,
  OrderCustomer,
  PhotoBlock,
  Map,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  SkeletonBlockWrapp,
  SkeletonBlock,
  ShareOrder,
  WrapperLeftContainer,
  WrapperRightContainer,
  ReviewOrderLink,
  SkeletonWrapper,
  ReviewWrapper,
  TitleContainer,
  ReOrder,
  SectionTitleContainer,
  OrderPreferences,
  HeaderTitle,
  PlaceSpotSection,
  BtsOrderStatus,
  OrderStatusAndLinkContainer,
  LinkWrapper,
  MapWrapper,
  BusinessExternalWrapper,
  DirectionButtonWrapper,
  ProfessionalWrapper,
  ProfessionalBlock,
  PlaceSpotWrapper,
  PoweredByOrdering
} from './styles'
import { useTheme } from 'styled-components'
import { TaxInformation } from '../TaxInformation'

import { getGoogleMapImage } from '../../../../../utils'
import { OrderHistory } from './OrderHistory'
import { ReviewProfessional } from '../ReviewProfessional'
import { OrderActionsSection } from './OrderActionsSection'
import { OrderHeaderInfoSection } from './OrderHeaderInfoSection'

const OrderDetailsUI = (props) => {
  const {
    userCustomerId,
    handleChangeOrderStatus,
    handleBusinessRedirect,
    handleOrderRedirect,
    googleMapsControls,
    driverLocation,
    urlToShare,
    messages,
    setMessages,
    readMessages,
    messagesReadList,
    reorderState,
    handleReorder,
    orderTypes,
    handleRemoveCart
  } = props
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()
  const [, { deleteUserCustomer }] = useCustomer()
  const [{ carts }, { refreshOrderOptions }] = useOrder()
  const [orderingTheme] = useOrderingTheme()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)
  const [isProReviewed, setIsProReviewed] = useState(false)
  const [unreadAlert, setUnreadAlert] = useState({ business: false, driver: false })
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewStatus, setReviewStatus] = useState({ order: false, product: false, driver: false, professional: false })
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })
  const [isService, setIsService] = useState(false)
  const [isOrderHistory, setIsOrderHistory] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isShowBusinessLogo, setIsShowBusinessLogo] = useState(true)
  const { order, loading, businessData, error } = props.order
  const yourSpotString = order?.delivery_type === 3 ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')
  const acceptedStatus = [1, 2, 5, 6, 10, 11, 12]
  const completedStatus = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]
  const placeSpotTypes = [3, 4, 5]
  const activeStatus = [0, 3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23]
  const googleMapsApiKey = configs?.google_maps_api_key?.value
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value

  const showOrderActions = order?.delivery_type !== 1

  const isOriginalLayout = orderingTheme?.theme?.confirmation?.components?.layout?.type === 'original'
  const showDeliveryType = !orderingTheme?.theme?.confirmation?.components?.order?.components?.delivery_type?.hidden
  const showDeliveryDate = !orderingTheme?.theme?.confirmation?.components?.order?.components?.date?.hidden
  const showDeliveryProgress = !orderingTheme?.theme?.confirmation?.components?.order?.components?.progress?.hidden
  const showBusinessPhone = !orderingTheme?.theme?.confirmation?.components?.business?.components?.phone?.hidden
  const showBusinessMessages = !orderingTheme?.theme?.confirmation?.components?.business?.components?.messages?.hidden
  const showBusinessEmail = !orderingTheme?.theme?.confirmation?.components?.business?.components?.email?.hidden
  const showBusinessAddress = !orderingTheme?.theme?.confirmation?.components?.business?.components?.address?.hidden
  const showBusinessMap = !orderingTheme?.theme?.confirmation?.components?.business?.components?.map?.hidden
  const showDriverName = !orderingTheme?.theme?.confirmation?.components?.driver?.components?.name?.hidden
  const showDriverPhone = !orderingTheme?.theme?.confirmation?.components?.driver?.components?.phone?.hidden
  const showDriverMessages = !orderingTheme?.theme?.confirmation?.components?.driver?.components?.messages?.hidden
  const showDriverEmail = !orderingTheme?.theme?.confirmation?.components?.driver?.components?.email?.hidden
  const showDriverPhoto = !orderingTheme?.theme?.confirmation?.components?.driver?.components?.photo?.hidden
  const showCustomerPhone = !orderingTheme?.theme?.confirmation?.components?.customer?.components?.phone?.hidden
  const showCustomerAddress = !orderingTheme?.theme?.confirmation?.components?.customer?.components?.address?.hidden
  const showCustomerEmail = !orderingTheme?.theme?.confirmation?.components?.customer?.components?.email?.hidden
  const showCustomerPhoto = !orderingTheme?.theme?.confirmation?.components?.customer?.components?.photo?.hidden

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending'), slug: 'PENDING', percentage: 25 },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed'), slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected'), slug: 'REJECTED', percentage: 0 },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business'), slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed'), slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business'), slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver'), slug: 'REJECTED_BY_DRIVER', percentage: 0 },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business'), slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver'), slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver'), slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver'), slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver'), slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver'), slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder'), slug: 'PREORDER', percentage: 0 },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready'), slug: 'ORDER_NOT_READY', percentage: 65 },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer'), slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', percentage: 100 },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer'), slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER', percentage: 0 },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer'), slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER', percentage: 0 },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', percentage: 55 },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer'), slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', percentage: 90 },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business'), slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', percentage: 90 },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business'), slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS', percentage: 95 },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver'), slug: 'ORDER_LOOKING_FOR_DRIVER', percentage: 35 },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way'), slug: 'ORDER_DRIVER_ON_WAY', percentage: 45 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const validTrackingStatus = [9, 19, 23]
  const mapConfigs = { zoom: 15 }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const unreadMessages = () => {
    const length = messages?.messages.length
    const unreadLength = order?.unread_count
    const unreadedMessages = messages.messages.slice(length - unreadLength, length)
    const business = unreadedMessages.some(message => message?.can_see?.includes(2))
    const driver = unreadedMessages.some(message => message?.can_see?.includes(4))
    setUnreadAlert({ business, driver })
  }

  const validateImage = (src) => {
    return new Promise((resolve, reject) => {
      if (!src || typeof src !== 'string') {
        resolve(false)
      }
      try {
        const image = new Image()
        image.src = src
        image.complete ? resolve(true) : resolve(false)
      } catch (err) {
        resolve(false)
      }
    })
  }

  const businessLogoUrlValidation = async () => {
    const isValidImage = await validateImage(order?.business?.logo)
    setIsShowBusinessLogo(isValidImage)
  }

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

  const handleOpenReview = () => {
    if (!order?.review && !isOrderReviewed) setReviewStatus({ order: true, product: false, driver: false, professional: false })
    else if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false, professional: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true, professional: false })
    else if (isService && !isProReviewed) setReviewStatus({ order: false, product: false, driver: false, professional: true })
    else {
      setIsReviewOpen(false)
      return
    }
    setIsReviewOpen(true)
  }

  const handleCloseReivew = () => {
    setReviewStatus({ order: false, product: false, driver: false, professional: false })
    setIsReviewOpen(false)
  }

  const closeReviewOrder = () => {
    if (!isProductReviewed) setReviewStatus({ order: false, product: true, driver: false, professional: false })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true, professional: false })
    else handleCloseReivew()
  }

  const closeReviewProduct = () => {
    if (isService && !isProReviewed) setReviewStatus({ order: false, product: false, driver: false, professional: true })
    else if (order?.driver && !order?.user_review && !isDriverReviewed) setReviewStatus({ order: false, product: false, driver: true, professional: false })
    else {
      setIsDriverReviewed(true)
      handleCloseReivew()
    }
  }

  const closeOrderModal = (e) => {
    const outsideModal = !window.document.getElementById('app-modals') ||
      !window.document.getElementById('app-modals').contains(e.target)
    if (outsideModal) {
      const _businessId = 'businessId:' + businessData?.id
      sessionStorage.setItem('adjust-cart-products', _businessId)
      handleBusinessRedirect(businessData?.slug)
    }
  }

  const handleStartNewOrder = (orderId) => {
    if (isOriginalLayout) {
      handleReorder(orderId)
      return
    }
    deleteUserCustomer(true)
    refreshOrderOptions()
    handleGoToPage({ page: 'home' })
  }

  const handleClickReorder = (order) => {
    if (carts[`businessId:${order?.business_id}`] && carts[`businessId:${order?.business_id}`]?.products?.length > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: async () => {
          handleRemoveCart()
          setConfirm({ ...confirm, open: false })
        }
      })
    } else {
      handleReorder(order.id)
    }
  }

  const handleOriginalReorder = () => {
    setConfirm({ ...confirm, open: false })
    handleReorder(order.id)
  }

  const getProductList = () => {
    const professionalList = order?.products.reduce((prev, current) => {
      const found = prev.find(item => item.id === current?.calendar_event?.professional?.id)
      if (found || !current?.calendar_event) {
        return prev
      }
      return [...prev, current?.calendar_event?.professional]
    }, [])

    return (
      <>
        {professionalList?.length > 0 && professionalList.map((professional, i) => (
          <ProfessionalBlock key={i}>
            <ProfessionalWrapper>
              {professional?.photo
                ? <img src={professional?.photo} alt='' />
                : <FaUserAlt />}
              <p>{professional?.name} {professional?.lastname}</p>
            </ProfessionalWrapper>
            {order?.products.filter(product => product?.calendar_event?.professional?.id === professional?.id).map(product => (
              <ProductItemAccordion
                key={product.id}
                product={product}
              />
            ))}
          </ProfessionalBlock>
        ))}
        {order?.products.filter(product => !product?.calendar_event).map(product => (
          <ProductItemAccordion
            key={product.id}
            product={product}
          />
        ))}
      </>
    )
  }

  const sortedProductList = useMemo(() => getProductList(), [order?.products])

  const ActionsSectionProps = {
    order,
    handleBusinessRedirect,
    businessData,
    unreadAlert,
    setOpenMessages,
    readMessages,
    setUnreadAlert
  }

  const driverLocationString = typeof order?.driver?.location?.location === 'string' && order?.driver?.location?.location?.split(',').map((l) => l.replace(/[^-.0-9]/g, ''))
  const parsedLocations = locations.map(location => typeof location?.location === 'string' ? {
    ...location,
    lat: parseFloat(location?.location?.split(',')[0].replace(/[^-.0-9]/g, '')),
    lng: parseFloat(location?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
  } : location)

  useEffect(() => {
    if (driverLocation) {
      parsedLocations[0] = {
        ...locations[0],
        ...driverLocation
      }
    }
  }, [driverLocation])

  useEffect(() => {
    unreadMessages()
  }, [messages?.messages])

  useEffect(() => {
    if (messagesReadList?.length) {
      openMessages.business ? setUnreadAlert({ ...unreadAlert, business: false }) : setUnreadAlert({ ...unreadAlert, driver: false })
    }
  }, [messagesReadList])

  useEffect(() => {
    if (reorderState?.error) {
      window.addEventListener('click', closeOrderModal)
      return () => {
        window.removeEventListener('click', closeOrderModal)
      }
    }

    if (!reorderState?.error && reorderState.loading === false && businessData?.id) {
      const _businessId = 'businessId:' + businessData?.id
      const products = carts?.[_businessId]?.products
      const available = products.every(product => product.valid === true)
      if (available && reorderState?.result?.uuid && (products?.length === order?.products.length)) {
        handleGoToPage({ page: 'checkout', params: { cartUuid: reorderState?.result.uuid } })
      } else {
        sessionStorage.setItem('adjust-cart-products', _businessId)
        products?.length !== order?.products.length && sessionStorage.setItem('already-removed', 'removed')
        handleBusinessRedirect(businessData?.slug)
      }
    }
  }, [reorderState])

  useEffect(() => {
    if (!order) return
    const _isService = order.products.some(product => product.type === 'service')
    setIsService(_isService)
    businessLogoUrlValidation()
  }, [order])

  const disableLeftButton = [1, 15, 20, 21]
  const disableRightButton = [1, 15, 21]

  return (
    <Container>
      {!loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && (
        <WrapperContainer>
          <WrapperLeftContainer>
            <OrderInfo>
              <TitleContainer>
                <OrderIdSec>{isService ? t('APPOINTMENT', 'Appointment') : t('ORDER', theme?.defaultLanguages?.ORDER || 'Order')} #{order?.id}</OrderIdSec>
                {enabledPoweredByOrdering && (
                  <PoweredByOrdering>
                    {t('POWERED_BY', 'Powered by')}
                    <a href='https://www.ordering.co'>
                      {' '}{t('ORDERING_CO', 'Ordering.co')}
                    </a>
                  </PoweredByOrdering>
                )}
                {parseInt(configs?.guest_uuid_access?.value, 10) && order?.hash_key && (
                  <Content className='order-content'>
                    <ShareOrder>
                      <div className='wrap'>
                        <ProductShare
                          defaultUrl={urlToShare(order?.hash_key)}
                          product={{
                            images: order.business?.logo,
                            name: order.business?.name
                          }}
                        />
                      </div>
                    </ShareOrder>
                  </Content>
                )}
                {order?.status !== 0 && order?.integration_id && (
                  <h1>{t('TICKET', 'Ticket')}: {order?.integration_id}</h1>
                )}
                {showDeliveryType && (
                  <p className='types'>
                    {isService
                      ? t('SERVICE_AT_HOME', 'Service at home')
                      : orderTypes?.find(type => order?.delivery_type === type?.value)?.text}
                  </p>
                )}
                {showDeliveryDate && (
                  <p className='date'>
                    {
                      activeStatus.includes(order?.status)
                        ? order?.eta_time + 'min'
                        : order?.delivery_datetime_utc
                          ? parseDate(order?.delivery_datetime_utc)
                          : parseDate(order?.delivery_datetime, { utc: false })
                    }
                  </p>
                )}
                {(acceptedStatus.includes(parseInt(order?.status, 10)) ||
                  !isOriginalLayout
                ) &&
                  (
                    <ReOrder>
                      <Button
                        color='primary'
                        outline
                        onClick={() => handleStartNewOrder(order.id)}
                        disabled={reorderState?.loading}
                      >
                        {t('START_NEW_ORDER', 'Start new order')}
                      </Button>
                      {completedStatus.includes(parseInt(order?.status, 10)) && (
                        <Button
                          color='primary'
                          outline
                          onClick={() => handleClickReorder(order)}
                          disabled={reorderState?.loading}
                        >
                          {reorderState?.loading
                            ? t('LOADING', 'Loading...')
                            : t('REORDER', 'Reorder')}
                        </Button>
                      )}
                    </ReOrder>
                  )}
              </TitleContainer>
              {showDeliveryProgress && (
                <>
                  <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                  <OrderStatusAndLinkContainer>
                    <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
                    <LinkWrapper>
                      <ReviewOrderLink
                        active
                        isMargin
                      >
                        <span onClick={() => setIsOrderHistory(true)}>{t('VIEW_DETAILS', 'View details')}</span>
                      </ReviewOrderLink>
                      <ReviewOrderLink
                        className='Review-order'
                        active={
                          acceptedStatus.includes(parseInt(order?.status, 10)) &&
                          (!order?.review || (order.driver && !order?.user_review)) &&
                          (!isOrderReviewed || !isProductReviewed || (isService && !isProReviewed) || !isDriverReviewed)
                        }
                      >
                        <span onClick={handleOpenReview}>{t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}</span>
                      </ReviewOrderLink>
                    </LinkWrapper>
                  </OrderStatusAndLinkContainer>
                </>
              )}
            </OrderInfo>
            <OrderBusiness>
              <BusinessExternalWrapper>
                <BusinessWrapper
                  w='calc(100% - 20px)'
                // borderBottom={showOrderActions}
                >
                  {isShowBusinessLogo && <img src={order?.business?.logo} />}
                  <BusinessInfo>
                    <h2>{order?.business?.name}</h2>
                    <ActionsSection
                      {...ActionsSectionProps}
                      actionType='business'
                      showPhone={showBusinessPhone}
                      showMessages={showBusinessMessages}
                    />
                    {showBusinessEmail && (
                      <p>{order?.business?.email}</p>
                    )}
                    {showBusinessPhone && (
                      <p>{order?.business?.cellphone}</p>
                    )}
                    {showBusinessAddress && (
                      <p>{order?.business?.address}</p>
                    )}
                    {order?.place?.name && (
                      <PlaceSpotSection>
                        <p>
                          {yourSpotString}: {order?.place?.name}
                        </p>
                      </PlaceSpotSection>
                    )}
                    {showOrderActions && (
                      <DirectionButtonWrapper>
                        <Button
                          color='primary'
                          onClick={() => window.open(`http://maps.google.com/?q=${order?.business?.address}`)}
                        >
                          {t('GET_DIRECTIONS', 'Get Directions')}
                        </Button>
                      </DirectionButtonWrapper>
                    )}
                  </BusinessInfo>
                </BusinessWrapper>

                {showDeliveryType && placeSpotTypes.includes(order?.delivery_type) && (
                  <PlaceSpotWrapper>
                    <PlaceSpot
                      isInputMode
                      cart={order}
                      spotNumberDefault={order?.spot_number}
                      vehicleDefault={order?.vehicle}
                    />
                  </PlaceSpotWrapper>
                )}

                {showOrderActions && (
                  <BusinessWrapper
                    w='calc(100% - 20px)'
                    borderTop
                  >
                    <BtsOrderStatus>
                      <div>
                        <Button
                          style={{ fontSize: 14 }}
                          color={order?.status === 20 ? 'secundary' : 'primary'}
                          onClick={() => handleChangeOrderStatus(20)}
                          disabled={disableLeftButton.includes(order?.status)}
                        >
                          {getOrderStatus(20)?.value}
                        </Button>
                      </div>
                      <div>
                        <Button
                          style={{ fontSize: 14 }}
                          color={order?.status === 20 ? 'primary' : 'secundary'}
                          disabled={disableRightButton.includes(order?.status)}
                          onClick={() => handleChangeOrderStatus(21)}
                        >
                          {getOrderStatus(21)?.value}
                        </Button>
                      </div>
                    </BtsOrderStatus>
                  </BusinessWrapper>
                )}
              </BusinessExternalWrapper>
              {googleMapsApiKey && showBusinessMap && (
                <MapWrapper>
                  <Map style={{ width: '100%' }}>
                    <img
                      src={getGoogleMapImage(order?.business?.location, googleMapsApiKey, mapConfigs)}
                      id='google-maps-image'
                      alt='google-maps-location'
                      width='100%'
                      height='100%'
                      loading='lazy'
                    />
                  </Map>
                </MapWrapper>
              )}
            </OrderBusiness>
            <OrderCustomer>
              <BusinessWrapper>
                {showCustomerPhoto && order?.customer?.photo && (
                  <img src={order?.customer?.photo} />
                )}
                <BusinessInfo>
                  <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                  {showCustomerEmail && (
                    <p>{order?.customer?.email}</p>
                  )}
                  {showCustomerPhone && (
                    <p>{order?.customer?.cellphone || order?.customer?.phone}</p>
                  )}
                  {showCustomerAddress && (
                    <p>{order?.customer?.address}</p>
                  )}
                </BusinessInfo>
              </BusinessWrapper>
            </OrderCustomer>
            {order?.driver && (
              <>
                <OrderDriver>
                  <SectionTitleContainer>
                    <h2>{t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}</h2>
                    <ActionsSection
                      {...ActionsSectionProps}
                      actionType='driver'
                      showPhone={showDriverPhone}
                      showMessages={showDriverMessages}
                    />
                  </SectionTitleContainer>
                  <WrapperDriver>
                    {showDriverPhoto && (
                      <div className='photo'>
                        {order?.driver?.photo ? (
                          <PhotoBlock src={order?.driver?.photo} />
                        ) : (
                          <RiUser2Fill />
                        )}
                      </div>
                    )}
                    <div>
                      {showDriverName && (
                        <h2>{order?.driver?.name} {order?.driver?.lastname}</h2>
                      )}
                      {showDriverEmail && (
                        <p>{order?.driver?.email}</p>
                      )}
                      {showDriverPhone && (
                        <p>{order?.driver?.cellphone || order?.driver?.phone}</p>
                      )}
                    </div>
                  </WrapperDriver>
                </OrderDriver>
                {
                  order?.driver?.location &&
                  validTrackingStatus.includes(parseInt(order?.status)) &&
                  (
                    <Map style={{ width: '100%' }}>
                      <GoogleMapsMap
                        location={typeof order?.driver?.location?.location === 'string'
                          ? {
                            lat: parseFloat(driverLocationString[0]),
                            lng: parseFloat(driverLocationString[1])
                          } : driverLocation ?? order?.driver?.location}
                        locations={parsedLocations}
                        mapControls={googleMapsControls}
                        apiKey={configs?.google_maps_api_key?.value}
                      />
                    </Map>
                  )
                }
              </>
            )}
            {(order?.delivery_type === 1 || order?.comment) && (
              <OrderPreferences>
                <OrderPreferencesSection
                  order={order}
                  placeSpotTypes={placeSpotTypes}
                />
              </OrderPreferences>
            )}
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <OrderProducts>
              <HeaderTitle>
                <OrderHeaderInfoSection isService={isService} />
                <OrderActionsSection
                  userCustomerId={userCustomerId}
                  isService={isService}
                  handleGoToPage={handleGoToPage}
                />
              </HeaderTitle>
              {sortedProductList}
              <OrderBillSection
                order={order}
                setOpenTaxModal={setOpenTaxModal}
              />
            </OrderProducts>
          </WrapperRightContainer>
        </WrapperContainer>
      )}

      {
        (openMessages.driver || openMessages.business) && (
          <Messages
            orderId={order?.id}
            order={order}
            business={openMessages.business}
            driver={openMessages.driver}
            messages={messages}
            setMessages={setMessages}
            readMessages={readMessages}
            onMessages={setOpenMessages}
            onClose={() => setOpenMessages({ driver: false, business: false })}
          />
        )
      }

      {loading && !error && (
        <SkeletonWrapper>
          <>
            <SkeletonBlockWrapp>
              <SkeletonBlock width={90}>
                <Skeleton height={40} width={300} />
                <Skeleton height={15} width={120} />
                <Skeleton height={15} />
                <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                <Skeleton height={60} width={900} />
                <Skeleton height={200} width={900} />
                <Skeleton height={20} width={900} />
                <Skeleton height={20} width={900} />
                <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                <Skeleton height={40} width={900} />
                <Skeleton height={20} width={900} />
                <Skeleton height={20} width={900} />
                <Skeleton height={20} width={900} />
                <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
              </SkeletonBlock>
            </SkeletonBlockWrapp>
          </>
        </SkeletonWrapper>
      )}

      {!loading && error && (
        error.includes('ERROR_ACCESS_EXPIRED') ? (
          <NotFoundSource
            content={t(error[0], 'Sorry, the order has expired.')}
          />
        ) : (
          <NotFoundSource
            content={t('NOT_FOUND_ORDER', theme?.defaultLanguages?.NOT_FOUND_ORDER || 'Sorry, we couldn\'t find the requested order.')}
            btnTitle={t('ORDERS_REDIRECT', theme?.defaultLanguages?.ORDERS_REDIRECT || 'Go to Orders')}
            onClickButton={handleOrderRedirect}
          />
        )
      )}
      {
        isReviewOpen && (
          <Modal
            open={isReviewOpen}
            onClose={handleCloseReivew}
            title={order
              ? (reviewStatus?.order
                ? t('REVIEW_ORDER', 'Review order')
                : (reviewStatus?.product
                  ? t('REVIEW_PRODUCT', 'Review Product')
                  : (reviewStatus?.professional
                    ? t('PROFESSIONAL_REVIEW', 'Professional review')
                    : t('REVIEW_DRIVER', 'Review Driver'))))
              : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading...')}
          >
            <ReviewWrapper>
              {
                reviewStatus?.order
                  ? <ReviewOrder order={order} closeReviewOrder={closeReviewOrder} setIsReviewed={setIsOrderReviewed} />
                  : (reviewStatus?.product
                    ? <ReviewProduct order={order} closeReviewProduct={closeReviewProduct} setIsProductReviewed={setIsProductReviewed} />
                    : (reviewStatus?.professional
                      ? <ReviewProfessional order={order} closeReviewProfessional={handleCloseReivew} setIsProfessionalReviewed={setIsProReviewed} isProfessional />
                      : <ReviewDriver order={order} closeReviewDriver={handleCloseReivew} setIsDriverReviewed={setIsDriverReviewed} />))
              }
            </ReviewWrapper>

          </Modal>
        )
      }
      <Modal
        width='70%'
        open={openTaxModal.open}
        padding='20px'
        closeOnBackdrop
        title={`${openTaxModal.data?.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ${openTaxModal.data?.rate_type !== 2
          ? `(${typeof openTaxModal.data?.rate === 'number'
            ? `${openTaxModal.data?.rate}%`
            : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`})`
          : ''}
          `}
        onClose={() => setOpenTaxModal({ open: false, tax: null, type: '' })}
        modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        <TaxInformation
          type={openTaxModal.type}
          data={openTaxModal.data}
          products={order?.products}
        />
      </Modal>
      <Modal
        open={isOrderHistory}
        width='760px'
        onClose={() => setIsOrderHistory(false)}
        title={t('DETAILS_OF_ORDER', 'Details of Order_NUMBER_').replace('_NUMBER_', ` # ${order?.id}`)}
      >
        <OrderHistory
          messages={messages}
          order={order}
          handleOpenReview={handleOpenReview}
          onClose={() => setIsOrderHistory(false)}
          enableReview={
            acceptedStatus.includes(parseInt(order?.status, 10)) &&
            (!order?.review || (order.driver && !order?.user_review)) &&
            (!isOrderReviewed || !isProductReviewed || !isDriverReviewed)
          }
        />
      </Modal>
      <Confirm
        title={t('ORDER', 'Order')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => handleOriginalReorder()}
        onCancel={() => handleOriginalReorder()}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const OrderDetails = (props) => {
  const [, t] = useLanguage()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru')
      }
    ],
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
