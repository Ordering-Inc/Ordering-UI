import React from 'react';
import {
  CartStoresListing as StoresListingController,
  useOrder,
  useLanguage
} from 'ordering-components'

import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { BusinessController } from '../BusinessController'
import { SearchBar } from '../SearchBar'

import {
  Container,
  ItemListing,
  WrapperSearch
} from './styles';

const CartStoresListingUI = (props) => {
  const {
    searchValue,
    businessIdSelect,
    storesState,
    changeStoreState,
    handleChangeSearch,
    handleCartStoreChange,
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const businessId = Object.values(orderState.carts).find(_cart => _cart?.uuid === props.cartuuid)?.business_id ?? {}

  return(
    <Container>
      {!storesState?.loading && !storesState?.error && storesState?.result && (
        <>
          <WrapperSearch>
            <SearchBar
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
            />
          </WrapperSearch>
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

      {!storesState?.loading && (storesState?.error || !storesState?.result?.length) && (
        <NotFoundSource
          content={storesState?.error
            ? t('ERROR_NOT_FOUND_CART_STORES', 'Sorry, an error has occurred')
            : t('NOT_FOUND_CART_STORES', 'No businesses to show at this time.')
          }
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
