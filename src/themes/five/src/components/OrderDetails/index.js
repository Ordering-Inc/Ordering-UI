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
  useSession,
  GoogleMapsMap
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
import { SendGiftCard } from '../GiftCard/SendGiftCard'
import { Confirm } from '../Confirm'
import { OrderEta } from './OrderEta'

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

import { getGoogleMapImage, getOrderStatuPickUp, getOrderStatus } from '../../../../../utils'
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
  const [{ token }] = useSession()
  const [events] = useEvent()
  const [{ parsePrice, parseDate }] = useUtils()
  const [, { deleteUserCustomer }] = useCustomer()
  const [{ carts }, { refreshOrderOptions }] = useOrder()
  const [openMessages, setOpenMessages] = useState({ business: false, driver: false })
  const [isOrderReviewed, setIsOrderReviewed] = useState(false)
  const [isProductReviewed, setIsProductReviewed] = useState(false)
  const [isDriverReviewed, setIsDriverReviewed] = useState(false)
  const [isProReviewed, setIsProReviewed] = useState(false)
  const [isGiftCardSent, setIsGiftCardSent] = useState(false)
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
  const activeStatus = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23]
  const googleMapsApiKey = configs?.google_maps_api_key?.value
  const enabledPoweredByOrdering = configs?.powered_by_ordering_module?.value

  const hideOrderActions = order?.delivery_type === 1
  const isGiftCardOrder = !order?.business_id

  const isOriginalLayout = theme?.confirmation?.components?.layout?.type === 'original'
  const hideDeliveryType = theme?.confirmation?.components?.order?.components?.delivery_type?.hidden
  const hideDeliveryDate = theme?.confirmation?.components?.order?.components?.date?.hidden
  const hideDeliveryProgress = theme?.confirmation?.components?.order?.components?.progress?.hidden
  const hideBusinessPhone = theme?.confirmation?.components?.business?.components?.phone?.hidden
  const hideBusinessMessages = theme?.confirmation?.components?.business?.components?.messages?.hidden
  const hideBusinessEmail = theme?.confirmation?.components?.business?.components?.email?.hidden
  const hideBusinessAddress = theme?.confirmation?.components?.business?.components?.address?.hidden
  const hideBusinessMap = theme?.confirmation?.components?.business?.components?.map?.hidden
  const hideDriverName = theme?.confirmation?.components?.driver?.components?.name?.hidden
  const hideDriverPhone = theme?.confirmation?.components?.driver?.components?.phone?.hidden
  const hideDriverMessages = theme?.confirmation?.components?.driver?.components?.messages?.hidden
  const hideDriverEmail = theme?.confirmation?.components?.driver?.components?.email?.hidden
  const hideDriverPhoto = theme?.confirmation?.components?.driver?.components?.photo?.hidden
  const hideCustomerPhone = theme?.confirmation?.components?.customer?.components?.phone?.hidden
  const hideCustomerAddress = theme?.confirmation?.components?.customer?.components?.address?.hidden
  const hideCustomerEmail = theme?.confirmation?.components?.customer?.components?.email?.hidden
  const hideCustomerPhoto = theme?.confirmation?.components?.customer?.components?.photo?.hidden

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
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.general?.driverPng },
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
                showArrowIcon
              />
            ))}
          </ProfessionalBlock>
        ))}
        {order?.products.filter(product => !product?.calendar_event).map(product => (
          <ProductItemAccordion
            key={product.id}
            product={product}
            showArrowIcon
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
    props.openBChatByParam && setOpenMessages({
      ...openMessages,
      business: !!props.openBChatByParam
    })
  }, [order])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const disableLeftButton = [1, 2, 5, 15, 16, 17, 20, 21]
  const disableRightButton = [1, 2, 5, 15, 16, 17, 21]

  const progressBarObjt = order?.delivery_type && order?.delivery_type === 2 ? getOrderStatuPickUp : getOrderStatus

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
                      {t('ORDERING_CO', 'Ordering.co')}
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
                {!hideDeliveryType && (
                  <p className='types'>
                    {isService
                      ? t('SERVICE_AT_HOME', 'Service at home')
                      : orderTypes?.find(type => order?.delivery_type === type?.value)?.text}
                  </p>
                )}
                {!hideDeliveryDate && (
                  <p className='date'>
                    {activeStatus.includes(order?.status) ? (
                      <OrderEta order={order} outputFormat={`YYYY-MM-DD ${configs?.general_hour_format?.value}`} />
                    ) : (
                      parseDate(order?.reporting_data?.at[`status:${order.status}`], { outputFormat: `YYYY-MM-DD ${configs?.general_hour_format?.value}` })
                    )}
                  </p>
                )}
                {(acceptedStatus.includes(parseInt(order?.status, 10)) ||
                  !isOriginalLayout
                ) && !isGiftCardOrder &&
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
              {!hideDeliveryProgress && !isGiftCardOrder && (
                <>
                  <StatusBar percentage={progressBarObjt(order?.status)?.percentage} />
                  <OrderStatusAndLinkContainer>
                    <p className='order-status'>{progressBarObjt(order?.status)?.value}</p>
                    <LinkWrapper>
                      <ReviewOrderLink
                        active
                        isMargin
                      >
                        <span onClick={() => setIsOrderHistory(true)}>{t('VIEW_DETAILS', 'View details')}</span>
                      </ReviewOrderLink>
                      {(!props.isCustomerMode || (props.isCustomerMode && !!props.hashKey && !token)) && (
                        <ReviewOrderLink
                          className='Review-order'
                          active={
                            [...acceptedStatus, 16].includes(parseInt(order?.status, 10)) &&
                            (!order?.review || (order.driver && !order?.user_review)) &&
                            (!isOrderReviewed || !isProductReviewed || (isService && !isProReviewed) || !isDriverReviewed)
                          }
                        >
                          <span onClick={handleOpenReview}>{t('REVIEW_ORDER', theme?.defaultLanguages?.REVIEW_ORDER || 'Review your Order')}</span>
                        </ReviewOrderLink>
                      )}
                    </LinkWrapper>
                  </OrderStatusAndLinkContainer>
                </>
              )}
            </OrderInfo>
            {!isGiftCardOrder && (
              <OrderBusiness>
                <BusinessExternalWrapper>
                  <BusinessWrapper
                    w='calc(100% - 20px)'
                    borderTop={!hideDeliveryType && placeSpotTypes.includes(order?.delivery_type)}
                  >
                    {isShowBusinessLogo && <img src={order?.business?.logo} />}
                    <BusinessInfo>
                      <h2>{order?.business?.name}</h2>
                      <ActionsSection
                        {...ActionsSectionProps}
                        actionType='business'
                        showPhone={!hideBusinessPhone}
                        showMessages={!hideBusinessMessages}
                      />
                      {!hideBusinessEmail && (
                        <p>{order?.business?.email}</p>
                      )}
                      {!hideBusinessPhone && (
                        <p>{order?.business?.cellphone}</p>
                      )}
                      {!hideBusinessAddress && (
                        <p>{order?.business?.address}</p>
                      )}
                      {order?.place?.name && (
                        <PlaceSpotSection>
                          <p>
                            {yourSpotString}: {order?.place?.name}
                          </p>
                        </PlaceSpotSection>
                      )}
                      {!hideOrderActions && (
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
                    {!hideOrderActions && (
                      <BtsOrderStatus>
                        <div>
                          <Button
                            style={{ fontSize: 14 }}
                            color={order?.status === 20 ? 'secundary' : 'primary'}
                            onClick={() => handleChangeOrderStatus(20)}
                            disabled={disableLeftButton.includes(order?.status)}
                          >
                            {progressBarObjt(20)?.value}
                          </Button>
                        </div>
                        <div>
                          <Button
                            style={{ fontSize: 14 }}
                            color={order?.status === 20 ? 'primary' : 'secundary'}
                            disabled={disableRightButton.includes(order?.status)}
                            onClick={() => handleChangeOrderStatus(21)}
                          >
                            {progressBarObjt(21)?.value}
                          </Button>
                        </div>
                      </BtsOrderStatus>
                    )}
                  </BusinessWrapper>

                  {!hideDeliveryType && placeSpotTypes.includes(order?.delivery_type) && (
                    <PlaceSpotWrapper>
                      <PlaceSpot
                        isInputMode
                        cart={order}
                        spotNumberDefault={order?.spot_number}
                        vehicleDefault={order?.vehicle}
                      />
                    </PlaceSpotWrapper>
                  )}
                </BusinessExternalWrapper>
                {googleMapsApiKey && !hideBusinessMap && (
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
            )}
            <OrderCustomer>
              <BusinessWrapper>
                {!hideCustomerPhoto && order?.customer?.photo && (
                  <img src={order?.customer?.photo} />
                )}
                <BusinessInfo>
                  <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                  {!hideCustomerEmail && (
                    <p>{order?.customer?.email}</p>
                  )}
                  {!hideCustomerPhone && (
                    <p>{order?.customer?.cellphone || order?.customer?.phone}</p>
                  )}
                  {!hideCustomerAddress && (
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
                      showPhone={!hideDriverPhone}
                      showMessages={!hideDriverMessages}
                    />
                  </SectionTitleContainer>
                  <WrapperDriver>
                    {!hideDriverPhoto && (
                      <div className='photo'>
                        {order?.driver?.photo ? (
                          <PhotoBlock src={order?.driver?.photo} />
                        ) : (
                          <RiUser2Fill />
                        )}
                      </div>
                    )}
                    <div>
                      {!hideDriverName && (
                        <h2>{order?.driver?.name} {order?.driver?.lastname}</h2>
                      )}
                      {!hideDriverEmail && (
                        <p>{order?.driver?.email}</p>
                      )}
                      {!hideDriverPhone && (
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
            {(order?.delivery_type === 1 || order?.comment) && !isGiftCardOrder && (
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

          {isGiftCardOrder && order?.products[0]?.gift_card?.status === 'pending' && !isGiftCardSent && (
            <SendGiftCard
              giftCardId={order?.products[0]?.gift_card?.id}
              setIsGiftCardSent={setIsGiftCardSent}
            />
          )}
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
                reviewStatus?.order ? (
                  <ReviewOrder
                    order={order}
                    hashKey={props.hashKey}
                    closeReviewOrder={closeReviewOrder}
                    setIsReviewed={setIsOrderReviewed}
                  />)
                  : (reviewStatus?.product ? (
                    <ReviewProduct
                      order={order}
                      hashKey={props.hashKey}
                      closeReviewProduct={closeReviewProduct}
                      setIsProductReviewed={setIsProductReviewed}
                    />)
                    : (reviewStatus?.professional ? (
                      <ReviewProfessional
                        order={order}
                        hashKey={props.hashKey}
                        closeReviewProfessional={handleCloseReivew}
                        setIsProfessionalReviewed={setIsProReviewed}
                        isProfessional
                      />)
                      : (
                        <ReviewDriver
                          order={order}
                          hashKey={props.hashKey}
                          closeReviewDriver={handleCloseReivew}
                          setIsDriverReviewed={setIsDriverReviewed}
                        />
                      )))
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
        hideViaText={props.hideViaText}
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
