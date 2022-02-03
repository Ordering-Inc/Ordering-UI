import React, { useEffect } from 'react';
import { CartStoresListing as StoresListingController, useOrder } from 'ordering-components'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { BusinessController } from '../BusinessController'

import {
  Container,
  ItemListing,
} from './styles';

const CartStoresListingUI = (props) => {
  const {
    businessIdSelect,
    storesState,
    changeStoreState,
    handleCartStoreChange,
    onClose
  } = props

  const [orderState] = useOrder()
  const businessId = Object.values(orderState.carts).find(_cart => _cart?.uuid === props.cartuuid)?.business_id ?? {}

  useEffect(() => {
    if (!changeStoreState.loading && businessIdSelect === businessId) {
      onClose && onClose()
    }
  }, [businessId, changeStoreState]);

  return(
    <Container>
      {!storesState?.loading && !storesState?.error && storesState?.result && (
        <>
          {storesState?.result?.length > 0 ? (
            <ItemListing>
              {storesState?.result.map(store => (
                <BusinessController
                  key={store.id}
                  isCartStore
                  className='card'
                  business={store}
                  isSkeleton={changeStoreState.loading && businessIdSelect === store.id}
                  orderType={orderState?.options?.type}
                  disabledStoreBtn={(changeStoreState?.result?.business_id ?? businessId) === store.id}
                  handleCartStoreClick={handleCartStoreChange}
                />
              ))}
            </ItemListing>
          ) : (
            <NotFoundSource
              content={t('NOT_FOUND_CART_STORES', 'No businesses to show at this time.')}
            />
          )}
        </>
      )}

      {storesState?.loading && (
        <ItemListing>
          {[...Array(4).keys()].map(i => (
            <BusinessController
              key={i}
              className='card'
              business={{}}
              isSkeleton
              orderType={orderState?.options?.type}
            />
          ))}
        </ItemListing>
      )}

      {!storesState?.loading && storesState?.error && (
        <NotFoundSource
          content={t('ERROR_NOT_FOUND_CART_STORES', 'Sorry, an error has occurred')}
        />
      )}
    </Container>
  )
}

export const CartStoresListing = (props) => {
  const storeProps = {
    ...props,
    UIComponent: CartStoresListingUI
  }

  return (
    <StoresListingController {...storeProps} />
  )
}
