import React, { useEffect, useState } from 'react'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  useLanguage,
  useEvent
} from 'ordering-components'

import {
  StatusFloting,
  BusinessPicker,
  SelectStore,
  CartStates,
  PickerTitle,
  NotifyTost,
  NotifyContent,
  CartCount,
  CounterWrapper,
  Counter,
  OutsideShape,
  RotateShape,
  Shape,
  BaseShape
} from './styles'

export const FlotingStatusBar = (props) => {
  const { currentCart, goToCart, businessName } = props
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [newCartItem, setNewCartItem] = useState(false)
  const [addNotify, setAddNotify] = useState(false)
  const [currentProductName, setCurrentProductName] = useState('')
  const [currnetProductImage, setCurrnetProductImage] = useState(null)

  const handleAddProduct = (product, cart) => {
    setCurrentProductName(product.name)
    setCurrnetProductImage(cart.products[0].images)
    setNewCartItem(true)
    setAddNotify(true)
    setTimeout(
      function () {
        setNewCartItem(false)
      }, 3000
    )
    setTimeout(
      function () {
        setAddNotify(false)
      }, 5000
    )
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    events.on('cart_product_added', handleAddProduct)
    return () => events.off('cart_product_added', handleAddProduct)
  }, [])

  return (
    <StatusFloting>
      <BusinessPicker>
        <PickerTitle>{t('STORE', 'Store')}{' '}{' : '}</PickerTitle>
        <SelectStore onClick={() => handleGoToPage({ page: 'search' })}>
          {!businessName ? (
            <>{t('SELECT_STORE', 'Select Store')}</>
          ) : (
            <>{businessName}</>
          )}
          <MdClose />
        </SelectStore>
      </BusinessPicker>
      <CartStates onClick={goToCart}>
        {currentCart.products?.length > 0 ? (
          <>
            <svg width='28' height='30' viewBox='0 0 28 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14 1.875C15.2432 1.875 16.4355 2.36886 17.3146 3.24794C18.1936 4.12701 18.6875 5.3193 18.6875 6.5625V7.5H9.3125V6.5625C9.3125 5.3193 9.80636 4.12701 10.6854 3.24794C11.5645 2.36886 12.7568 1.875 14 1.875ZM20.5625 7.5V6.5625C20.5625 4.82202 19.8711 3.15282 18.6404 1.92211C17.4097 0.691404 15.7405 0 14 0C12.2595 0 10.5903 0.691404 9.35961 1.92211C8.1289 3.15282 7.4375 4.82202 7.4375 6.5625V7.5H0.875V26.25C0.875 27.2446 1.27009 28.1984 1.97335 28.9016C2.67661 29.6049 3.63044 30 4.625 30H23.375C24.3696 30 25.3234 29.6049 26.0266 28.9016C26.7299 28.1984 27.125 27.2446 27.125 26.25V7.5H20.5625Z' fill='#00A862' />
            </svg>
            <CartCount>{currentCart.products?.length > 0 && currentCart.products?.length}</CartCount>
            {newCartItem && (
              <CounterWrapper>
                <Counter>
                  <OutsideShape>
                    <RotateShape>
                      <Shape>
                        <BaseShape>
                          <img
                            src={currnetProductImage} role='presentation'
                          />
                        </BaseShape>
                      </Shape>
                    </RotateShape>
                  </OutsideShape>
                </Counter>
              </CounterWrapper>
            )}
          </>
        ) : (
          <svg width='28' height='30' viewBox='0 0 28 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14 1.875C15.2432 1.875 16.4355 2.36886 17.3146 3.24794C18.1936 4.12701 18.6875 5.3193 18.6875 6.5625V7.5H9.3125V6.5625C9.3125 5.3193 9.80636 4.12701 10.6854 3.24794C11.5645 2.36886 12.7568 1.875 14 1.875ZM20.5625 7.5V6.5625C20.5625 4.82202 19.8711 3.15282 18.6404 1.92211C17.4097 0.691404 15.7405 0 14 0C12.2595 0 10.5903 0.691404 9.35961 1.92211C8.1289 3.15282 7.4375 4.82202 7.4375 6.5625V7.5H0.875V26.25C0.875 27.2446 1.27009 28.1984 1.97335 28.9016C2.67661 29.6049 3.63044 30 4.625 30H23.375C24.3696 30 25.3234 29.6049 26.0266 28.9016C26.7299 28.1984 27.125 27.2446 27.125 26.25V7.5H20.5625ZM2.75 9.375H25.25V26.25C25.25 26.7473 25.0525 27.2242 24.7008 27.5758C24.3492 27.9275 23.8723 28.125 23.375 28.125H4.625C4.12772 28.125 3.65081 27.9275 3.29917 27.5758C2.94754 27.2242 2.75 26.7473 2.75 26.25V9.375Z' fill='white' />
          </svg>
        )}
      </CartStates>
      {addNotify && (
        <NotifyTost>
          <NotifyContent>
            {(currentProductName !== '') ? currentProductName : 'Product'}&nbsp;{t('CART_NOTIFY', 'added successfully')}
            <MdClose />
          </NotifyContent>
        </NotifyTost>
      )}
    </StatusFloting>
  )
}
