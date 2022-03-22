import React, { useState, useEffect } from 'react'
import { useSession, useApi, useCustomer, useValidationFields as useValidationsFieldsController } from 'ordering-components'

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
    isCustomerMode
  } = props

  const [ordering] = useApi()
  const [session, { changeUser }] = useSession()
  const [customer, { setUserCustomer }] = useCustomer()
  const [validationFields] = useValidationsFieldsController()
  const [isEdit, setIsEdit] = useState(!!props?.isEdit)
  const [userState, setUserState] = useState({ loading: false, loadingDriver: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const requestsState = {}

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if ((userId || (useSessionUser && refreshSessionUser)) && !session.loading && !props.userData) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, result: response.content })
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
  }, [session.loading])

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
      if (changes) {
        formState.changes = { ...formState.changes, ...changes }
      }
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
        response = await ordering.users(props?.userData?.id || userState.result.result.id).save(formState.changes, {
          accessToken: accessToken
        })
        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : {},
          result: response.content,
          loading: false
        })
      }

      if (!response.content.error) {
        setUserState({
          ...userState,
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

        if (!image) {
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
    return useValidationFields &&
      !validationFields.loading &&
      validationFields.fields?.checkout?.[fieldName] &&
      validationFields.fields?.checkout?.[fieldName]?.enabled &&
      validationFields.fields?.checkout?.[fieldName]?.required
  }

  const handleToggleAvalaibleStatusDriver = async (newValue) => {
    try {
      setUserState({ ...userState, loadingDriver: true })
      const response = await ordering
        .users(props?.userData?.id || userState.result.result.id)
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isEdit={isEdit}
          cleanFormState={cleanFormState}
          formState={formState}
          userState={userState}
          validationFields={validationFields}
          showField={showField}
          setFormState={setFormState}
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
          handleToggleAvalaibleStatusDriver={handleToggleAvalaibleStatusDriver}
        />
      )}
    </>
  )
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
