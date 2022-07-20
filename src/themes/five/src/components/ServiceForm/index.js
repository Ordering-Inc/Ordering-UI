import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useUtils, useLanguage, useOrder } from 'ordering-components'
import { ProductForm as ProductFormController } from './naked'
import { Alert } from '../Confirm'
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
  NameWrapper
} from './styles'
SwiperCore.use([Navigation])

const ServiceFormUI = (props) => {
  const {
    product,
    professionalSelected,
    handleSave
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, parseDate }] = useUtils()
  const [orderStatus] = useOrder()

  const [gallery, setGallery] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleAddProduct = () => {
    if (!professionalSelected?.id) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_PROFESSIONAL_REQUIRED', 'The field professional is required')]
      })
      return
    }
    if (!orderStatus.options?.moment) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_SCHEDULE_REQUIRED', 'The field schedule is required')]
      })
      return
    }
    handleSave()
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
                  <p className='time'>{t('BUSY_ON_SELECTED_TIME', 'Busy on selected time')}</p>
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
          />
        </ScheduleWrapper>
        <ButtonWrapper>
          <span>{orderStatus.options?.moment
            ? parseDate(orderStatus.options?.moment, { outputFormat: 'hh:mm a' })
            : t('ASAP_ABBREVIATION', 'ASAP')}
          </span>
          <Button
            onClick={() => handleAddProduct()}
            color='primary'
          >
            {t('BOOK', 'Book')}
          </Button>
        </ButtonWrapper>
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
