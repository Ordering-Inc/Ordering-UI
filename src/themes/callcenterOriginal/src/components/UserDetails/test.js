import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi, useCustomer, useWebsocket, useValidationFields as useValidationsFieldsController, ToastType, useToast } from 'ordering-components'
import parsePhoneNumber from 'libphonenumber-js'
const CONDITIONAL_CODES = ['1787']

/**
 * Component to manage user form details behavior without UI component
 */
export const UserFormDetails = (props) => {
  const {
    UIComponent,
    useSessionUser,
    refreshSessionUser,
    useDefualtSessionManager,
    userId,
    user,
    useValidationFields,
    handleButtonUpdateClick,
    handleSuccessUpdate,
    isCustomerMode,
    isSuccess,
    onClose,
    dontToggleEditMode,
    isOrderTypeValidationField,
    checkoutFields,
    setUserConfirmPhone
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [session, { changeUser }] = useSession()
  const [customer, { setUserCustomer }] = useCustomer()
  const [validationFields] = useValidationsFieldsController()
  const [, { showToast }] = useToast()
  const [isEdit, setIsEdit] = useState(!!props?.isEdit)
  const [userState, setUserState] = useState({ loading: false, loadingDriver: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [notificationsGroup, setNotificationsGroup] = useState({ loading: false, changes: {}, result: { error: false } })
  const [singleNotifications, setSingleNotifications] = useState({ loading: false, changes: {}, result: { error: false } })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [removeAccountState, setAccountState] = useState({ loading: false, error: null, result: null })

  const requestsState = {}
  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if ((userId || (useSessionUser && refreshSessionUser)) && !session.loading && !props.userData) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, loadingDriver: false, result: response.content })
        if (response.content.result) {
          if (!isCustomerMode) {
            changeUser({
              ...session.user,
              ...response.content.result
            })
          } else {
            setUserCustomer({
              ...customer.user,
              ...response.content.result
            }, true)
          }
        }
      }).catch((err) => {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
            loadingDriver: false,
            loading: false,
            result: {
              error: true,
              result: err.message
            }
          })
        }
      })
    } else {
      setUserState({
        loading: false,
        loadingDriver: false,
        result: {
          error: false,
          result: (useSessionUser && !refreshSessionUser) ? session.user : user
        }
      })
    }

    return () => {
      if (requestsState.user) {
        requestsState.user.cancel()
      }
    }
  }, [session.loading, isSuccess])

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Default fuction for user profile workflow
   */
  const handleUpdateClick = async (changes, isImage, image) => {
    if (handleButtonUpdateClick) {
      return handleButtonUpdateClick(userState.result.result, formState.changes)
    }
    try {
      let response
      setFormState({ ...formState, loading: true })
      const _changes = { ...formState.changes, ...(changes ?? {}) }

      if (!_changes?.country_code && _changes?.country_phone_code && _changes?.cellphone) {
        const parsedNumber = parsePhoneNumber(`+${_changes?.country_phone_code}${_changes?.cellphone}`)
        _changes.country_code = parsedNumber?.country
      }

      if (CONDITIONAL_CODES.includes(_changes?.country_phone_code)) {
        if (_changes?.country_code === 'PR') {
          _changes.cellphone = `787${_changes.cellphone}`
          _changes.country_phone_code = '1'
        }
      }

      formState.changes = _changes

      if (isImage) {
        response = await ordering.users(props?.userData?.id || userState.result.result.id).save({ photo: image || formState.changes.photo }, {
          accessToken: accessToken
        })

        const { photo, ...changes } = formState.changes

        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : changes,
          result: response.content,
          loading: false
        })
      } else {
        let _changes = formState.changes
        if (props?.userData?.guest_id || userState.result.result?.guest_id) {
          if (formState.changes.email) {
            _changes = {
              ..._changes,
              guest_email: formState.changes.email
            }
          }
          if (formState.changes.cellphone) {
            _changes = {
              ..._changes,
              guest_cellphone: formState.changes.cellphone
            }
          }

          delete _changes.email
          delete _changes.cellphone
        }
        response = await ordering.users(props?.userData?.id || userState.result.result.id).save(_changes, {
          accessToken: accessToken
        })
        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : {},
          result: response.content,
          loading: !!changes.confirmDataLayout || false
        })
      }

      if (!response.content.error) {
        setUserState({
          ...userState,
          loadingDriver: false,
          result: {
            ...userState.result,
            ...response.content
          }
        })
        if (!isCustomerMode) {
          changeUser({
            ...session.user,
            ...response.content.result
          })
        } else {
          setUserCustomer({
            ...customer.user,
            ...response.content.result
          }, changes?.setCustomerInLocal ?? true)
        }

        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }

        if (changes.confirmDataLayout) {
          handleRequestCustomerAddress()
        }

        onClose && onClose()

        if (!image && !dontToggleEditMode) {
          setIsEdit(!isEdit)
        }
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          photo: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useValidationFields ||
      (!validationFields.loading && !validationFields.fields?.checkout?.[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout?.[fieldName] &&
        validationFields.fields?.checkout?.[fieldName]?.enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    let checkoutRequiredFields = null
    if (isOrderTypeValidationField) {
      checkoutRequiredFields = session?.user?.guest_id
        ? checkoutFields?.filter(field => field?.enabled && field?.required_with_guest)?.map(field => field?.validation_field?.code)
        : checkoutFields?.filter(field => field?.enabled && field?.required)?.map(field => field?.validation_field?.code)
    }
    return isOrderTypeValidationField
      ? checkoutRequiredFields?.includes(fieldName)
      : (useValidationFields &&
        !validationFields.loading &&
        validationFields.fields?.checkout?.[fieldName] &&
        validationFields.fields?.checkout?.[fieldName]?.enabled &&
        validationFields.fields?.checkout?.[fieldName]?.required)
  }

  const handleToggleAvalaibleStatusDriver = async (newValue) => {
    try {
      setUserState({ ...userState, loadingDriver: true })
      const response = await ordering
        .users(session?.user?.id)
        .save(
          { available: newValue },
          {
            accessToken: accessToken
          }
        )

      if (response.content.error) {
        setUserState({
          ...userState,
          loadingDriver: false,
          result: { ...userState.result, error: response.content.result }
        })
      }

      if (!response.content.error) {
        setUserState({
          ...userState,
          loadingDriver: false,
          result: { ...response.content }
        })
        changeUser({
          ...session.user,
          ...response.content.result
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUserState({
          ...userState,
          loadingDriver: false,
          result: {
            error: true,
            result: err.message
          }
        })
      }
    }
  }

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  const sendVerifyPhoneCode = async (values) => {
    const body = {
      cellphone: values.cellphone,
      country_phone_code: parseInt(values.country_phone_code)
    }
    try {
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify(body)
      })
      const res = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: res
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const updatePromotions = async (change, setState, state) => {
    try {
      const response = await ordering.users(props?.userData?.id || userState.result.result.id).save(change, {
        accessToken: accessToken
      })
      setState({
        ...state,
        changes: response.content.error ? change : {},
        result: response.content,
        loading: false
      })

      if (!response.content.error) {
        setUserState({
          ...userState,
          loadingDriver: false,
          result: {
            ...userState.result,
            ...response.content
          }
        })
        if (!isCustomerMode) {
          changeUser({
            ...session.user,
            ...response.content.result
          })
        } else {
          setUserCustomer({
            ...customer.user,
            ...response.content.result
          }, change?.setCustomerInLocal ?? true)
        }

        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }
      }
    } catch (err) {
      setState({
        ...state,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  const handleChangePromotions = (enabled, isSingle = false) => {
    const _changes = {
      settings: {
        email: {
          newsletter: !isSingle ? enabled : enabled?.email,
          promotions: !isSingle ? enabled : enabled?.email
        },
        notification: {
          newsletter: !isSingle ? enabled : enabled?.notification,
          promotions: !isSingle ? enabled : enabled?.notification
        },
        sms: {
          newsletter: !isSingle ? enabled : enabled?.sms,
          promotions: !isSingle ? enabled : enabled?.sms
        }
      }
    }

    const state = {
      changes: {
        ...[isSingle ? singleNotifications : notificationsGroup]?.changes,
        ..._changes
      },
      loading: true
    }
    if (isSingle) {
      setSingleNotifications({ ...singleNotifications, ...state })
      return
    }
    setNotificationsGroup({ ...notificationsGroup, ...state })
  }

  const handleChangeNotifications = (value) => {
    setFormState({
      ...formState,
      changes: {
        ...formState?.changes,
        settings: { email: { newsletter: value?.email, promotions: value?.email }, notification: { newsletter: value?.notification, promotions: value?.notification }, sms: { newsletter: value?.sms, promotions: value?.sms } }
      }
    })
  }

  const handleRemoveAccount = async (userId) => {
    const idToDelete = userId ?? session.user.id
    try {
      setAccountState({ ...removeAccountState, loading: true })
      const response = await fetch(`${ordering.root}/users/${idToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      })
      const res = await response.json()
      setAccountState({
        ...removeAccountState,
        loading: false,
        result: res?.result,
        error: res?.error
      })
    } catch (error) {
      setAccountState({
        ...removeAccountState,
        loading: false,
        error: error.message
      })
    }
  }

  const handleRequestCustomerAddress = async () => {
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const response = await fetch(`${ordering.root}/actions/run/custom`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify({
          action: 'request_customer_address',
          user_token_required: true,
          user_id: props?.userData?.id || userState.result.result.id,
          user_token_expiration_time: 10
        })
      })
      const { result, error } = await response.json()
      if (error) {
        showToast(ToastType.Error, result, 5000)
        setFormState({
          ...formState,
          loading: false
        })
        return
      }
      setFormState({
        ...formState,
        loading: false
      })
      setUserConfirmPhone && setUserConfirmPhone({ result: 'OK', open: false })
    } catch (err) {
      showToast(ToastType.Error, err.message, 5000)
    }
  }

  useEffect(() => {
    updatePromotions(
      singleNotifications?.loading ? singleNotifications?.changes : notificationsGroup?.changes,
      singleNotifications?.loading ? setSingleNotifications : setNotificationsGroup,
      singleNotifications?.loading ? singleNotifications : notificationsGroup
    )
  }, [notificationsGroup?.loading, singleNotifications?.loading])

  useEffect(() => {
    const handleUpdateDriver = (data) => {
      const changes = {}
      data.changes?.map(change => (
        changes[change.attribute] = change.new
      ))
      setUserState({
        ...userState,
        loadingDriver: false,
        result: {
          ...userState?.result,
          ...changes
        }
      })
      changeUser({
        ...session.user,
        ...changes
      })
    }

    socket.on('drivers_changes', handleUpdateDriver)
    return () => {
      socket.off('drivers_changes', handleUpdateDriver)
    }
  }, [socket?.socket])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isEdit={isEdit}
          cleanFormState={cleanFormState}
          formState={formState}
          userState={userState}
          removeAccountState={removeAccountState}
          validationFields={validationFields}
          showField={showField}
          singleNotifications={singleNotifications}
          notificationsGroup={notificationsGroup}
          setFormState={setFormState}
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
          handleToggleAvalaibleStatusDriver={handleToggleAvalaibleStatusDriver}
          handleSendVerifyCode={sendVerifyPhoneCode}
          verifyPhoneState={verifyPhoneState}
          handleChangePromotions={handleChangePromotions}
          handleRemoveAccount={handleRemoveAccount}
          handleChangeNotifications={handleChangeNotifications}
          handleRequestCustomerAddress={handleRequestCustomerAddress}
        />
      )}
    </>
  )
}

UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Use session user to details
   */
  useSessionUser: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`boolean\`.`)
    }
    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`userId\` and \`user\`.`)
    }
  },
  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: PropTypes.bool,
  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`number\`.`)
    }
    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`useSessionUser\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`user\`.`)
    }
  },
  /**
   * User object
   * If you provide user object the component not get user form Ordering API
   */
  user: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'object') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`object\`.`)
    }
    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`useSessionUser\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`userId\`.`)
    }
  },
  /**
   * Function to change default user details behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: PropTypes.func,
  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: PropTypes.func,
  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFields: PropTypes.bool,
  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: PropTypes.string,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
  /**
   * Components types before user details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after user details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
