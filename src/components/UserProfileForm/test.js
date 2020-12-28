import React, { useState, useEffect } from 'react'
import { useSession, useApi } from 'ordering-components'

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
    validationFieldsType,
    handleButtonUpdateClick,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [session, { changeUser }] = useSession()
  const [isEdit, setIsEdit] = useState(false)
  const [userState, setUserState] = useState({ loading: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [validationFields, setValidationFields] = useState({ loading: useValidationFields })
  const requestsState = {}

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if ((userId || (useSessionUser && refreshSessionUser)) && !session.loading) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, result: response.content })
        if (response.content.result) {
          changeUser({
            ...session.user,
            ...response.content.result
          })
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

    if (useValidationFields) {
      const source = {}
      requestsState.validation = source
      ordering.validationFields().toType(validationFieldsType).get({ cancelToken: source }).then((response) => {
        const fields = {}
        response.content.result.forEach((field) => {
          fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
        })
        setValidationFields({ loading: false, fields })
      }).catch((err) => {
        if (err.constructor.name !== 'Cancel') {
          setValidationFields({ loading: false })
        }
      })
    }

    return () => {
      if (requestsState.user) {
        requestsState.user.cancel()
      }
      if (requestsState.validation) {
        requestsState.validation.cancel()
      }
    }
  }, [session.loading])

  /**
   * Clean formState
   */
  const cleanFormState = () => setFormState({ ...formState, changes: {} })

  /**
   * Default fuction for user profile workflow
   */
  const handleUpdateClick = async (changes) => {
    if (handleButtonUpdateClick) {
      return handleButtonUpdateClick(userState.result.result, formState.changes)
    }
    try {
      setFormState({ ...formState, loading: true })
      if (changes) {
        formState.changes = { ...formState.changes, ...changes }
      }
      const response = await ordering.users(userState.result.result.id).save(formState.changes, {
        accessToken: accessToken
      })
      setFormState({
        ...formState,
        changes: response.content.error ? formState.changes : {},
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        setUserState({
          ...userState,
          result: {
            ...userState.result,
            ...response.content
          }
        })
        changeUser({
          ...session.user,
          ...response.content.result
        })
        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }
        setIsEdit(!isEdit)
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
              (!validationFields.loading && !validationFields.fields[fieldName]) ||
              (!validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFields &&
            !validationFields.loading &&
            validationFields.fields[fieldName] &&
            validationFields.fields[fieldName].enabled &&
            validationFields.fields[fieldName].required
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
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
        />
      )}
    </>
  )
}

UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true
}
