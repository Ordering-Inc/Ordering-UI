import React from 'react'
import { BusinessList as BusinessListController } from './naked'
import { useLanguage, useOrder } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import {
  HighestRatedContainer,
  ErrorMessage,
  BusinessList,
  Title,
  Description
} from './styles'

const HighestRatedUI = (props) => {
  const {
    businessesList,
    handleBusinessClick,
    isCustomLayout,
    handleClickAddress
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()

  return (
    <HighestRatedContainer>
      <Title>{t('HIGHEST_RATED', 'Highest rated')}</Title>
      <Description>{t('TOP_RATINGS_AND_GREAT_SERVICE', 'Top ratings and great service')}</Description>
      <BusinessList>
        {
          !businessesList.loading && businessesList.businesses.length === 0 && (
            <NotFoundSource
              content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
            >
              <Button
                outline
                color='primary'
                onClick={() => handleClickAddress()}
              >
                {t('CHANGE_ADDRESS', 'Select other Address')}
              </Button>
            </NotFoundSource>
          )
        }
        {
          businessesList.businesses?.map((business) => (
            <BusinessController
              key={business.id}
              className='card'
              business={business}
              isBusinessOpen={business.open}
              handleCustomClick={handleBusinessClick}
              orderType={orderState?.options?.type}
              isCustomLayout={isCustomLayout}
              isShowCallcenterInformation={isCustomLayout}
            />
          ))
        }
        {businessesList.loading && (
          [...Array(8).keys()].map(i => (
            <BusinessController
              key={i}
              className='card'
              business={{}}
              isSkeleton
              orderType={orderState?.options?.type}
            />
          ))
        )}
        {businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && (
          businessesList.error.map((e, i) => (
            <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </BusinessList>
    </HighestRatedContainer>
  )
}

export const HightestRated = (props) => {
  const highestRatedProps = {
    ...props,
    UIComponent: HighestRatedUI,
    initialOrderByValue: 'rating'
  }
  return <BusinessListController {...highestRatedProps} />
}
