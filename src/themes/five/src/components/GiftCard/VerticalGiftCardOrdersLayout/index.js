import React, { useEffect } from 'react'
import { useLanguage, GiftCardOrdersList as GiftCardOrdersListController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { SingleGiftCard } from '../SingleGiftCard'
import { Button } from '../../../styles/Buttons'

import {
  ProductsListContainer,
  WrappButton,
  SingleGiftCardWrapper
} from './styles'

const VerticalGiftCardOrdersLayoutUI = (props) => {
  const {
    giftCards,
    paginationProps,
    loadMoreOrders,
    title,
    setIsEmpty
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (giftCards.loading) return
    if (giftCards.list?.length === 0) setIsEmpty(true)
  }, [giftCards])

  return (
    <ProductsListContainer>
      {giftCards.loading
        ? <Skeleton width={100} height={24} />
        : giftCards.list?.length > 0 && <h2>{title}</h2>}
      {giftCards.list.map(card => (
        <SingleGiftCardWrapper key={card.id}>
          <SingleGiftCard
            card={card}
          />
        </SingleGiftCardWrapper>
      ))}
      {giftCards.loading && (
        [...Array(10).keys()].map(i => (
          <SingleGiftCardWrapper key={i}>
            <SingleGiftCard
              isSkeleton
            />
          </SingleGiftCardWrapper>
        ))
      )}
      {paginationProps.totalPages && paginationProps.currentPage < paginationProps.totalPages && (
        <WrappButton>
          <Button
            outline
            color='primary'
            bgtransparent
            onClick={loadMoreOrders}
          >
            {t('LOAD_MORE_ORDERS', 'Load more orders')}
          </Button>
        </WrappButton>
      )}
    </ProductsListContainer>
  )
}

export const VerticalGiftCardOrdersLayout = (props) => {
  const giftCardsProps = {
    ...props,
    UIComponent: VerticalGiftCardOrdersLayoutUI
  }
  return <GiftCardOrdersListController {...giftCardsProps} />
}
