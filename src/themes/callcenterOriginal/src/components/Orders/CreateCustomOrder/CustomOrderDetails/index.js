import React, { useState, useEffect, useMemo } from 'react'
import { useLanguage, useOrder, CustomOrderDetails as CustomOrderDetailsController } from 'ordering-components'
import { SelectCustomer } from '../SelectCustomer'
import { SelectBusinesses } from '../SelectBusinesses'
import { Map } from '../Map'
import { SelectProducts } from '../SelectProducts'
import { Checkout } from '../Checkout'
import { Alert } from '../../../Shared'

import {
  DetailsContainer
} from './styles'

const CustomOrderDetailsUI = (props) => {
  const {
    phone,
    onChangeNumber,
    customersPhones,
    setCustomersPhones,
    handleParentSidebarMove,
    businessList,
    getBusinessList,
    selectedUser,
    selectedBusiness,
    setSelectedUser,
    setSelectedBusiness,
    productList,
    getProducts,
    handeUpdateProductCart,
    cart,
    onClose,
    handleOpenCustomOrderDetail
  } = props

  const [, t] = useLanguage()
  const [, { changeAddress }] = useOrder()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const customerAddress = useMemo(() => {
    let address = null
    if (selectedUser?.addresses) {
      address = selectedUser.addresses.find(address => address?.default)
    }
    return address
  }, [selectedUser])

  useEffect(() => {
    if (!customerAddress?.id) return
    changeAddress(customerAddress.id)
  }, [customerAddress?.id])

  useEffect(() => {
    if (!customerAddress?.location) return
    getBusinessList(customerAddress.location)
  }, [customerAddress?.location])

  useEffect(() => {
    if (customersPhones?.error) {
      setAlertState({ open: true, content: [customersPhones?.error] })
    }
  }, [customersPhones?.error])

  return (
    <>
      <DetailsContainer className='custom-order-content'>
        <h2>{t('CREATE_CUSTOM_ORDER', 'Create custom order')}</h2>
        <SelectCustomer
          phone={phone}
          customersPhones={customersPhones}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          onChangeNumber={onChangeNumber}
          handleParentSidebarMove={handleParentSidebarMove}
          customerAddress={customerAddress}
        />
        {customerAddress?.location && (
          <>
            <SelectBusinesses
              businessList={businessList}
              selectedBusiness={selectedBusiness}
              setSelectedBusiness={setSelectedBusiness}
            />
            <Map
              customer={selectedUser}
              customerLocation={customerAddress?.location}
              business={selectedBusiness}
            />
            {selectedBusiness && (
              <SelectProducts
                productList={productList}
                getProducts={getProducts}
                handeUpdateProductCart={handeUpdateProductCart}
                cart={cart}
                business={selectedBusiness}
              />
            )}
            {cart && cart?.products.length > 0 && (
              <Checkout
                cartUuid={cart.uuid}
                onPlaceOrderClick={(data, paymethod, cart) => {
                  cart?.uuid && handleOpenCustomOrderDetail(cart.uuid)
                  onClose()
                }}
              />
            )}
          </>
        )}
        <Alert
          title={t('ERROR', 'Error')}
          open={alertState.open}
          content={alertState.content}
          onClose={handleCloseAlert}
          onAccept={handleCloseAlert}
        />
      </DetailsContainer>
    </>
  )
}

export const CustomOrderDetails = (props) => {
  const customOrderProps = {
    ...props,
    UIComponent: CustomOrderDetailsUI
  }
  return <CustomOrderDetailsController {...customOrderProps} />
}
