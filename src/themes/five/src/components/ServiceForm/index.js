import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useUtils, useLanguage, useSession, useConfig, ProductForm as ProductFormController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Alert } from '../Confirm'
import { Modal } from '../Modal'
import { LoginForm } from '../LoginForm'
import { SignUpForm } from '../SignUpForm'
import { ForgotPasswordForm } from '../ForgotPasswordForm'
import { useTheme } from 'styled-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { ChevronLeft, ChevronRight, ChevronDown } from 'react-bootstrap-icons'
import BsCaretLeftFill from '@meronex/icons/bs/BsCaretLeftFill'
import { Button } from '../../styles/Buttons'
import moment from 'moment'
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
  StatusInfo,
  DropDownWrapper,
  DropDownTitle,
  EmptyProfessional,
  SkeletonBlock,
  OrderTimeWrapper,
  DateWrapper,
  MonthYearLayer,
  DaysSwiper,
  Day,
  DayName,
  DayNumber,
  TimeListWrapper,
  TimeItem,
  ClosedBusinessMsg
} from './styles'
SwiperCore.use([Navigation])

const maxDate = 40

const ServiceFormUI = (props) => {
  const {
    productObject,
    professionalSelected,
    handleSave,
    isSoldOut,
    maxProductQuantity,
    productCart,
    isCartProduct,
    professionalListState
  } = props

  const { product, loading, error } = productObject
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parsePrice, parseDate }] = useUtils()
  const [{ auth }, { login }] = useSession()
  const [modalPageToShow, setModalPageToShow] = useState('login')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isDropDown, setIsDropDown] = useState(false)
  const [currentProfessional, setCurrentProfessional] = useState(null)
  const [timeList, setTimeList] = useState([])
  const [timeSelected, setTimeSelected] = useState(null)
  const [selectDate, setSelectedDate] = useState(new Date())
  const [isEnabled, setIsEnabled] = useState(false)
  const [datesList, setDatesList] = useState([])

  const dropDownRef = useRef()

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
    if (!currentProfessional?.id) {
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
    const values = {
      serviceTime: moment(dateSelected).utc().format('YYYY-MM-DD HH:mm:00'),
      professional: currentProfessional
    }
    handleSave(values)
  }

  const handleChangeTime = (time) => {
    if (!time || time === timeSelected) return
    const _moment = moment(`${moment(selectDate).format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm').toDate()
    setTimeSelected(time)
    setDateSelected(_moment)
  }

  const isBusyTime = (professional) => {
    if (professional?.busy_times?.length === 0 || !dateSelected) return false
    const valid = professional?.busy_times.some(item => {
      return moment(item?.start).valueOf() <= moment(dateSelected).valueOf() &&
        moment(dateSelected).valueOf() <= moment(item?.end).valueOf()
    })
    return valid
  }

  const handleClickOutside = (e) => {
    if (dropDownRef?.current.contains(e.target)) return
    setIsDropDown(false)
  }

  const handleChangeProfessional = (professional) => {
    setIsDropDown(false)
    setCurrentProfessional(professional)
  }

  const validateSelectedDate = (curdate, menu) => {
    const day = moment(curdate).format('d')
    setIsEnabled(menu?.schedule?.[day]?.enabled || false)
  }

  const getTimes = (curdate, menu) => {
    validateSelectedDate(curdate, menu)
    const date = new Date()
    const selectedDate = new Date(curdate)
    const times = []
    for (var k = 0; k < menu.schedule[selectedDate.getDay()].lapses.length; k++) {
      const open = {
        hour: menu.schedule[selectedDate.getDay()].lapses[k].open.hour,
        minute: menu.schedule[selectedDate.getDay()].lapses[k].open.minute
      }
      const close = {
        hour: menu.schedule[selectedDate.getDay()].lapses[k].close.hour,
        minute: menu.schedule[selectedDate.getDay()].lapses[k].close.minute
      }
      for (let i = open.hour; i <= close.hour; i++) {
        if (date.getDate() !== selectedDate.getDate() || i >= date.getHours()) {
          let hour = ''
          let meridian = ''
          if (configs?.format_time?.value === '12') {
            if (i === 0) {
              hour = '12'
              meridian = ' ' + t('AM', 'AM')
            } else if (i > 0 && i < 12) {
              hour = (i < 10 ? '0' + i : i)
              meridian = ' ' + t('AM', 'AM')
            } else if (i === 12) {
              hour = '12'
              meridian = ' ' + t('PM', 'PM')
            } else {
              hour = ((i - 12 < 10) ? '0' + (i - 12) : `${(i - 12)}`)
              meridian = ' ' + t('PM', 'PM')
            }
          } else {
            hour = i < 10 ? '0' + i : i
          }
          for (let j = (i === open.hour ? open.minute : 0); j <= (i === close.hour ? close.minute : 59); j += 15) {
            if (i !== date.getHours() || j >= date.getMinutes() || date.getDate() !== selectedDate.getDate()) {
              times.push({
                text: hour + ':' + (j < 10 ? '0' + j : j) + meridian,
                value: (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j)
              })
            }
          }
        }
      }
    }
    return times
  }

  const validDate = (date) => {
    if (!date) return
    const _date = moment(date, 'YYYY-MM-DD HH:mm').isSameOrAfter(moment(), 'day')
      ? moment(date).format('YYYY-MM-DD HH:mm')
      : moment().format('YYYY-MM-DD HH:mm')
    return _date
  }

  const handleChangeDate = (date) => {
    setSelectedDate(date)
    setTimeSelected(null)
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

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
    }
  }, [isDropDown])

  useEffect(() => {
    if (!professionalSelected?.schedule) return
    setCurrentProfessional(professionalSelected)
  }, [professionalSelected])

  useEffect(() => {
    if (isCartProduct && professionalListState?.professionals?.length > 0) {
      const professional = professionalListState?.professionals?.find(item => item.id === professionalSelected?.id)
      setCurrentProfessional(professional)
    }
  }, [isCartProduct, professionalListState?.professionals])

  useEffect(() => {
    if (selectDate === null || currentProfessional === null) return
    const _times = getTimes(selectDate, currentProfessional)
    setTimeList(_times)
  }, [selectDate, currentProfessional])

  useEffect(() => {
    const _datesList = []

    for (let i = 0; i < maxDate + 1; i++) {
      _datesList.push(moment(validDate(new Date())).add(i, 'd').format('YYYY-MM-DD'))
    }
    setDatesList(_datesList)
  }, [])

  useEffect(() => {
    if (!productCart?.calendar_event?.start) return
    setSelectedDate(moment.utc(productCart?.calendar_event?.start).local())
    console.log(configs?.format_time?.value)
    setTimeSelected(moment.utc(productCart?.calendar_event?.start).local().format('HH:mm'))
  }, [productCart])

  return (
    <>
      <Container>
        {loading && !error && (
          <SkeletonBlock width={90}>
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={50} />
            <Skeleton variant='rect' height={200} />
          </SkeletonBlock>
        )}
        {product && !loading && (
          <>
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
              <ProfessionalSelectWrapper ref={dropDownRef}>
                <SelectedItem onClick={() => setIsDropDown(prev => !prev)}>
                  {currentProfessional ? (
                    <InfoWrapper>
                      {currentProfessional?.photo ? (
                        <ProfessionalPhoto
                          bgimage={currentProfessional?.photo}
                        />
                      ) : <FaUserAlt />}
                      <NameWrapper>
                        <p>{currentProfessional?.name} {currentProfessional?.lastname}</p>
                        <StatusInfo available={!isBusyTime()}>
                          {isBusyTime(currentProfessional) ? (
                            <>
                              <span className='status'>{t('BUSY_ON_SELECTED_TIME', 'Busy on selected time')}</span>
                            </>
                          ) : (
                            <span className='status'>{t('AVAILABLE', 'Available')}</span>
                          )}
                        </StatusInfo>
                      </NameWrapper>
                    </InfoWrapper>
                  ) : (
                    <p>{t('SELECT_PROFESSIONAL', 'Select professional')}</p>
                  )}
                  <ChevronDown />
                </SelectedItem>
                {isDropDown && (
                  <DropDownWrapper>
                    <DropDownTitle>{t('ANY_PROFESSIONAL_MEMBER', 'Any professional member')}</DropDownTitle>
                    {professionalListState?.professionals?.map((professional) => (
                      <SelectedItem
                        key={professional?.id}
                        isDropDown
                        active={professional?.id === currentProfessional?.id}
                        onClick={() => handleChangeProfessional(professional)}
                      >
                        <InfoWrapper>
                          {professional?.photo ? (
                            <ProfessionalPhoto
                              bgimage={professional?.photo}
                            />
                          ) : <FaUserAlt />}
                          <NameWrapper>
                            <p>{professional?.name} {professional?.lastname}</p>
                            <StatusInfo available={!isBusyTime(professional)}>
                              {isBusyTime(professional) ? (
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
                    ))}
                  </DropDownWrapper>
                )}

              </ProfessionalSelectWrapper>
            </ProfessionalInfoWrapper>
            <ScheduleWrapper>
              <SectionHeader>
                <h2>{t('SCHEDULE', 'Schedule')}</h2>
                <span>{t('REQUIRED', 'Required')}</span>
              </SectionHeader>
              {currentProfessional ? (
                <OrderTimeWrapper>
                  <DateWrapper>
                    <MonthYearLayer>
                      <span>{moment(dateSelected).format('MMMM, yyyy')}</span>
                    </MonthYearLayer>
                    <DaysSwiper left={<BsCaretLeftFill />}>
                      <Swiper
                        spaceBetween={0}
                        navigation
                        breakpoints={{
                          0: {
                            slidesPerView: 4,
                            spaceBetween: 0
                          },
                          400: {
                            slidesPerView: 5,
                            spaceBetween: 0
                          },
                          550: {
                            slidesPerView: 6,
                            spaceBetween: 0
                          },
                          769: {
                            slidesPerView: 7,
                            spaceBetween: 0
                          }
                        }}
                        freeMode
                        watchSlidesProgress
                        className='swiper-datelist'
                        preventClicksPropagation={false}
                      >
                        {
                          datesList.slice(0, Number(maxDate - 1, 10)).map((date, i) => {
                            const dateParts = date.split('-')
                            const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
                            const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2)
                            const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
                            return (
                              <SwiperSlide key={i}>
                                <Day
                                  selected={moment(selectDate).format('YYYY-MM-DD') === date}
                                  onClick={() => handleChangeDate(moment(date))}
                                >
                                  <DayName>{dayName}</DayName>
                                  <DayNumber>{dayNumber}</DayNumber>
                                </Day>
                              </SwiperSlide>
                            )
                          })
                        }
                      </Swiper>
                    </DaysSwiper>
                  </DateWrapper>
                  <TimeListWrapper>
                    {(isEnabled && timeList?.length > 0) ? (
                      <>
                        {timeList.map((time, i) => (
                          <TimeItem
                            key={i}
                            active={timeSelected === time.value}
                            onClick={() => handleChangeTime(time.value)}
                          >
                            <span>{time.text}</span>
                          </TimeItem>
                        ))}
                      </>
                    ) : (
                      <ClosedBusinessMsg>
                        {t('PROFESSIONAL_NOT_AVAILABLE', 'Professional is not available at the moment')}
                      </ClosedBusinessMsg>
                    )}
                  </TimeListWrapper>
                </OrderTimeWrapper>
              ) : (
                <EmptyProfessional>
                  {t('NO_SCHEDULE', 'No schedule')}
                </EmptyProfessional>
              )}
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
                  disabled={isBusyTime(currentProfessional)}
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
          </>
        )}

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
