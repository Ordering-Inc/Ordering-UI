import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useUtils, useLanguage, useSession, ProductForm as ProductFormController } from 'ordering-components'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { useTheme } from 'styled-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { BusinessPreorder } from '../BusinessPreorder'
import { Button } from '../../styles/Buttons'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {
  Container,
  ImageWrapper,
  SwiperWrapper,
  ArrowButtonWrapper,
  HeaderInfoWrapper,
  PriceAndDuration,
  Divider,
  ProfessionalInfoWrapper,
  SectionHeader,
  ScheduleWrapper,
  ButtonWrapper,
  ProfessionalSelectWrapper,
  SelectedItem,
  InfoWrapper,
  ProfessionalPhoto,
  NameWrapper,
  StatusInfo
} from './styles'
import moment from 'moment'
SwiperCore.use([Navigation])

const ServiceFormUI = (props) => {
  const {
    product,
    professionalSelected,
    handleSave,
    isSoldOut,
    maxProductQuantity,
    productCart
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()
  const [{ auth }, { login }] = useSession()
  const [modalPageToShow, setModalPageToShow] = useState('login')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
    setModalPageToShow('login')
  }

  const handleSuccessLogin = (user) => {
    if (user) {
      closeModal()
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
    closeModal()
  }

  const [gallery, setGallery] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [dateSelected, setDateSelected] = useState(null)

  const handleAddProduct = () => {
    if (!professionalSelected?.id) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_PROFESSIONAL_REQUIRED', 'The field professional is required')]
      })
      return
    }
    if (!dateSelected) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_SCHEDULE_REQUIRED', 'The field schedule is required')]
      })
      return
    }
    const values = { serviceTime: parseDate(dateSelected, { outputFormat: 'YYYY-MM-DD HH:mm:00' }) }
    handleSave(values)
  }

  const isBusyTime = () => {
    if (professionalSelected?.busy_times?.length === 0 || !dateSelected) return false
    const valid = professionalSelected?.busy_times.some(item => {
      return moment(item?.start).valueOf() <= moment(dateSelected).valueOf() &&
        moment(dateSelected).valueOf() <= moment(item?.end).valueOf()
    })
    return valid
  }

  useEffect(() => {
    const imageList = []
    imageList.push(product?.images || theme.images?.dummies?.product)
    if (product?.gallery && product?.gallery?.length > 0) {
      for (const galleryItem of product?.gallery) {
        if (galleryItem?.file) {
          imageList.push(galleryItem?.file)
        }
      }
    }
    setGallery(imageList)
  }, [product])

  return (
    <>
      <Container>
        <ImageWrapper>
          <SwiperWrapper>
            <ArrowButtonWrapper className='button-prev'>
              <ChevronLeft />
            </ArrowButtonWrapper>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              watchSlidesProgress
              className='mySwiper2'
              preventClicksPropagation={false}
              navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev'
              }}
            >
              {gallery?.map((photo, i) => (
                <SwiperSlide key={i}>
                  <img src={photo} alt='' />
                </SwiperSlide>
              ))}
            </Swiper>
            <ArrowButtonWrapper className='button-next'>
              <ChevronRight />
            </ArrowButtonWrapper>
          </SwiperWrapper>
        </ImageWrapper>
        <HeaderInfoWrapper>
          <h2>{product?.name}</h2>
          <PriceAndDuration>
            <span>{parsePrice(product?.price)}</span>
            <span className='dot'>•</span>
            <span>{product?.duration}min</span>
          </PriceAndDuration>
          <p>{product?.description}</p>
        </HeaderInfoWrapper>
        <Divider />
        <ProfessionalInfoWrapper>
          <SectionHeader>
            <h2>{t('PROFESSIONALS', 'Professionals')}</h2>
            <span>{t('REQUIRED', 'Required')}</span>
          </SectionHeader>
          <ProfessionalSelectWrapper>
            <SelectedItem>
              <InfoWrapper>
                {professionalSelected?.photo ? (
                  <ProfessionalPhoto
                    bgimage={professionalSelected?.photo}
                  />
                ) : <FaUserAlt />}
                <NameWrapper>
                  <p>{professionalSelected?.name} {professionalSelected?.lastname}</p>
                  <StatusInfo available={!isBusyTime()}>
                    {isBusyTime() ? (
                      <>
                        <span className='status'>{t('BUSY_ON_SELECTED_TIME', 'Busy on selected time')}</span>
                      </>
                    ) : (
                      <span className='status'>{t('AVAILABLE', 'Available')}</span>
                    )}
                  </StatusInfo>
                </NameWrapper>
              </InfoWrapper>
            </SelectedItem>
          </ProfessionalSelectWrapper>
        </ProfessionalInfoWrapper>
        <ScheduleWrapper>
          <SectionHeader>
            <h2>{t('SCHEDULE', 'Schedule')}</h2>
            <span>{t('REQUIRED', 'Required')}</span>
          </SectionHeader>
          <BusinessPreorder
            business={professionalSelected}
            isProfessional
            maxDays={50}
            onChangeMoment={setDateSelected}
            useOrderContext={false}
          />
        </ScheduleWrapper>
        <ButtonWrapper>
          <span>{dateSelected
            ? parseDate(dateSelected, { outputFormat: 'hh:mm a' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
          </span>
          {!isSoldOut && maxProductQuantity > 0 && auth && (
            <Button
              onClick={() => handleAddProduct()}
              color='primary'
            >
              {t('BOOK', 'Book')}
            </Button>
          )}
          {(!auth || isSoldOut || maxProductQuantity <= 0) && (
            <Button
              className={`add ${!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''}`}
              color='primary'
              outline
              disabled={isSoldOut || maxProductQuantity <= 0}
              onClick={() => setModalIsOpen(true)}
            >
              {isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', theme?.defaultLanguages?.SOLD_OUT || 'Sold out') : t('LOGIN_SIGNUP', theme?.defaultLanguages?.LOGIN_SIGNUP || 'Login / Sign Up')}
            </Button>
          )}
        </ButtonWrapper>
        {modalIsOpen && !auth && (
          <Modal
            open={modalIsOpen}
            onClose={() => closeModal()}
            width='760px'
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
        )}
      </Container>
      <Alert
        title={t('SEARCH', 'Search')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ServiceForm = (props) => {
  const serviceFormProps = {
    ...props,
    UIComponent: ServiceFormUI,
    isService: true
  }
  return <ProductFormController {...serviceFormProps} />
}
