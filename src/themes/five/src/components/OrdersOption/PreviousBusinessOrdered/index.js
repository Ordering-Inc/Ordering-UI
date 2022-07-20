import React, { useEffect } from 'react'
import { BusinessList as BusinessListController, useOrder } from 'ordering-components'
import { BusinessController } from '../../BusinessController'
import { AutoScroll } from '../../AutoScroll'
import { BusinessList, BusinessListWrapper } from './styles'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
export const PreviousBusinessOrderedUI = (props) => {
  const {
    businessesList,
    isCustomLayout,
    isCustomerMode,
    setBusinessLoading,
    onRedirectPage,
    businessId,
    isLoadingOrders
  } = props

  const [orderState] = useOrder()
  const { width } = useWindowSize()
  const onBusinessClick = (business) => {
    onRedirectPage({ page: 'business', params: { store: business.slug } })
  }
  useEffect(() => {
    if (businessesList?.loading && businessesList?.businesses?.length === 0) {
      setBusinessLoading(true)
    } else {
      setBusinessLoading(false)
    }
  }, [businessesList?.loading])

  return (
    <BusinessListWrapper isLoading={businessesList?.loading || businessesList.businesses?.length === 0 || isLoadingOrders}>
      <BusinessList>
        <AutoScroll scrollId='searchlistorder'>
          {
            businessesList.businesses?.filter(business => businessId?.includes(business?.id))?.map((business, i) => (
              <BusinessController
                key={business.id}
                className='card'
                business={business}
                isBusinessOpen={business.open}
                handleCustomClick={onBusinessClick}
                orderType={orderState?.options?.type}
                isCustomLayout={isCustomLayout}
                isCustomerMode={isCustomerMode}
                businessHeader={business?.header}
                businessFeatured={business?.featured}
                businessOffers={business?.offers}
                businessLogo={business?.logo}
                businessReviews={business?.reviews?.total}
                businessDeliveryPrice={business?.delivery_price}
                businessDeliveryTime={business?.delivery_time}
                businessPickupTime={business?.pickup_time}
                businessDistance={business?.distance}
                firstCard={i === 0 && width > 681}
              />
            ))
          }
        </AutoScroll>
      </BusinessList>
    </BusinessListWrapper>
  )
}

export const PreviousBusinessOrdered = (props) => {
  const previousBusinessOrderedController = {
    ...props,
    UIComponent: PreviousBusinessOrderedUI,
    paginationSettings: { initialPage: 1, pageSize: 50, controlType: 'infinity' }
  }

  return (
    <BusinessListController {...previousBusinessOrderedController} />
  )
}
