import React from 'react'
import { BusinessController as BusinessSingleCard, useLanguage } from 'ordering-components'

import deliver from '../../../template/assets/delivery-icon.svg'
import crown from '../../../template/assets/crown.svg'
import star from '../../../template/assets/star.svg'
import locationMarker from '../../../template/assets/location-marker.svg'
import clock from '../../../template/assets/clock.svg'

import {
  ContainerCard,
  WrapperBusinessCard,
  BusinessHero,
  BusinessHeader,
  WrapperBusinessLogo,
  BusinessTags,
  BusinessContent,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem
} from './styles'

const BusinessControllerUI = (props) => {
  const {
    business,
    isBusinessClose,
    getBusinessOffer,
    formatNumber,
    orderState
    // handleClick
  } = props

  const [, t] = useLanguage()

  const types = ['food', 'laundry', 'alcohol', 'groceries']
  const businessType = Object.keys(types.map(t => { return { [t]: business[t] } }).find(t => t))[0]
  const formatAmount = (amount = 0) => `$ ${amount.toFixed(2)}`
  const dateFormatted = (date) => {
    const hour = date.split(':')[0]
    const minute = date.split(':')[1]
    const formatHour = hour < 10 ? `0${hour}` : hour
    const formatMinute = minute < 10 ? `0${minute}` : minute
    return `${formatHour}:${formatMinute}`
  }

  return (
    <ContainerCard>
      <WrapperBusinessCard>
        <BusinessHero>
          <BusinessHeader bgimage={business.header} isClosed={isBusinessClose}>
            <BusinessTags>
              {business.featured &&
                <span className='crown'>
                  <img src={crown} alt='crown-icon' />
                </span>}
              <div>
                {getBusinessOffer(business.offers) && <span>{getBusinessOffer(business.offers) || '$0.00'}</span>}
                {isBusinessClose && <span>{t('PREORDER')}</span>}
              </div>
            </BusinessTags>
            {isBusinessClose && <h1>{t('CLOSED')}</h1>}
          </BusinessHeader>
        </BusinessHero>
        <BusinessContent>
          <WrapperBusinessLogo>
            <BusinessLogo bgimage={business.logo} />
          </WrapperBusinessLogo>
          <BusinessInfo className='info'>
            <BusinessInfoItem>
              <div>
                <p className='bold'>{business.name}</p>
                <p className='reviews'>
                  <img src={star} alt='star-icon' />
                  {business.reviews?.total}
                </p>
              </div>
              <div>
                <p>{businessType}</p>
              </div>
              <div>
                {orderState?.options?.type === 1 ? (
                  <p className='bullet'>
                    <img src={clock} alt='clock-icon' />
                    {dateFormatted(business.delivery_time)}
                  </p>
                ) : (
                  <p className='bullet'>
                    <img src={clock} alt='clock-icon' />
                    {dateFormatted(business.pickup_time)}
                  </p>
                )}
                <p className='bullet'>
                  <img src={locationMarker} alt='location-icon' />
                  {formatNumber(business.distance) || 0} KM
                </p>
                <p>
                  <img src={deliver} alt='deliver-icon' />
                  {formatAmount(business.delivery_price)}
                </p>
              </div>
            </BusinessInfoItem>
          </BusinessInfo>
        </BusinessContent>
      </WrapperBusinessCard>
    </ContainerCard>
  )
}

export const BusinessController = (props) => {
  const businessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI,
    business: {
      id: 41,
      name: 'McBonalds',
      logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
      header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
      today: {
        enabled: true,
        lapses: [
          {
            open: {
              hour: 0,
              minute: 0
            },
            close: {
              hour: 23,
              minute: 59
            }
          }
        ]
      },
      delivery_price: 1,
      minimum: 0,
      description: 'Burguer and more!',
      distance: 0.8964598968274764,
      delivery_time: '0:0',
      pickup_time: '0:0',
      reviews: {
        reviews: [
          {
            id: 16,
            order_id: 14,
            quality: 5,
            delivery: 4,
            service: 3,
            package: 2,
            comment: 'Excellent food',
            enabled: true,
            created_at: '2019-07-08 20:12:09',
            updated_at: '2019-07-08 20:12:09',
            laravel_through_key: 41,
            total: 3.5
          }
        ],
        quality: 5,
        delivery: 4,
        service: 3,
        package: 2,
        total: 3.5
      },
      offers: [],
      featured: true,
      food: true,
      alcohol: false,
      groceries: false,
      laundry: false
    },
    handleCustomClick: () => { console.log('asd') }
  }

  return (
    <BusinessSingleCard {...businessControllerProps} />
  )
}
