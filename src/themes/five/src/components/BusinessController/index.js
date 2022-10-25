import React, { useState, useRef } from 'react'
import { useLanguage, useUtils, useOrder, useConfig, useSession, useOrderingTheme, BusinessController as BusinessSingleCard } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { convertHoursToMinutes, LightenDarkenColor, shape } from '../../../../../utils'

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
  BusinessInfoItem,
  BusinessName,
  Medadata,
  CallCenterInformation,
  CallCenterInformationBullet,
  BusinessLogoWrapper,
  BusinessStarInfo,
  InfoLength,
  InfoDescription,
  RibbonBox,
  FavoriteWrapper
  // CardOverlay
} from './styles'
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot'
import BisStar from '@meronex/icons/bi/BisStar'
import FaCrown from '@meronex/icons/fa/FaCrown'

const BusinessControllerUI = (props) => {
  const {
    isSkeleton,
    business,
    getBusinessOffer,
    handleClick,
    orderType,
    isCustomLayout,
    isCustomerMode,
    isBusinessOpen,
    businessWillCloseSoonMinutes,
    onPreorderBusiness,
    firstCard,
    minWidthEnabled,
    typeButton,
    children,
    businessHeader,
    businessFeatured,
    businessOffers,
    businessLogo,
    businessReviews,
    businessDeliveryPrice,
    businessDeliveryTime,
    businessPickupTime,
    businessDistance,
    handleFavoriteBusiness
  } = props
  const [configState] = useConfig()
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ auth }, { login }] = useSession()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const [orderState] = useOrder()
  const [orderingTheme] = useOrderingTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalPageToShow, setModalPageToShow] = useState(null)

  const favoriteRef = useRef(null)

  const businessRows = orderingTheme?.theme?.business_listing_view?.components?.layout?.rows
  const hideBusinessLogo = theme?.business_listing_view?.components?.business?.components?.logo?.hidden
  const hideBusinessFee = theme?.business_listing_view?.components?.business?.components?.fee?.hidden
  const hideBusinessTime = theme?.business_listing_view?.components?.business?.components?.time?.hidden
  const hideBusinessDistance = theme?.business_listing_view?.components?.business?.components?.distance?.hidden
  const hideBusinessReviews = theme?.business_listing_view?.components?.business?.components?.reviews?.hidden
  const hideBusinessFavorite = theme?.business_listing_view?.components?.business?.components?.favorite?.hidden
  const hideBusinessOffer = theme?.business_listing_view?.components?.business?.components?.offer?.hidden

  // const handleShowAlert = () => {
  //   setAlertState({ open: true, content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')] })
  // }

  const handleBusinessClick = (e) => {
    if (favoriteRef?.current?.contains(e.target)) return

    if (onPreorderBusiness && !isBusinessOpen) onPreorderBusiness(business)
    else handleClick(business)
  }

  const handleChangeFavorite = () => {
    if (auth) {
      handleFavoriteBusiness && handleFavoriteBusiness(!business?.favorite)
    } else {
      setModalPageToShow('login')
      setIsModalOpen(true)
    }
  }

  const closeAuthModal = () => {
    setIsModalOpen(false)
    setModalPageToShow(null)
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeAuthModal()
    }
  }

  const handleCustomModalClick = (e, { page }) => {
    e.preventDefault()
    setModalPageToShow(page)
  }

  const handleSuccessSignup = (user) => {
    login({
      user,
      token: user?.session?.access_token
    })
  }

  const hasInformationLength = (business?.available_drivers?.length + business?.busy_drivers?.length + business?.active_orders?.length) > 0

  if (typeButton) {
    return (
      <ContainerCard typeButton={typeButton}>
        {children}
      </ContainerCard>
    )
  }

  return (
    <>
      <ContainerCard
        isSkeleton={isSkeleton}
        isCustomerMode={isCustomerMode && hasInformationLength}
        firstCard={firstCard}
        minWidthEnabled={minWidthEnabled}
        businessRows={businessRows}
      >
        <WrapperBusinessCard isSkeleton={isSkeleton} onClick={(e) => !isSkeleton && handleClick && handleBusinessClick(e)}>
          {business?.ribbon?.enabled && (
            <RibbonBox
              bgColor={business?.ribbon?.color}
              colorText={LightenDarkenColor(business?.ribbon?.color, -200)}
              borderRibbon={LightenDarkenColor(business?.ribbon?.color, -200)}
              isRoundRect={business?.ribbon?.shape === shape?.rectangleRound}
              isCapsule={business?.ribbon?.shape === shape?.capsuleShape}
            >
              {business?.ribbon?.text}
            </RibbonBox>
          )}
          <BusinessHero>
            {isSkeleton ? (
              <Skeleton height={isCustomerMode ? 100 : 140} />
            ) : (
              <BusinessHeader bgimage={optimizeImage((businessHeader || business?.header || theme.images?.dummies?.businessHeader), 'h_400,c_limit')} isClosed={!isBusinessOpen}>
                <BusinessTags>
                  {(businessFeatured ?? business?.featured) &&
                    <span className='crown'>
                      <FaCrown />
                    </span>}
                  {!hideBusinessOffer && !isCustomLayout && (configState?.configs?.preorder_status_enabled?.value === '1') && (
                    <div>
                      {getBusinessOffer((businessOffers ?? business?.offers)) && <span>{getBusinessOffer((businessOffers ?? business?.offers)) || parsePrice(0)}</span>}
                      {!isBusinessOpen && <span>{t('PREORDER', 'PreOrder')}</span>}
                    </div>
                  )}
                </BusinessTags>
                {!!businessWillCloseSoonMinutes && orderState?.options?.moment === null && isBusinessOpen && (
                  <h1>{businessWillCloseSoonMinutes} {t('MINUTES_TO_CLOSE', 'minutes to close')}</h1>
                )}
                {!isBusinessOpen && <h1 className='closed'>{t('CLOSED', 'Closed')}</h1>}
              </BusinessHeader>
            )}
          </BusinessHero>
          <BusinessContent>
            <BusinessLogoWrapper>
              {!hideBusinessLogo && (
                <WrapperBusinessLogo isSkeleton={isSkeleton} isCustomerMode={isCustomerMode}>
                  {!isSkeleton && (businessLogo || business?.logo || theme.images?.dummies?.businessLogo) ? (
                    <BusinessLogo bgimage={optimizeImage((businessLogo || business?.logo || theme.images?.dummies?.businessLogo), 'h_200,c_limit')} />
                  ) : (
                    <Skeleton height={70} width={70} />
                  )}
                </WrapperBusinessLogo>
              )}
              <BusinessStarInfo>
                {!hideBusinessReviews && (
                  <>
                    {!isSkeleton ? (
                      (businessReviews ?? business?.reviews?.total) > 0 && (
                        <div className='reviews'>
                          <BisStar />
                          <span>{(businessReviews ?? business?.reviews?.total)}</span>
                        </div>
                      )
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </>
                )}
                {!hideBusinessFavorite && (
                  <FavoriteWrapper ref={favoriteRef} onClick={handleChangeFavorite}>
                    {!isSkeleton ? (
                      <>
                        {(business?.favorite) ? <Like /> : <DisLike />}
                      </>
                    ) : (
                      <Skeleton width={16} height={16} />
                    )}
                  </FavoriteWrapper>
                )}
              </BusinessStarInfo>
            </BusinessLogoWrapper>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {business?.name ? (
                    <BusinessName>{business?.name}</BusinessName>
                  ) : (
                    <Skeleton width={100} />
                  )}
                </div>
                <Medadata isCustomerMode={isCustomerMode} isSkeleton={isSkeleton}>
                  {!hideBusinessFee && orderType === 1 && (
                    <>
                      {(businessDeliveryPrice ?? business?.delivery_price) >= 0 ? (
                        <p>
                          <span>{t('DELIVERY_FEE', 'Delivery fee')}</span>
                          {business && parsePrice((businessDeliveryPrice ?? business?.delivery_price))}
                        </p>
                      ) : (
                        <Skeleton width={isCustomerMode ? 70 : 65} />
                      )}
                    </>
                  )}
                  {!hideBusinessTime && (
                    <>
                      {Object.keys(business).length > 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {convertHoursToMinutes(orderState?.options?.type === 1 ? (businessDeliveryTime ?? business?.delivery_time) : (businessPickupTime ?? business?.pickup_time)) || <Skeleton width={100} />}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                  )}
                  {!hideBusinessDistance && (
                    <>
                      {(businessDistance ?? business?.distance) >= 0 ? (
                        <p className='bullet'>
                          <GoPrimitiveDot />
                          {parseDistance((businessDistance ?? business?.distance))}
                        </p>
                      ) : (
                        <Skeleton width={65} />
                      )}
                    </>
                  )}
                  {isCustomerMode && hasInformationLength && (
                    <CallCenterInformation>
                      {business?.available_drivers?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.available_drivers?.length}
                          </InfoLength>
                          <InfoDescription>{t('OPEN_ORDERS', 'Open orders')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
                      {business?.busy_drivers?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.busy_drivers?.length}
                          </InfoLength>
                          <InfoDescription>{t('BUSY_DRIVERS', 'Busy drivers')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
                      {business?.active_orders?.length > 0 && (
                        <CallCenterInformationBullet>
                          <InfoLength>
                            {business?.active_orders?.length}
                          </InfoLength>
                          <InfoDescription>{t('AVAILABLE_DRIVERS', 'Avalable drivers')}</InfoDescription>
                        </CallCenterInformationBullet>
                      )}
                    </CallCenterInformation>
                  )}
                </Medadata>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
        </WrapperBusinessCard>
      </ContainerCard>
      <Alert
        title={t('BUSINESS_CLOSED', 'Business Closed')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Modal
        open={isModalOpen}
        onRemove={() => closeAuthModal()}
        onClose={() => closeAuthModal()}
        width='50%'
        authModal
      >
        {modalPageToShow === 'login' && (
          <LoginForm
            handleSuccessLogin={handleSuccessLogin}
            elementLinkToSignup={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'signup' })
                } href='#'
              >{t('CREATE_ACCOUNT', theme?.defaultLanguages?.CREATE_ACCOUNT || 'Create account')}
              </a>
            }
            elementLinkToForgotPassword={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'forgotpassword' })
                } href='#'
              >{t('RESET_PASSWORD', theme?.defaultLanguages?.RESET_PASSWORD || 'Reset password')}
              </a>
            }
            useLoginByCellphone
            isPopup
          />
        )}
        {modalPageToShow === 'signup' && (
          <SignUpForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            useLoginByCellphone
            useChekoutFileds
            handleSuccessSignup={handleSuccessSignup}
            isPopup
            closeModal={() => closeAuthModal()}
          />
        )}
        {modalPageToShow === 'forgotpassword' && (
          <ForgotPasswordForm
            elementLinkToLogin={
              <a
                onClick={
                  (e) => handleCustomModalClick(e, { page: 'login' })
                } href='#'
              >{t('LOGIN', theme?.defaultLanguages?.LOGIN || 'Login')}
              </a>
            }
            isPopup
          />
        )}
      </Modal>
    </>
  )
}

export const BusinessController = (props) => {
  const businessControllerProps = {
    ...props,
    UIComponent: BusinessControllerUI
  }

  return (
    <BusinessSingleCard {...businessControllerProps} />
  )
}
