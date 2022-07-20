import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import {
  OrderDetails as OrderDetailsController,
  useLanguage,
  useSession,
  useUtils,
  useEvent,
  useToast, ToastType,
  useApi
} from 'ordering-components'
import RiUser2Fill from '@meronex/icons/ri/RiUser2Fill'
import AiFillCheckCircle from '@meronex/icons/ai/AiFillCheckCircle'

import { Button } from '../../../../styles/Buttons'
import { Input } from '../../../../../../../styles/Inputs'
import { ProductItemAccordion } from '../../../ProductItemAccordion'
import { NotFoundSource } from '../../../NotFoundSource'
import { OrderBillSection } from '../../OrderBillSection'

import {
  Container,
  WrapperContainer,
  HeaderInfo,
  OrderBusiness,
  BusinessWrapper,
  BusinessInfo,
  OrderInfo,
  StatusBar,
  OrderCustomer,
  PhotoBlock,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  SkeletonBlockWrapp,
  SkeletonBlock,
  WrapperLeftContainer,
  WrapperRightContainer,
  SkeletonWrapper,
  TitleContainer,
  SectionTitleContainer,
  HeaderTitle,
  WrapperActions,
  WrapperActionsInput,
  ValidationText,
  WrapperActionsInputText,
  SentReceipt
} from './styles'

const _EMAIL = 'email'
const _SMS = 'sms'

const OrderDetailsUI = (props) => {
  const {
    handleOrderRedirect,
    driverLocation,
    orderTypes
  } = props

  const formMethods = useForm()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [ordering] = useApi()
  const [events] = useEvent()
  const [{ parseDate }] = useUtils()
  const [, { showToast }] = useToast()

  const optToSendReceipt = [
    {
      key: _EMAIL,
      label: t('EMAIL', 'Email'),
      value: _EMAIL,
      isDefault: true
    },
    {
      key: _SMS,
      label: t('SMS', 'SMS'),
      value: _SMS
    }
  ]

  const [isLoading, setIsLoading] = useState(false)
  const [emailReceipt, setEmailReceipt] = useState('')
  const [countReceipts, setCountReceipts] = useState(5)
  const optionToSendReceipt = optToSendReceipt.find(o => o?.isDefault)

  const { order, loading, error } = props.order

  const showDeliveryType = !theme?.layouts?.confirmation?.components?.delivery_type?.hidden
  const showDeliveryDate = !theme?.layouts?.confirmation?.components?.delivery_date?.hidden
  const showDeliveryProgress = !theme?.layouts?.confirmation?.components?.delivery_progress?.hidden
  const showBusinessPhone = !theme?.layouts?.confirmation?.components?.business_information?.components?.phone?.hidden
  const showBusinessEmail = !theme?.layouts?.confirmation?.components?.business_information?.components?.email?.hidden
  const showBusinessAddress = !theme?.layouts?.confirmation?.components?.business_information?.components?.address?.hidden
  const showDriverName = !theme?.layouts?.confirmation?.components?.driver_information?.components?.name?.hidden
  const showDriverPhone = !theme?.layouts?.confirmation?.components?.driver_information?.components?.phone?.hidden
  const showDriverEmail = !theme?.layouts?.confirmation?.components?.driver_information?.components?.email?.hidden
  const showDriverPhoto = !theme?.layouts?.confirmation?.components?.driver_information?.components?.photo?.hidden
  const showCustomerPhone = !theme?.layouts?.confirmation?.components?.customer_information?.components?.phone?.hidden
  const showCustomerAddress = !theme?.layouts?.confirmation?.components?.customer_information?.components?.address?.hidden
  const showCustomerEmail = !theme?.layouts?.confirmation?.components?.customer_information?.components?.email?.hidden

  const locations = [
    { ...order?.driver?.location, icon: order?.driver?.photo || theme.images?.dummies?.driverPhoto },
    { ...order?.business?.location, icon: order?.business?.logo || theme.images?.dummies?.businessLogo },
    { ...order?.customer?.location, icon: order?.customer?.photo || theme.images?.dummies?.customerPhoto }
  ]

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

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleChangeInputEmail = (e) => {
    formMethods.clearErrors(['email'])
    setEmailReceipt(e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
  }

  const onSubmit = async (values) => {
    if (countReceipts <= 0) {
      showToast(ToastType.Error, t('MAXIMUM_RECEIPTS_SEND_EXCEEDED', 'The maximum receipts sent has been exceeded'))
      return
    }

    setIsLoading(true)
    const body = {
      channel: optionToSendReceipt?.value === _EMAIL ? 1 : 2
    }
    if (order?.on_behalf_of) {
      body.name = order?.on_behalf_of
    }

    if (optionToSendReceipt?.value === _EMAIL) {
      body.email = values.email
    }

    try {
      const response = await fetch(`${ordering.root}/orders/${order.id}/receipt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
      })
      const { error, result } = await response.json()
      if (error) {
        showToast(ToastType.Error, result)
      } else {
        showToast(ToastType.Success, t('RECEIPT_SEND_SUCCESSFULLY', 'Receipt send successfully'))
        setCountReceipts(countReceipts - 1)
      }
      setIsLoading(false)
    } catch (error) {
      showToast(ToastType.Error, error.message)
      setIsLoading(false)
    }
  }

  const OrderHeaderInfoSection = () => {
    return (
      <HeaderInfo>
        <h1>
          {t('ORDER_MESSAGE_RECEIVED', theme?.defaultLanguages?.ORDER_MESSAGE_RECEIVED || 'Thank you for your order')}
        </h1>
        {order?.on_behalf_of && (
          <p className='behalf' style={{ marginTop: 0 }}>
            <strong>{t('ON_BEHALF', 'On behalf')}:</strong>{` ${order?.on_behalf_of}`}
          </p>
        )}
      </HeaderInfo>
    )
  }

  useEffect(() => {
    if (driverLocation) {
      locations[0] = driverLocation
    }
  }, [driverLocation])

  return (
    <Container>
      {!loading && order && Object.keys(order).length > 0 && (
        <WrapperContainer>
          <WrapperLeftContainer>
            <OrderInfo>
              <HeaderTitle>
                <OrderHeaderInfoSection />
              </HeaderTitle>
              <TitleContainer>
                <h2>{t('ORDER', theme?.defaultLanguages?.ORDER || 'Order')} #{order?.id}</h2>
                {order?.status !== 0 && order?.integration_id && (
                  <h1>{t('TICKET', 'Ticket')}: {order?.integration_id}</h1>
                )}
                {showDeliveryType && (
                  <p className='types'>
                    {orderTypes?.find(type => order?.delivery_type === type?.value)?.text}
                  </p>
                )}
                {showDeliveryDate && (
                  <p className='date'>
                    {
                      order?.delivery_datetime_utc
                        ? parseDate(order?.delivery_datetime_utc)
                        : parseDate(order?.delivery_datetime, { utc: false })
                    }
                  </p>
                )}
              </TitleContainer>
              {showDeliveryProgress && (
                <>
                  <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <p className='order-status'>{getOrderStatus(order?.status)?.value}</p>
                  </div>
                </>
              )}
            </OrderInfo>
            <OrderBusiness>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%'
                }}
              >
                <BusinessWrapper
                  w='calc(100% - 20px)'
                >
                  <img src={order?.business?.logo} />
                  <BusinessInfo>
                    <h2>{order?.business?.name}</h2>
                    {showBusinessEmail && (
                      <p>{order?.business?.email}</p>
                    )}
                    {showBusinessPhone && (
                      <p>{order?.business?.cellphone}</p>
                    )}
                    {showBusinessAddress && (
                      <p>{order?.business?.address}</p>
                    )}
                  </BusinessInfo>
                </BusinessWrapper>
              </div>
            </OrderBusiness>
            <OrderCustomer>
              <BusinessWrapper>
                {order?.customer?.photo && (
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
              <OrderDriver>
                <SectionTitleContainer>
                  <h2>{t('DRIVER', theme?.defaultLanguages?.DRIVER || 'Driver')}</h2>
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
            )}
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <OrderProducts>
              {order?.products?.length && order?.products.map(product => (
                <ProductItemAccordion
                  key={product.id}
                  product={product}
                />
              ))}
              <OrderBillSection order={order} />
            </OrderProducts>
          </WrapperRightContainer>

          <WrapperActions>
            <WrapperActionsInputText>
              <SentReceipt>
                <AiFillCheckCircle color={theme.colors.primary} size={28} />
                <p className='txt'>{t('SEND_RECEIPT', 'Send receipt')}</p>
              </SentReceipt>
              <p>
                {countReceipts}/5 {t('RECIPTS_REMAINING', 'Recipts remaining')}
              </p>
            </WrapperActionsInputText>

            <WrapperActionsInput>
              <Input
                type='email'
                name='email'
                aria-label='email'
                placeholder='yourname@mailhost.com'
                ref={formMethods.register({
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                onChange={handleChangeInputEmail}
                autoComplete='off'
                isError={formMethods.errors?.email}
              />
              <Button
                outline
                color='primary'
                disabled={!emailReceipt || isLoading}
                onClick={formMethods.handleSubmit(onSubmit)}
              >
                {t('SEND', 'Send')}
              </Button>
            </WrapperActionsInput>

            {formMethods.errors?.email?.type === 'pattern' && (
              <ValidationText>
                {t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))}
              </ValidationText>
            )}

            <Button
              color='primary'
              onClick={() => handleGoToPage({ page: 'home' })}
              className='close'
              style={{ marginTop: 30 }}
            >
              {`${t('YOU_ARE_DONE', theme?.defaultLanguages?.ORDER_YOU_ARE_DONE ?? 'You are done! Click to close')}!`}
            </Button>
          </WrapperActions>
        </WrapperContainer>
      )}

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
