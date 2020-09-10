import React from 'react'
import {
  FacebookLoginButton as FacebookLoginController,
} from 'ordering-components'
import { FaFacebookF } from 'react-icons/fa' 

const FacebookLoginButtonUI = (props) => {
    const {handleFacebookLogin} = props
    return <FaFacebookF onClick={() => handleFacebookLogin()}/>
  }
  
export const FacebookLoginButton = (props) => {
    const facebookLoginProps = {
      ...props,
      UIComponent: FacebookLoginButtonUI
    }
    return <FacebookLoginController {...facebookLoginProps} />
  }