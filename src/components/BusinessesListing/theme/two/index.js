import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useOrder,
  useEvent,
  useSession
} from 'ordering-components'
import { SearchBar } from '../../../SearchBar/theme/two'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import { Button } from '../../../../styles/Buttons/theme/two'
import { BusinessTypeFilter } from '../../../BusinessTypeFilter/theme/two'
import { PickupOrderTypeToggleButton } from '../../../PickupOrderTypeToggleButton/theme/two'
import {
  BusinessContainer,
  InnerContainer,
  WrappperButtonGroup,
  WrapperOrderingPass,
  WrapperGoButton
} from './styles'
import { useTheme } from 'styled-components'
import { FeaturedBusinessListing } from '../../../FeaturedBusinessListing/theme/two'
import { AllBusinessesListing } from '../../../AllBusinessesListing/theme/two'
import { ReviewSettingPopover } from '../../../ReviewSettingPopover/theme/two'
export const BusinessesListing = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [events] = useEvent()
  const [orderState] = useOrder()
  const [{ auth }] = useSession()
  const orderType = orderState?.options?.type || 1
  const [reviewQuality, setReviewQuality] = useState(4.5)
  const [openPopover, setOpenPopover] = useState({})
  const [isPickupClicked, setIsPickupClicked] = useState(false)

  const handleGoToPage = (search) => {
    events.emit('go_to_page', {
      page: 'filter',
      search: `?${search}`
    })
  }

  const handleChangeCategory = (value) => {
    handleGoToPage(`category=${value}`)
  }

  const handleReviewSettingValue = (value) => {
    setReviewQuality(value)
  }

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }
  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  useEffect(() => {
    if (!isPickupClicked) return
    if (orderType === 2) {
      events.emit('go_to_page', { page: 'filter' })
    }
  }, [orderType, isPickupClicked])

  return (
    <>
      <SearchBar
        isCustomMode
        isEnterKeyLoad
        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
        onSearch={(val) => handleGoToPage(`search=${val}`)}
      />
      <BusinessContainer>
        <InnerContainer>
          <BusinessTypeFilter
            handleChangeBusinessType={handleChangeCategory}
          />
          <WrappperButtonGroup>
            <PickupOrderTypeToggleButton
              handleCustomClick={() => setIsPickupClicked(true)}
            />
            <ReviewSettingPopover
              open={openPopover.reviewSetting}
              reviewQuality={reviewQuality}
              onClick={() => handleTogglePopover('reviewSetting')}
              onClose={() => handleClosePopover('reviewSetting')}
              handleReviewSettingValue={handleReviewSettingValue}
            />
            <Button
              color='secondary'
              onClick={() => handleGoToPage('timeLimit=0:30')}
            >
              {t('UNDER_30_MIN', 'Under 30 min')}
            </Button>
          </WrappperButtonGroup>
          <WrapperOrderingPass
            bgimage={theme.images?.general?.orderingPass}
            onClick={() => !auth && events.emit('go_to_page', { page: 'signup' })}
          >
            <img alt='Logotype' width='130px' height='30px' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
            <p>{t('$ 0 delivery fees, reduced service fees.')}</p>
            <p>{t('Sign Up for Ordering Pass')}</p>
            <WrapperGoButton>
              <BsArrowRightShort />
            </WrapperGoButton>
          </WrapperOrderingPass>
          <FeaturedBusinessListing
            {...props}
            orderType={1}
            isSortByReview
            twoColumnView
            defaultShowNumber={4}
          />
        </InnerContainer>
        <AllBusinessesListing
          {...props}
          handleGoToPage={handleGoToPage}
          handleChangeCategory={handleChangeCategory}
        />
      </BusinessContainer>
    </>
  )
}
