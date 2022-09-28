import React from 'react'
import { useOrder } from 'ordering-components'
import { BusinessController } from '../../BusinessController'
import { AutoScroll } from '../../AutoScroll'
import { BusinessList, BusinessListWrapper } from './styles'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

export const PreviousBusinessOrdered = (props) => {
  const {
    isCustomLayout,
    isCustomerMode,
    onRedirectPage,
    handleUpdateBusinessList,
    businesses
  } = props

  const [orderState] = useOrder()
  const { width } = useWindowSize()
  const onBusinessClick = (business) => {
    onRedirectPage({ page: 'business', params: { store: business.slug } })
  }

  return (
    <BusinessListWrapper isLoading={businesses?.loading}>
      <BusinessList>
        <AutoScroll scrollId='searchlistorder'>
          {
            businesses?.result?.map((business, i) => (
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
                handleUpdateBusinessList={handleUpdateBusinessList}
              />
            ))
          }
        </AutoScroll>
      </BusinessList>
    </BusinessListWrapper>
  )
}
