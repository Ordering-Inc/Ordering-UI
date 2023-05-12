import React, { useState } from 'react'
import { PromotionsController, useLanguage, useSite, useUtils, useEvent } from 'ordering-components'
import {
  PromotionsContainer,
  PromotionTitle,
  SingleOfferContainer,
  ExpiresAt,
  OfferInformation,
  SearchBarContainer,
  BusinessLogo,
  SingleBusinessOffer,
  AvailableBusinesses,
  Description,
  OfferData,
  Code,
  BusinessInfo,
  OfferView,
  OfferInfoWrapper
} from './styles'
import { SearchBar } from '../SearchBar'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../NotFoundSource'
import { checkSiteUrl } from '../../../../../utils'
import { useTheme } from 'styled-components'

const PromotionsUI = (props) => {
  const {
    offersState,
    handleSearchValue,
    searchValue,
    offerSelected,
    setOfferSelected
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, parsePrice }] = useUtils()
  const [events] = useEvent()
  const [openModal, setOpenModal] = useState(false)
  const [{ site }] = useSite()

  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')

  const handleClickOffer = (offer) => {
    setOpenModal(true)
    setOfferSelected(offer)
  }

  const handleBusinessClick = (business) => {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
    } else {
      events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
    }
  }

  const filteredOffers = offersState?.offers?.filter(offer => offer?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()))

  const targetString = offerSelected?.target === 1
    ? t('SUBTOTAL', 'Subtotal')
    : offerSelected?.target === 2
      ? t('DELIVERY_FEE', 'Delivery fee')
      : t('SERVICE_FEE', 'Service fee')

  return (
    <PromotionsContainer>
      <PromotionTitle>
        {t('PROMOTIONS', 'Promotions')}
      </PromotionTitle>
      <SearchBarContainer>
        <SearchBar
          placeholder={t('SEARCH_PROMOTION', 'Search promotion')}
          onSearch={handleSearchValue}
        />
      </SearchBarContainer>

      {offersState?.loading && (
        <>
          {[...Array(5).keys()].map((key, i) => (
            <SingleOfferContainer key={i}>
              <OfferInformation>
                <Skeleton height={20} width={150} />
                <Skeleton height={15} width={225} />
                <Skeleton height={15} width={380} />
              </OfferInformation>
              <Skeleton height={44} width={110} />
            </SingleOfferContainer>
          ))}
        </>
      )}
      {((!offersState?.loading && filteredOffers?.length === 0) || offersState?.error) && (
        <NotFoundSource
          content={offersState?.error || t('NOT_FOUND_OFFERS', 'Not found offers')}
        />
      )}
      {!offersState?.loading && offersState.offers?.length > 0 && filteredOffers?.map(offer => (
        <SingleOfferContainer key={offer.id}>
          <OfferInfoWrapper>
            <BusinessLogo bgimage={offer?.image || theme.images?.dummies?.businessLogo} />
            <OfferInformation>
              <h2>{offer?.name}</h2>
              <Description>{offer?.description}</Description>
              <ExpiresAt>
                {t('EXPIRES', 'Expires')} {parseDate(offer?.end, { outputFormat: 'MMM DD, YYYY' })}
              </ExpiresAt>
              <AvailableBusinesses>
                <p>{t('APPLY_FOR', 'Apply for')}:</p>
                <p>
                  {offer.businesses.map((business, i) => (
                    <React.Fragment key={business?.id}>{' '}{business?.name}{i + 1 < offer.businesses?.length ? ',' : ''}</React.Fragment>
                  ))}
                </p>
              </AvailableBusinesses>
            </OfferInformation>
          </OfferInfoWrapper>
          <Button
            color='primary'
            onClick={() => handleClickOffer(offer)}
          >
            {t('VIEW_OFFER', 'View offer')}
          </Button>
        </SingleOfferContainer>
      ))}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <OfferView>
          <h2>
            {`${offerSelected?.name} / ${t('VALUE_OF_OFFER', 'Value of offer')}: ${offerSelected?.rate_type === 1 ? `${offerSelected?.rate}%` : `${parsePrice(offerSelected?.rate)}`}`}
          </h2>
          <OfferData>
            {offerSelected?.type === 2 && (
              <Code>
                <p>{t('YOUR_CODE', 'Your code')}</p>
                <span>{offerSelected.coupon}</span>
              </Code>
            )}
            <p>{t('APPLIES_TO', 'Applies to')}: {targetString}</p>
            {offerSelected?.auto && (
              <p>{t('OFFER_AUTOMATIC', 'This offer applies automatic')}</p>
            )}
            {offerSelected?.minimum && (
              <p>{t('MINIMUM_PURCHASE_FOR_OFFER', 'Minimum purshase for use this offer')}: {parsePrice(offerSelected?.minimum)}</p>
            )}
            {offerSelected?.max_discount && (
              <p>{t('MAX_DISCOUNT_ALLOWED', 'Max discount allowed')}: {parsePrice(offerSelected?.max_discount)}</p>
            )}
            {offerSelected?.description && (
              <p>{offerSelected?.description}</p>
            )}
          </OfferData>
          <h2>
            {t('AVAILABLE_BUSINESSES_FOR_OFFER', 'Available businesses for this offer')}
          </h2>
          <div>
            {offerSelected?.businesses?.map(business => {
              return (
                <SingleBusinessOffer key={business.id}>
                  <BusinessLogo bgimage={business?.logo} />
                  <BusinessInfo>
                    <p>{business.name}</p>
                    <Button
                      onClick={() => handleBusinessClick(business)}
                      color='primary'
                    >
                      {t('GO_TO_BUSINESSS', 'Go to business')}
                    </Button>
                  </BusinessInfo>
                </SingleBusinessOffer>
              )
            })}
          </div>
        </OfferView>
      </Modal>
    </PromotionsContainer>
  )
}

export const Promotions = (props) => {
  const PromotionsProps = {
    ...props,
    UIComponent: PromotionsUI
  }

  return (
    <PromotionsController {...PromotionsProps} />
  )
}
