import React, { useEffect } from 'react'
import { useEvent } from 'ordering-components'
import { useParams } from 'react-router-dom'
import { PhoneAutocomplete } from '../../../src/themes/callcenterOriginal'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'

import {
  HomeContainer
} from './styles'

const PhoneUrl = (props) => {
  const [events] = useEvent()
  const { phone } = useParams()

  const phoneProps = {
    ...props,
    fieldsNotValid: ['password'],
    countryCallingCode: settings.country_calling_code,
    limitPhoneLength: parseInt(settings.limit_phone_length) ?? settings.limit_phone_length,
    onRedirectPhoneUrlPage: (page) => {
      events.emit('go_to_page', { page, params: { isFromUrlPhone: true } })
    },
    urlPhone: phone,
    isFromUrlPhone: true
  }

  useEffect(() => {
    if (phone) return
    events.emit('go_to_page', { page: 'home', params: { isFromUrlPhone: true } })
  }, [])

  return (
    <>
      <HelmetTags page='phone' />
      <HomeContainer>
        <PhoneAutocomplete {...phoneProps} />
      </HomeContainer>
    </>
  )
}

export default PhoneUrl
