import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from 'ordering-components'

export const AppleLogin = (props) => {
  const { UIComponent, initParams, onSuccess, onFailure, handleButtonAppleLoginClick } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  useEffect(() => {
    window.addEventListener('AppleIDSignInOnSuccess', (data) => {
      onSuccess(data)
    })
    window.addEventListener('AppleIDSignInOnFailure', (error) => {
      onFailure(error)
    })
    createScriptApple()

    return () => {
      document.removeEventListener('AppleIDSignInOnSuccess')
      document.removeEventListener('AppleIDSignInOnFailure')
    }
  }, [])

  /**
   * loading script of de Apple login sdk
   */
  const createScriptApple = () => {
    if (window.document.getElementById('apple-login')) {
      return
    }
    const js = window.document.createElement('script')
    js.id = 'apple-login'
    js.src =
      'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    js.async = true
    js.defer = true

    window.document.body.appendChild(js)
  }

  const handleAppleLoginClick = async (data) => {
    if (handleButtonAppleLoginClick) {
      handleButtonAppleLoginClick(data)
      return
    }

    try {
      setFormState({ ...formState, loading: true })
      const response = await fetch(`${ordering.root}/auth/apple`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: data.code
        })
      })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (onSuccess) {
          onSuccess(response.content.result)
        }
      } else {
        if (onFailure) {
          onFailure(response.content.result)
        }
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * start Login Apple
   */
  const initLoginApple = () => {
    window.AppleID.auth.init(initParams)

    handleLoginApple()
    console.log(window.AppleID)
  }

  /**
   * handilng the response of login apple when login
   */
  const handleLoginApple = async () => {
    try {
      const data = await window.AppleID.auth.signIn()
      console.log(data)
    } catch (err) {
      console.log('error', err)
    }
  }

  return <>{UIComponent && <UIComponent {...props} initLoginApple={initLoginApple} handleAppleLoginClick={handleAppleLoginClick} />}</>
}

AppleLogin.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * loading script of de Apple login sdk
   */
  createScriptApple: PropTypes.func,
  /**
   * start Login Apple
   */
  initLoginApple: PropTypes.func,
  /**
   * handilng the response of login apple when login
   */
  handleLoginApple: PropTypes.func,
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AppleLogin.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
