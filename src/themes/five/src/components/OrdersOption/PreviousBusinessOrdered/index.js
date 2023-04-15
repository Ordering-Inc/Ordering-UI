import React from 'react'
import { useOrder, useOrderingTheme } from 'ordering-components'
import { BusinessController } from '../../BusinessController'
import { AutoScroll } from '../../AutoScroll'
import { BusinessList, BusinessListWrapper } from './styles'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

export const PreviousBusinessOrdered = (props) => {
  const {
    isCustomLayout,
    isCustomerMode,
    onRedirectPage,
    handleUpdateBusinesses,
    businesses
  } = props

  const [orderState] = useOrder()
  const [orderingTheme] = useOrderingTheme()
  const { width } = useWindowSize()
  const isChew = orderingTheme?.theme?.header?.components?.layout?.type?.toLowerCase() === 'chew'

  const onBusinessClick = (business) => {
    onRedirectPage({ page: 'business', params: { store: business.slug } })
  }

  return (
    <BusinessListWrapper isLoading={businesses?.loading}>
      <BusinessList marginCard={isChew && '0 20px 0 0'}>
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
                handleUpdateBusinessList={handleUpdateBusinesses}
              />
            ))
          }
        </AutoScroll>
      </BusinessList>
    </BusinessListWrapper>
  )
}
