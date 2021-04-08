import React from 'react'
import {
  useLanguage,
  useEvent
} from 'ordering-components'
import { useTheme } from 'styled-components'
import { BusinessTypeFilter } from '../BusinessTypeFilter'
import { FeaturedBuinessesListing } from '../FeaturedBuinessesListing'
import { AllBusinessesListing } from '../AllBusinessesListing'
import { SearchBar } from '../SearchBar'
import {
  BusinessContainer,
  AdviceContainer,
  AdviceInnerContainer,
  AdviceLeftContent,
  AdviceRightContent,
  WrapImage,
  AdviceDescriptionContainer,
  WrapBusinessTypeFilter,
  FeaturedBusinessContainer,
  SectionTitle
} from './styles'
export const BusinessesListing = (props) => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const handleGoToPage = (search) => {
    events.emit('go_to_page', {
      page: 'filter',
      search: `?${search}`
    })
  }
  const handleChangeBusinessType = (businessType) => {
    handleGoToPage(`category=${businessType}`)
  }
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <SearchBar
        isCustomMode
        isEnterKeyLoad
        placeholder={t('SEARCH_BUSINESSES', 'Search Businesses')}
        onSearch={(val) => handleGoToPage(`search=${val}`)}
      />
      <BusinessContainer>
        <AdviceContainer>
          <AdviceInnerContainer>
            <AdviceLeftContent>
              <h1>{t('CRAVE_IT', 'Crave it? Get it.')}</h1>
              <p>{t('SEARCH_FAVORITE_RESTAURANT', 'Search for a favorite restaurant, cuisine, or dish.')}</p>
            </AdviceLeftContent>
            <AdviceRightContent>
              <AdviceDescriptionContainer>
                <p>
                  {t('ADVICE_FRONT_TITLE', 'Start the year with energy, enjoy our food ...')}
                </p>
              </AdviceDescriptionContainer>
              <WrapImage bgimage={theme?.images?.general?.advice} />
            </AdviceRightContent>
          </AdviceInnerContainer>
        </AdviceContainer>
        <WrapBusinessTypeFilter>
          <BusinessTypeFilter
            handleChangeBusinessType={handleChangeBusinessType}
          />
        </WrapBusinessTypeFilter>
        <FeaturedBusinessContainer>
          <SectionTitle>
            {t('FEATURED_BUSINESSES_NEAR_YOU', 'Featured Businesses Near You')}
          </SectionTitle>
          <FeaturedBuinessesListing
            {...props}
            defaultShowNumber={3}
          />
        </FeaturedBusinessContainer>
        <AllBusinessesListing
          {...props}
        />
      </BusinessContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
