import React, { useState } from 'react'
import { useLanguage, OrderTypeControl, useOrder } from 'ordering-components'
import { useTheme } from 'styled-components'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import { Modal } from '../Modal'
import {
  OrderTypeSelectorContainer,
  OrderTypeListItemContainer,
  OrderTypeTitle,
  OrderTypeDescription,
  OrderStartWrapper,
  OrderTypeListTitle,
  Logo,
  TypeContainer,
  ModalIcon,
  InputWrapper
} from './styles'
import { Input } from '../../../../../styles/Inputs'
import { Button } from '../../styles/Buttons'

export const OrderTypeSelectorContentUI = (props) => {
  const {
    handleChangeOrderType,
    orderTypes,
    onClose,
    logo
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const [orderTypeSelected, setOrderTypeSelected] = useState(null)
  const handleClickOrderType = ({ value, text }) => {
    onClose && onClose()
    handleChangeOrderType && handleChangeOrderType(value)
    setOrderTypeSelected({ open: true, type: text })
  }

  return (
    <div className='order-type' style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OrderTypeSelectorContainer>
        <Logo>
          <img
            src={logo}
          />
        </Logo>
        <OrderTypeListTitle>{t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')}</OrderTypeListTitle>
        {
          orderTypes && orderTypes.map((item, i) => (
            <OrderTypeListItemContainer
              key={i}
              bgimage={item?.image}
              onClick={() => handleClickOrderType({ value: item.value, text: item.text })}
              active={orderStatus?.options?.type === item?.value}
            >
              <OrderTypeTitle>{item.text}</OrderTypeTitle>
              <OrderTypeDescription>{item.description}</OrderTypeDescription>
              <OrderStartWrapper>
                <span>{t('START_MY_ORDER', 'start my order')}</span>
                <BsArrowRight />
              </OrderStartWrapper>
            </OrderTypeListItemContainer>
          ))
        }
        <Modal
          open={orderTypeSelected?.open}
          onClose={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })}
          hideCloseDefault
        >
          <ModalIcon>
            <BsArrowLeft size={20} onClick={() => setOrderTypeSelected({ ...orderTypeSelected, open: false })} />
          </ModalIcon>
          <TypeContainer>
            <h1>{orderTypeSelected?.type}</h1>
            <label>{t('TABLE_NUMBER', 'Table number')}</label>
            <InputWrapper>
              <Input placeholder='#' />
            </InputWrapper>
          </TypeContainer>
          <Button color='primary' style={{ width: '100%' }}>
            {t('CONTINUE', 'Continue')}
          </Button>
        </Modal>
      </OrderTypeSelectorContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

export const OrderTypeSelectorContent = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorContentUI,
    logo: props.logo || theme.images?.dummies?.businessLogo,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.delivery
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.pickUp
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.eatIn
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.curbside
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru'),
        description: 'Lorem ipsum dolor sit amet, consectetur.',
        image: theme.images?.deliveryTypes?.driveThru
      }
    ]
  }

  return <OrderTypeControl {...orderTypeProps} />
}
