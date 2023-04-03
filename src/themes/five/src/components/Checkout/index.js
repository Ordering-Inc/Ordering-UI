import React, { useEffect, useState } from 'react'
import VscWarning from '@meronex/icons/vsc/VscWarning'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import moment from 'moment'
import { Modal } from '../Modal'
import {
  Checkout as CheckoutController,
  useOrder,
  useSession,
  useApi,
  useLanguage,
  useUtils,
  useValidationFields,
  useConfig,
  useCustomer,
  useEvent
} from 'ordering-components'
import { UpsellingPage } from '../UpsellingPage'
import parsePhoneNumber from 'libphonenumber-js'
import { useHistory } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import EnChevronWithCircleLeft from '@meronex/icons/en/EnChevronWithCircleLeft'
import {
  Container,
  WrapperLeftContainer,
  UserDetailsContainer,
  BusinessDetailsContainer,
  PaymentMethodContainer,
  DriverTipContainer,
  CartContainer,
  WrapperPlaceOrderButton,
  WarningMessage,
  CartsList,
  WarningText,
  WrapperUserDetails,
  WrapperRightContainer,
  WrapperLeftContent,
  CheckOutDivider,
  DriverTipDivider,
  DeliveryOptionsContainer,
  WalletPaymentOptionContainer,
  CartHeader,
  SelectSpotContainer,
  WrapperActionsInput,
  TitleContainer,
  SubtitleContainer,
  BusinessDetails,
  MasterCardCoupon,
  GoToMenu,
  BackIcon,
  ColumnDivider,
  RewardContainer,
  RewardBox,
  RewardBoxContainer,
  RewardDisclaimerContainer,
  CardForm,
  Row,
  Column,
  InputContainer,
  PayCardSelected,
  CardItemContent
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'

import { NotFoundSource } from '../NotFoundSource'

import { AddressDetails } from '../AddressDetails'
import { UserDetails } from '../UserDetails'
import { UserDetails as UserDetailsPF } from '../UserDetails/layouts/pfchangs'
import { PaymentOptions } from '../PaymentOptions'
import { PaymentOptionWallet } from '../PaymentOptionWallet'
import { DriverTips } from '../DriverTips'
import { Cart } from '../Cart'
import { Cart as CartPF } from '../Cart/layouts/pfchangs'

import { Alert } from '../Confirm'
import { Alert as AlertPFChangs } from '../Confirm/layouts/pfchangs'
import { CartContent } from '../CartContent'
import { Select } from '../../styles/Select'
import { PlaceSpot } from '../PlaceSpot'
import { VaXMiCuenta } from '../VaXMiCuenta'
import { MomentContent as MomentContentPF } from '../MomentContent/layouts/pfchangs'
import { getIconCard } from '../../../../../utils'

const mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
}

const CheckoutUI = (props) => {
  const {
    cart,
    errors,
    placing,
    cartState,
    useKioskApp,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder,
    handleOrderRedirect,
    isCustomerMode,
    isResetPaymethod,
    setIsResetPaymethod,
    handleChangeDeliveryOption,
    instructionsOptions,
    deliveryOptionSelected,
    handleStoreRedirect,
    onPlaceOrderClick,
    defaultOptionsVaXMiCuenta,
    vaXMiCuenta,
    handleChangeVaXMiCuenta,
    uberDirect,
    applyCoupon,
    hasCateringProducts,
    cateringHours,
    wowAcumulationPoints,
    configSlug,
    isCSVPopup
  } = props
  const theme = useTheme()
  const [validationFields] = useValidationFields()
  // const [{ options, loading }, { changePaymethod }] = useOrder()
  const [{ options, loading }, { refreshOrderOptions }] = useOrder()
  const [ordering] = useApi()

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [{ user, token }] = useSession()
  const [{ configs }] = useConfig()
  const [customerState] = useCustomer()
  const [events] = useEvent()
  const history = useHistory()
  const [openCardCSV, setOpenCardCSV] = useState(false)
  const [openAddressNotes, setOpenAddressNotes] = useState(false)
  const [values, setValues] = useState({
    cardSecurityCode: '',
    addressNotes: ''
  })
  const [errorsCheckout, setErrorsCheckout] = useState({})

  const [errorCash, setErrorCash] = useState(false)
  const [userErrors, setUserErrors] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isUserDetailsEdit, setIsUserDetailsEdit] = useState(null)
  const [behalfName, setBehalfName] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [requiredFields, setRequiredFields] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [isHideCash, setHideCash] = useState(false)
  const [cateringDayError, setCateringDayError] = useState(false)
  const [openAlertCatering, setOpenAlertCatering] = useState(false)
  const businessConfigs = businessDetails?.business?.configs ?? []
  const isWalletCashEnabled = businessConfigs.find(config => config.key === 'wallet_cash_enabled')?.value === '1'
  const isWalletCreditPointsEnabled = businessConfigs.find(config => config.key === 'wallet_credit_point_enabled')?.value === '1'
  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp
  const layout = theme?.layouts?.checkout?.components?.layout?.type
  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert
  const placeSpotTypes = [3, 4, 5]
  const placeSpotsEnabled = placeSpotTypes.includes(options?.type) && !useKioskApp
  const brandInformation = {
    brand_id: businessDetails?.business?.brand_id,
    branch_id: businessDetails?.business?.integration_id
  }
  // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)

  const daysForApplyCoupon = [0, 2, 4] // Domingo 0
  const isApplyMasterCoupon = !hasCateringProducts?.result && daysForApplyCoupon.includes(moment().days());

  const isDisablePlaceOrderButton = !cart?.valid ||
    (!paymethodSelected && cart?.balance > 0) ||
    placing ||
    errorCash ||
    loading ||
    !cart?.valid_maximum ||
    (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ||
    // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
    (options.type === 1 &&
      validationFields?.fields?.checkout?.driver_tip?.enabled &&
      validationFields?.fields?.checkout?.driver_tip?.required &&
      (Number(cart?.driver_tip) <= 0)) ||
    cateringDayError ||
    hasCateringProducts.loading

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const deliveryOptions = instructionsOptions?.result && instructionsOptions?.result?.filter(option => option?.enabled)?.map(option => {
    return {
      value: option?.id, content: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name), showOnSelected: t(option?.name.toUpperCase().replace(/\s/g, '_'), option?.name)
    }
  })

  const deliveryTipsAvailable = !cartState.loading && cart &&
    cart?.business_id &&
    options.type === 1 &&
    cart?.status !== 2 &&
    validationFields?.fields?.checkout?.driver_tip?.enabled &&
    driverTipsOptions.length > 0 &&
    !useKioskApp

  const businessInformationLoading = (businessDetails?.loading || cartState.loading) && !businessDetails?.error
  const businessInformationAvailable = !cartState.loading && businessDetails?.business && Object.values(businessDetails?.business)?.length > 0

  const handlePlaceOrder = (csvID) => {
    if (!userErrors.length && !requiredFields?.length) {
      const body = {}
      let paymentOptions = null
      if (behalfName) {
        body.on_behalf_of = behalfName
      }
      if (paymethodSelected.gateway === 'wow_rewards') {
        paymentOptions = {
          email: user?.email,
          ...brandInformation
        }
      }
      if (csvID) body.externalcardid = csvID
      handlerClickPlaceOrder && handlerClickPlaceOrder(paymentOptions, body)
      return
    }
    if (requiredFields?.length) {
      setIsOpen(true)
      return
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(error => error)
    })
    setIsUserDetailsEdit(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setIsUserDetailsEdit(false)
  }

  const closeCateringAlert = () => {
    setOpenAlertCatering(false)
  }

  const checkValidationFields = () => {
    setUserErrors([])
    const errors = []
    const notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes']
    const userSelected = isCustomerMode ? customerState.user : user
    const _requiredFields = []

    Object.values(validationFields?.fields?.checkout).map(field => {
      if (field?.enabled && field?.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field?.code]) {
          _requiredFields.push(field?.code)
        }
      }
    })

    if (
      userSelected &&
      !userSelected?.cellphone &&
      ((validationFields?.fields?.checkout?.cellphone?.enabled &&
        validationFields?.fields?.checkout?.cellphone?.required) ||
        configs?.verification_phone_required?.value === '1')
    ) {
      _requiredFields.push('cellphone')
    }
    setRequiredFields(_requiredFields)

    if (userSelected && userSelected?.cellphone) {
      if (userSelected?.country_phone_code) {
        let phone = null
        phone = `+${userSelected?.country_phone_code}${userSelected?.cellphone}`
        const phoneNumber = parsePhoneNumber(phone)
        if (!phoneNumber?.isValid()) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'))
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))
      }
    }

    setUserErrors(errors)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const checkAddressNote = (isCSV) => {
    if (!options?.address?.address_notes) {
      setOpenAddressNotes(true)
      return
    }
    isCSV ? setOpenCardCSV(true) : handlePlaceOrder()
  }

  const handleSubmitAddressNotes = e => {
    e.preventDefault()
    const numeroPalabras = values?.addressNotes?.split(' ').length
    if (values.addressNotes === '' || numeroPalabras < 3) {
      setErrorsCheckout({ addressNotes: false, addressBorder: true })
      return
    }
    saveAddress({ address_notes: values.addressNotes })
    refreshOrderOptions()
    setOpenAddressNotes(false)
    paymethodSelected?.gateway === 'openpay' && isCSVPopup ? setOpenCardCSV(true) : handlePlaceOrder()
  }
  const saveAddress = async (values) => {
    try {
      const { content } = await ordering
        .users(user.id)
        .addresses(options?.address?.id)
        .save({ ...values }, { token })
      if (!content.error) {
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    if ((paymethodSelected?.data?.brandCardName === 'american_express' && values.cardSecurityCode.length !== 4) || (paymethodSelected?.data?.brandCardName !== 'american_express' && values.cardSecurityCode.length !== 3)) {
      setErrorsCheckout({ csv: false, border: true })
    } else {
      setErrorsCheckout({})
      setOpenCardCSV(false)
      setOpenAddressNotes(false)
      handlePlaceOrder(values?.cardSecurityCode)
      setValues({ cardSecurityCode: '' })
    }
  }

  useEffect(() => {
    if (validationFields && validationFields?.fields?.checkout) {
      checkValidationFields()
    }
  }, [validationFields, user, customerState])

  useEffect(() => {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  useEffect(() => {
    if (isResetPaymethod) {
      handlePaymethodChange(null)
      setIsResetPaymethod(true)
      // changePaymethod(cart?.business_id, null, null)
    }
  }, [isResetPaymethod])

  useEffect(() => {
    if (uberDirect?.amountToHide && !(cart?.total <= uberDirect.amountToHide) && options?.type === 1) {
      setHideCash(true)
      if (paymethodSelected === null || paymethodSelected?.gateway !== 'cash') return
      handlePaymethodChange(null)
    } else {
      setHideCash(false)
    }
  }, [uberDirect, cart, options, paymethodSelected])

  useEffect(() => {
    if ((!configs?.advanced_offers_module?.value && (paymethodSelected?.gateway !== 'openpay' || hasCateringProducts?.result) && !cartState.loading && cart?.coupon && cart?.coupon === 'DLVMASTER30')) {
      applyCoupon({
        business_id: cart?.business_id,
        coupon: null
      })
    }
  }, [paymethodSelected, cartState.loading])

  useEffect(() => {
    if (cart?.products?.length) return
    handleStoreRedirect(cart?.business?.slug)
  }, [cart?.products])

  useEffect(() => {
    if (hasCateringProducts.result) {
      setOpenAlertCatering(true)
    }
  }, [hasCateringProducts])

  useEffect(() => {
    events.emit('in-checkout', cart)
  }, [])

  const CartComponent = layout === 'pfchangs'
    ? CartPF
    : Cart

  const UserDetailsComponent = layout === 'pfchangs'
    ? UserDetailsPF
    : UserDetails

  return (
    <Container>
      <WrapperLeftContainer>
        <WrapperLeftContent>
          <TitleContainer>
            {layout !== 'pfchangs' && (
              <ArrowLeft className='back-arrow' onClick={() => history.goBack()} />
            )}
            {!cartState.loading && cart?.status === 2 && (
              <WarningMessage>
                <VscWarning />
                <h1>
                  {t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page')}
                </h1>
              </WarningMessage>
            )}
            <h2 className='checkout-title'>{t('CHECK_OUT', 'Checkout')}</h2>
          </TitleContainer>
          {layout === 'pfchangs' && (
            <>
              {cart?.business?.slug && (
                <GoToMenu onClick={() => handleStoreRedirect(cart?.business?.slug)}>
                  <ColumnDivider />
                  <BackIcon>
                    <EnChevronWithCircleLeft color={theme.colors.primary} />
                  </BackIcon>
                  <p>{t('MENU', 'Menu')}</p>
                </GoToMenu>
              )}
              <SubtitleContainer>
                <h2>{t('YOUR_INFORMATION', 'Your Information')}</h2>
              </SubtitleContainer>
            </>
          )}
          {!useKioskApp ? (
            <>
              {(businessDetails?.loading || cartState.loading) ? (
                <div style={{ width: '100%', marginBottom: '20px' }}>
                  <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  <Skeleton height={150} />
                </div>
              ) : (
                <AddressDetails
                  location={businessDetails?.business?.location}
                  businessLogo={businessDetails?.business?.logo || theme.images?.dummies?.businessLogo}
                  isCartPending={cart?.status === 2}
                  businessId={cart?.business_id}
                  apiKey={configs?.google_maps_api_key?.value}
                  mapConfigs={mapConfigs}
                  isCustomerMode={isCustomerMode}
                />
              )}
              <UserDetailsContainer>
                <WrapperUserDetails>
                  {cartState.loading || (isCustomerMode && !customerState?.user?.id) ? (
                    <div>
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      <Skeleton height={35} style={{ marginBottom: '10px' }} />
                    </div>
                  ) : (
                    <UserDetailsComponent
                      isUserDetailsEdit={isUserDetailsEdit}
                      cartStatus={cart?.status}
                      businessId={cart?.business_id}
                      useValidationFields
                      useDefualtSessionManager
                      useSessionUser={!isCustomerMode}
                      isCustomerMode={isCustomerMode}
                      userData={isCustomerMode && customerState.user}
                      userId={isCustomerMode && customerState?.user?.id}
                      isSuccess={isSuccess}
                      isCheckout
                      isEdit={layout === 'pfchangs'}
                    />
                  )}
                </WrapperUserDetails>
              </UserDetailsContainer>
              {layout !== 'pfchangs' && (
                <BusinessDetailsContainer>
                  {businessInformationLoading && (
                    <div>
                      <div>
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                        <Skeleton height={35} style={{ marginBottom: '10px' }} />
                      </div>
                    </div>
                  )}
                  {businessInformationAvailable && layout !== 'pfchangs' && (
                    <div>
                      <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
                      <div>
                        <p>{businessDetails?.business?.address}</p>
                        <p>{businessDetails?.business?.name}</p>
                        <p>{businessDetails?.business?.email}</p>
                        <p>{businessDetails?.business?.cellphone}</p>
                      </div>
                    </div>
                  )}
                  {businessDetails?.error && businessDetails?.error?.length > 0 && (
                    <div>
                      <h1>{t('BUSINESS_DETAILS', 'Business Details')}</h1>
                      <NotFoundSource
                        content={businessDetails?.error[0]?.message || businessDetails?.error[0]}
                      />
                    </div>
                  )}
                </BusinessDetailsContainer>
              )}
              {layout !== 'pfchangs' && (
                <CheckOutDivider />
              )}
            </>
          ) : (
            <WrapperActionsInput>
              <h1>
                {t('WHATS_YOUR_NAME', "What's your name?")}
              </h1>
              <Input
                placeholder={t('WRITE_YOUR_NAME', 'Write your name')}
                autoComplete='off'
                onChange={(e) => setBehalfName(e?.target?.value)}
              />
            </WrapperActionsInput>
          )}

          {cartState.loading && (
            <div>
              <div>
                <Skeleton height={35} style={{ marginBottom: '10px' }} />
                <Skeleton height={55} style={{ marginBottom: '10px' }} />
              </div>
            </div>
          )}

          {!useKioskApp && (
            <>
              {layout === 'pfchangs' && !hasCateringProducts.loading && (
                <>
                  {/* <SubtitleContainer>
                    <h2>{t('PREORDER_CONFIGUTARION', 'Preorder configuration')}</h2>
                  </SubtitleContainer> */}
                  <MomentContentPF
                    hasCateringProducts={hasCateringProducts.result}
                    cateringHours={cateringHours}
                    cateringDayError={cateringDayError}
                    setCateringDayError={setCateringDayError}
                  />
                </>
              )}
              {!cartState.loading && deliveryOptionSelected !== undefined && options?.type === 1 && (
                <>
                  {layout === 'pfchangs' && (
                    <SubtitleContainer>
                      <h2>{t('DELIVERY_DETAILS', 'Delivery Details')}</h2>
                    </SubtitleContainer>
                  )}
                  <DeliveryOptionsContainer>
                    {layout !== 'pfchangs' && (
                      <h2>{t('DELIVERY_DETAILS', 'Delivery Details')}</h2>
                    )}
                    <Select
                      defaultValue={deliveryOptionSelected}
                      options={deliveryOptions}
                      onChange={(val) => handleChangeDeliveryOption(val)}
                    />
                  </DeliveryOptionsContainer>
                </>
              )}
              {layout !== 'pfchangs' && (
                <CheckOutDivider />
              )}
            </>
          )}

          {
            deliveryTipsAvailable &&
            layout === 'pfchangs' && (
              <>
                <SubtitleContainer>
                  <h2>{t('ADD_TIP', 'Add Tip')}</h2>
                </SubtitleContainer>
                <DriverTipContainer>
                  <DriverTips
                    businessId={cart?.business_id}
                    driverTipsOptions={driverTipsOptions}
                    isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                    driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                      ? cart?.driver_tip
                      : cart?.driver_tip_rate}
                    cart={cart}
                    useOrderContext
                    pfchangs
                  />
                </DriverTipContainer>
              </>
            )
          }

          {!cartState.loading && cart && (
            <>
              {layout === 'pfchangs' && (
                <SubtitleContainer>
                  <h2>{t('PAYMENT_METHODS', 'Payment Methods')}</h2>
                </SubtitleContainer>
              )}
              <PaymentMethodContainer>
                {layout !== 'pfchangs' && (
                  <h1>{t('PAYMENT_METHODS', 'Payment Methods')}</h1>
                )}
                {!cartState.loading && cart?.status === 4 && (
                  <WarningMessage style={{ marginTop: 20 }}>
                    <VscWarning />
                    <h1>
                      {t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again')}
                    </h1>
                  </WarningMessage>
                )}
                {isApplyMasterCoupon && !hasCateringProducts.loading && (
                  <MasterCardCoupon>
                    <img src={"https://d347gjkxx0g7x1.cloudfront.net/wow-plus/banners/dev/Banner_APP_Wow_MasterCard.jpg"} />
                  </MasterCardCoupon>
                )}
                <PaymentOptions
                  cart={cart}
                  useKioskApp={useKioskApp}
                  isDisabled={cart?.status === 2}
                  businessId={businessDetails?.business?.id}
                  isLoading={businessDetails.loading}
                  paymethods={businessDetails?.business?.paymethods}
                  onPaymentChange={handlePaymethodChange}
                  errorCash={errorCash}
                  setErrorCash={setErrorCash}
                  handleOrderRedirect={handleOrderRedirect}
                  isCustomerMode={isCustomerMode}
                  paySelected={paymethodSelected}
                  handlePlaceOrder={handlePlaceOrder}
                  onPlaceOrderClick={onPlaceOrderClick}
                  brandInformation={brandInformation}
                  isHideCash={isHideCash}
                  isApplyMasterCoupon={isApplyMasterCoupon}
                  hasCateringProducts={hasCateringProducts}
                />
              </PaymentMethodContainer>
            </>
          )}

          {isWalletEnabled && !businessDetails?.loading && (
            <WalletPaymentOptionContainer>
              <PaymentOptionWallet
                cart={cart}
                businessConfigs={businessDetails?.business?.configs}
              />
            </WalletPaymentOptionContainer>
          )}
        </WrapperLeftContent>
      </WrapperLeftContainer>
      <WrapperRightContainer>
        {layout === 'pfchangs' && (
          <>
            {businessInformationLoading && (
              <div>
                <div>
                  <Skeleton height={35} style={{ marginBottom: '10px' }} />
                  <Skeleton height={35} style={{ marginBottom: '10px' }} />
                </div>
              </div>
            )}
            {!vaXMiCuenta.loading && defaultOptionsVaXMiCuenta.enable && (
              <VaXMiCuenta
                defaultOptionsVaXMiCuenta={defaultOptionsVaXMiCuenta}
                vaXMiCuenta={vaXMiCuenta}
                handleChangeVaXMiCuenta={handleChangeVaXMiCuenta}
              />
            )}
            {businessInformationAvailable && (
              <BusinessDetails>
                <img src={businessDetails?.business?.header} />
                <div>
                  <h2>{businessDetails?.business?.name}</h2>
                  <span onClick={() => cart?.business?.slug && handleStoreRedirect(cart?.business?.slug)}>{t('GO_TO_BUSINESS', 'Go to business')}</span>
                </div>
              </BusinessDetails>
            )}
          </>
        )}
        {!cartState.loading && placeSpotsEnabled && (
          <SelectSpotContainer>
            <PlaceSpot
              isCheckout
              isInputMode
              isHomeStyle
              cart={cart}
              spotNumberDefault={cartState?.cart?.spot_number ?? cart?.spot_number}
              vehicleDefault={cart?.vehicle}
            />
          </SelectSpotContainer>
        )}
        {
          deliveryTipsAvailable &&
          layout !== 'pfchangs' && (
            <>
              <DriverTipContainer>
                <h1>{t('DRIVER_TIPS', 'Driver Tips')}</h1>
                <p>{t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')}</p>
                <DriverTips
                  businessId={cart?.business_id}
                  driverTipsOptions={driverTipsOptions}
                  isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
                  isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
                  driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                    ? cart?.driver_tip
                    : cart?.driver_tip_rate}
                  cart={cart}
                  useOrderContext
                />
              </DriverTipContainer>
              <DriverTipDivider />
            </>
          )
        }

        {!cartState.loading && cart && (
          <CartContainer>
            {layout !== 'pfchangs' && (
              <CartHeader>
                <h1>{t('MOBILE_FRONT_YOUR_ORDER', 'Your order')}</h1>
                <span onClick={() => cart?.business?.slug && handleStoreRedirect(cart?.business)}>{('ADD_PRODUCTS', 'Add products')}</span>
              </CartHeader>
            )}
            <CartComponent
              isCartPending={cart?.status === 2}
              cart={cart}
              useKioskApp={useKioskApp}
              isCheckout
              isProducts={cart?.products?.length || 0}
              hasCateringProducts={hasCateringProducts}
            />
          </CartContainer>
        )}
        {!wowAcumulationPoints?.loading && !wowAcumulationPoints?.error && paymethodSelected?.gateway !== 'wow_rewards' && configSlug !== 'starbucks' && (
          <RewardContainer>
              <RewardBox>
                <RewardBoxContainer>
                  <div className='image-reward'>
                    <div style={{paddingRight: 10}}><img src={theme.images?.general?.rewardsIcon} /></div>
                    <div style={{margin: 'auto'}} className="name">{t('WOW_CART_NEW_POINTS', 'Saldo que acumulas')}</div>
                  </div>
                  <div className="value">{parsePrice(wowAcumulationPoints?.result?.pesos)}</div>
                </RewardBoxContainer>
              </RewardBox>
              <RewardDisclaimerContainer>
                {t('REWARDS_DISCLAIMER','*Cálculo aproximado, el saldo real se verá reflejado máx en 24 hrs.')}
              </RewardDisclaimerContainer>
          </RewardContainer>
        )}
        {!cartState.loading && cart && cart?.status !== 2 && (
          <WrapperPlaceOrderButton>
            <Button
              color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100))) ? 'secundary' : 'primary'}
              disabled={isDisablePlaceOrderButton}
              onClick={() => (paymethodSelected?.gateway === 'openpay' && isCSVPopup) ? checkAddressNote(true) : checkAddressNote()}
            >
              {!cart?.valid_maximum ? (
                `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
              ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
                `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
              ) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
            </Button>
          </WrapperPlaceOrderButton>
        )}

        {!cart?.valid_address && cart?.status !== 2 && (
          <WarningText>
            {t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')}
          </WarningText>
        )}

        {(!paymethodSelected && cart?.balance > 0) && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')}
          </WarningText>
        )}

        {!cart?.valid_products && cart?.status !== 2 && (
          <WarningText>
            {t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')}
          </WarningText>
        )}

        {cateringDayError && (
          <WarningText>
            {t('WARNING_CATERING_BUSINESS_CLOSED', 'The Business will be closed before preparing catering')}
          </WarningText>
        )}

        {/* {placeSpotTypes.includes(options?.type) && !cart?.place && hasBusinessPlaces && (
          <WarningText>
            {t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')}
          </WarningText>
        )} */}

        {options.type === 1 &&
          validationFields?.fields?.checkout?.driver_tip?.enabled &&
          validationFields?.fields?.checkout?.driver_tip?.required &&
          (Number(cart?.driver_tip) <= 0) && (
            <WarningText>
              {t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')}
            </WarningText>
          )}
      </WrapperRightContainer>
      <AlertComponent
        title={t('CUSTOMER_DETAILS', 'Customer Details')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <AlertComponent
        title={t('DISCLAIMER_CATERING_TITLE', 'Disclaimer catering title')}
        content={t('DISCLAIMER_CATERING', 'Disclaimer Catering')}
        acceptText={t('ACCEPT', 'Accept')}
        open={openAlertCatering}
        onClose={() => closeCateringAlert()}
        onAccept={() => closeCateringAlert()}
        closeOnBackdrop={false}
      />
      <Modal
        open={isOpen}
        width='760px'
        padding='30px'
        onClose={() => setIsOpen(false)}
      >
        <UserDetails
          isUserDetailsEdit={isUserDetailsEdit}
          cartStatus={cart?.status}
          businessId={cart?.business_id}
          useValidationFields
          useDefualtSessionManager
          useSessionUser={!isCustomerMode}
          isCustomerMode={isCustomerMode}
          userData={isCustomerMode && customerState.user}
          userId={isCustomerMode && customerState?.user?.id}
          requiredFields={requiredFields}
          setIsSuccess={setIsSuccess}
          isCheckout
          isEdit
          isModal
          onClose={() => setIsOpen(false)}
        />
      </Modal>
      <Modal
        title={openCardCSV ? t('CSV_DESCRIPTION', 'CSV_DESCRIPTION') : t('ADD_NOTES_TO_ADDRESS', 'ADD_NOTES_TO_ADDRESS') }
        className='modal-info'
        open={openAddressNotes || openCardCSV}
        onClose={() => {
          setOpenAddressNotes(false)
          setOpenCardCSV(false)
        }}
        width='70%'
      >
        {openCardCSV && (
          <CardForm>
            <PayCardSelected>
              <CardItemContent>
                <span className='brand'>
                  <img src={getIconCard(paymethodSelected?.data?.card?.brand || paymethodSelected?.data?.brandCardName)} alt={paymethodSelected?.data?.card?.brand || paymethodSelected?.data?.brandCardName} />
                </span>
                <span>
                  XXXX-XXXX-XXXX-{paymethodSelected?.data?.card?.last4}
                </span>
              </CardItemContent>
            </PayCardSelected>
            <Row>
              <InputContainer isValid={errorsCheckout.csv} showBorder={errorsCheckout.border}>
                <Input
                  name='cardSecurityCode'
                  id='csv'
                  type={'password'}
                  minLength={3}
                  maxLength={paymethodSelected?.data && paymethodSelected?.data?.brandCardName !== 'american_express' ? 3 : 4}
                  onChange={handleChange}
                  placeholder='CVV'
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </InputContainer>
            </Row>
            <Button onClick={handleSubmit} color='primary'>
              {t('CONTINUE', 'CONTINUE')}
            </Button>
          </CardForm>
        )}
        {openAddressNotes && (
          <CardForm>
            <Column>
              <p>{t('ENTER_REFERENCE', 'ENTER_REFERENCE')}</p>
              <InputContainer isValid={errorsCheckout.addressNotes} showBorder={errorsCheckout.addressBorder}>
                <TextArea
                  name='addressNotes'
                  id='addressNotes'
                  type='text'
                  maxLength={100}
                  onChange={handleChange}
                  placeholder={t('ADDRESS_NOTES', 'Address Notes')}
                />
              </InputContainer>
            </Column>
            <Button onClick={handleSubmitAddressNotes} color='primary'>
              {t('CONTINUE', 'CONTINUE')}
            </Button>
          </CardForm>
        )}
      </Modal>
    </Container>
  )
}

export const Checkout = (props) => {
  const {
    errors,
    clearErrors,
    // query,
    cartUuid,
    handleOrderRedirect,
    handleCheckoutRedirect,
    handleSearchRedirect,
    handleCheckoutListRedirect
  } = props

  const [orderState, { confirmCart, applyCoupon }] = useOrder()
  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const theme = useTheme()

  const [cartState, setCartState] = useState({ loading: true, error: null, cart: null })

  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [currentCart, setCurrentCart] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isResetPaymethod, setIsResetPaymethod] = useState(false)

  const cartsWithProducts = orderState?.carts && (Object.values(orderState?.carts)?.filter(cart => cart?.products && cart?.products?.length) || null)
  const isPfchangs = theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs'
  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    clearErrors && clearErrors()
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCurrentCart(null)
    setCanOpenUpselling(false)
    handleCheckoutRedirect(currentCart.uuid)
  }

  useEffect(() => {
    if (!orderState.loading && currentCart?.business_id) {
      setCurrentCart(...Object.values(orderState.carts)?.filter(cart => cart?.business_id === currentCart?.business_id))
    }
  }, [orderState.loading])

  useEffect(() => {
    if (currentCart?.products) {
      setOpenUpselling(true)
    }
  }, [currentCart])

  useEffect(() => {
    if (errors?.length) {
      setAlertState({
        open: true,
        content: errors
      })
    }
  }, [errors])

  const getOrder = async (cartId) => {
    try {
      setCartState({ ...cartState, loading: true })
      const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
      const url = userCustomer
        ? `${ordering.root}/carts/${cartId}?user_id=${userCustomer?.id}`
        : `${ordering.root}/carts/${cartId}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId
        }
      })
      const { result } = await response.json()

      if (result.status === 1 && result.order?.uuid) {
        handleOrderRedirect(result.order.uuid)
        setCartState({ ...cartState, loading: false })
      } else if (result.status === 2) {
        try {
          const confirmCartRes = await confirmCart(cartUuid)
          if (confirmCartRes.error) {
            setAlertState({
              open: true,
              content: typeof confirmCartRes.result === 'string'
                ? [confirmCartRes.result]
                : confirmCartRes.result
            })
            setIsResetPaymethod(true)
          }
          if (confirmCartRes.result.order?.uuid) {
            handleOrderRedirect(confirmCartRes.result.order.uuid)
          }
          setCartState({
            ...cartState,
            loading: false,
            cart: result
          })
        } catch (error) {
          setAlertState({
            open: true,
            content: [error.message]
          })
        }
      } else {
        let cart = Array.isArray(result) ? null : result
        const spotNumberFromStorage = window.localStorage.getItem('table_number')
        if (spotNumberFromStorage) {
          const spotNumber = JSON.parse(spotNumberFromStorage)?.tableNumber
          const slug = JSON.parse(spotNumberFromStorage)?.slug
          if (cart?.business?.slug === slug) {
            cart = {
              ...cart,
              spot_number: parseInt(spotNumber, 10)
            }
          }
        }
        setCartState({
          ...cartState,
          loading: false,
          cart,
          error: cart ? null : result
        })
      }
    } catch (e) {
      setCartState({
        ...cartState,
        loading: false,
        error: [e.toString()]
      })
    }
  }

  useEffect(() => {
    if (token && cartUuid) {
      getOrder(cartUuid)
    }
  }, [token, cartUuid])

  const checkoutProps = {
    ...props,
    UIComponent: CheckoutUI,
    cartState,
    uuid: cartUuid,
    isResetPaymethod,
    setIsResetPaymethod,
    applyCoupon,
    isPfchangs
  }

  return (
    <>
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length === 0 && (
        <NotFoundSource
          content={t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.')}
          btnTitle={t('SEARCH_REDIRECT', 'Go to Businesses')}
          onClickButton={handleSearchRedirect}
        />
      )}
      {!cartUuid && orderState.carts && cartsWithProducts && cartsWithProducts?.length > 0 && (
        <CartsList>
          <CartContent
            carts={cartsWithProducts}
            isOrderStateCarts={!!orderState.carts}
            isForceOpenCart
          />
        </CartsList>
      )}

      {cartUuid && cartState.error && cartState.error?.length > 0 && (
        <NotFoundSource
          content={t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.')}
          btnTitle={t('CHECKOUT_REDIRECT', 'Go to Checkout list')}
          onClickButton={handleCheckoutListRedirect}
        />
      )}

      {cartState.loading && !(window.location.pathname === '/checkout') && (
        <Container>
          <WrapperLeftContainer>
            <Skeleton height={30} />
            <Skeleton height={100} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '15px' }} />
            <Skeleton height={25} />
            <Skeleton height={25} />
          </WrapperLeftContainer>
          <WrapperRightContainer>
            <Skeleton height={25} />
            <Skeleton height={50} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
            <Skeleton height={60} />
            <Skeleton height={80} style={{ marginBottom: '20px' }} />
            <Skeleton height={25} />
          </WrapperRightContainer>
        </Container>
      )}

      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <CheckoutController {...checkoutProps} />}

      {currentCart?.products && (
        <UpsellingPage
          businessId={currentCart?.business_id}
          cartProducts={currentCart?.products}
          business={currentCart?.business}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}

      <AlertComponent
        title={t('CHECKOUT ', 'Checkout')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
