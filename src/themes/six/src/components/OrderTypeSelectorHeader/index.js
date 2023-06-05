import React, { useState } from 'react'
import { OrderTypeControl, useLanguage, useSession, useOrder } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import MdcTruckDeliveryOutline from '@meronex/icons/mdc/MdcTruckDeliveryOutline'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'

import { Modal } from '../Modal'
import { AddressList } from '../AddressList'
import { AddressForm } from '../AddressForm'

import {
  Option,
  OrderTypeWrapper,
  SelectedOption,
  ContentOption,
  OrderTypeBoxGroup,
  OrderItem,
  OrderItemWraper,
  ItemContent,
  OrderType,
  OrderDescription
} from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    handleChangeOrderType,
    typeSelected,
    defaultValue,
    configTypes,
    orderTypes,
    orderTypeStyle
  } = props
  const defaultType = configTypes?.includes(typeSelected) ? null : configTypes?.[0]
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const [orderState] = useOrder()

  const openModal = () => {
    setModalIsOpen(true)
  }

  return (
    <OrderTypeWrapper>
      {
        orderTypeStyle
          ? (
            <OrderTypeBoxGroup>
              {
                orderTypes && orderTypes.map((orderType) => {
                  return (
                    <OrderItem key={orderType.value} onClick={openModal}>
                      <OrderItemWraper>
                        {orderType.itemcontent}
                        {orderType.itemdescription}
                      </OrderItemWraper>
                    </OrderItem>
                  )
                })
              }
            </OrderTypeBoxGroup>)
          : (
            <Select
              options={
                configTypes
                  ? orderTypes.filter(type => configTypes?.includes(type.value))
                  : orderTypes
              }
              defaultValue={defaultType || defaultValue || typeSelected}
              onChange={(orderType) => handleChangeOrderType(orderType)}
            />)
      }
      {modalIsOpen && (
        <Modal
          title={t('ADDRESS', 'Address')}
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width='60%'
        >
          {(
            auth ? (
              <AddressList
                isModal
                changeOrderAddressWithDefault
                userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
                onCancel={() => setModalIsOpen(false)}
                onAccept={() => setModalIsOpen(false)}
              />
            ) : (
              <AddressForm
                useValidationFileds
                address={orderState?.options?.address || {}}
                onCancel={() => setModalIsOpen(false)}
                onSaveAddress={() => setModalIsOpen(false)}
              />
            )
          )}
        </Modal>
      )}
    </OrderTypeWrapper>
  )
}
export const OrderTypeSelectorHeader = (props) => {
  const [, t] = useLanguage()
  const orderTypeProps = {
    ...props,
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [
      {
        value: 1,
        content: <Option><MdcTruckDeliveryOutline /><ContentOption>{t('DELIVERY', 'Delivery')}</ContentOption></Option>,
        showOnSelected: <Option><MdcTruckDeliveryOutline /><SelectedOption>{t('DELIVERY', 'Delivery')}</SelectedOption></Option>,
        itemcontent: <OrderType><MdcTruckDeliveryOutline /><ItemContent>{t('DELIVERY', 'Delivery')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description')}</OrderDescription>
      },
      { 
        value: 2,
        content: <Option><FaTruckPickup /><ContentOption>{t('PICKUP', 'Pickup')}</ContentOption></Option>,
        showOnSelected: <Option><FaTruckPickup /><SelectedOption>{t('PICKUP', 'Pickup')}</SelectedOption></Option>,
        itemcontent: <OrderType><FaTruckPickup /><ItemContent>{t('PICKUP', 'Pickup')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')}</OrderDescription>
      },
      {
        value: 3,
        content: <Option><AiFillShop /><ContentOption>{t('EAT_IN', 'Eat in')}</ContentOption></Option>,
        showOnSelected: <Option><AiFillShop /><SelectedOption>{t('EAT_IN', 'Eat in')}</SelectedOption></Option>,
        itemcontent: <OrderType><AiFillShop /><ItemContent>{t('EAT_IN', 'Eat in')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')}</OrderDescription>
      },
      {
        value: 4,
        content: <Option><GiFoodTruck /><ContentOption>{t('CURBSIDE', 'Curbside')}</ContentOption></Option>,
        showOnSelected: <Option><GiFoodTruck /><SelectedOption>{t('CURBSIDE', 'Curbside')}</SelectedOption></Option>,
        itemcontent: <OrderType><FaCarSide /><ItemContent>{t('CURBSIDE', 'Curbside')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')}</OrderDescription>
      },
      {
        value: 5,
        content: <Option><FaCarSide /><ContentOption>{t('DRIVE_THRU', 'Drive thru')}</ContentOption></Option>,
        showOnSelected: <Option><FaCarSide /><SelectedOption>{t('DRIVE_THRU', 'Drive thru')}</SelectedOption></Option>,
        itemcontent: <OrderType><GiFoodTruck /><ItemContent>{t('DRIVE_THRU', 'Drive thru')}</ItemContent></OrderType>,
        itemdescription: <OrderDescription>{t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')}</OrderDescription>
      }
    ]
  }
  return <OrderTypeControl {...orderTypeProps} />
}
