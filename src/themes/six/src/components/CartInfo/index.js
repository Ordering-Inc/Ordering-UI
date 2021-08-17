import React from 'react'
import { useTheme } from 'styled-components'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import AiOutlineLeft from '@meronex/icons/ai/AiOutlineLeft'
import { OrderTypeControl, useLanguage, useOrder, useUtils, useConfig, useEvent } from 'ordering-components'

import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container,
  BackHeader,
  Logo,
  HeaderText,
  OrderReview,
  PreTime,
  SubTitle,
  PickStore,
  InfoWrapper,
  DeliveryItems,
  Item
} from './styles'

export const CartInfo = (props) => {
  const {
    handleGoBackPage,
    cart,
    businessName,
    isCheckout
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ options }] = useOrder()
  const [{ parseDate }] = useUtils()
  const [{ configs }] = useConfig()
  const [events] = useEvent()
  const windowSize = useWindowSize()

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  const OrderTypeSelectorUI = (props) => {
    const {
      handleChangeOrderType,
      typeSelected,
      orderTypes
    } = props
    return (
      <DeliveryItems>
        {
          orderTypes && orderTypes.map((orderType) => {
            return (
              <Item key={orderType.value} onClick={() => handleChangeOrderType(orderType.value)} className={typeSelected === orderType.value ? 'active' : ''}>
                {orderType.itemcontent}
              </Item>
            )
          })
        }
      </DeliveryItems>
    )
  }

  const OrderTypeSelector = (props) => {
    const [, t] = useLanguage()
    const orderTypeProps = {
      ...props,
      UIComponent: OrderTypeSelectorUI,
      orderTypes: props.orderTypes || [
        {
          value: 1,
          itemcontent: <>{t('DELIVERY', 'Delivery')}</>
        },
        {
          value: 2,
          itemcontent: <>{t('PICKUP', 'Pickup')}</>
        },
        {
          value: 3,
          itemcontent: <>{t('EAT_IN', 'Eat in')}</>
        },
        {
          value: 4,
          itemcontent: <>{t('DRIVE_THRU', 'Drive thru')}</>
        },
        {
          value: 5,
          itemcontent: <>{t('CURBSIDE', 'Curbside')}</>
        }
      ]
    }
    return <OrderTypeControl {...orderTypeProps} />
  }

  return (
    <Container className='test-mark'>
      <BackHeader isCheckout={isCheckout}>
        {windowSize.width > 768 && (
          <Logo>
            <img alt='Isotype' width='35px' height='45px' src={theme?.images?.logos?.isotype} loading='lazy' />
          </Logo>
        )}

        <HeaderText onClick={handleGoBackPage}>
          <AiOutlineLeft />
          {windowSize.width > 768 && (
            <>
              {t('BACK_STORE', 'Back to Store')}
            </>
          )}
        </HeaderText>
      </BackHeader>
      <InfoWrapper>
        <OrderReview>{t('REVIEW_ORDER', 'Review Order')} &nbsp; ({' '}{cart?.products?.length}{' '})</OrderReview>
        <PreTime>
          {t('PREP_TIME', 'Prep time')}{' '}{':'}{' '}
          {options?.moment
            ? parseDate(options?.moment, { outputFormat: configs?.dates_moment_format?.value })
            : t('ASAP_ABBREVIATION', 'ASAP')}
        </PreTime>
        <SubTitle>{t('STORE', 'Store')}{':'}</SubTitle>
        <PickStore onClick={() => handleGoToPage({ page: 'search' })}>
          {!businessName ? (
            <>{t('SELECT_STORE', 'Select Store')}</>
          ) : (
            <>{businessName}</>
          )}
          <EnChevronDown />
        </PickStore>
        <SubTitle>{t('DELIVERY_TYPE', 'Delivery type')}{':'}</SubTitle>
        <div className='order-types'>
          <OrderTypeSelector />
        </div>
      </InfoWrapper>
    </Container>
  )
}
