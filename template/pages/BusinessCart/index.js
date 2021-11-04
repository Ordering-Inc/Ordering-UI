import React from 'react'
import { useParams } from 'react-router-dom'
import { useEvent } from 'ordering-components'
import { BusinessCart as BusinessCartController } from '../../../src/themes/eight/src/components/BusinessCart'
import { HelmetTags } from '../../components/HelmetTags'
import { capitalize } from '../../../src/utils'

export const BusinessCart = (props) => {
  const { store } = useParams()
  const [events] = useEvent()

  const businessCartProps = {
    ...props,
    slug: store,
    onBusinessRedirect: (slug) => {
      events.emit('go_to_page', { page: 'business', params: { store: slug } })
    }
  }

  return (
    <>
      <HelmetTags page='business_cart' helmetTitle={`${capitalize(store)} cart`} />
      <BusinessCartController {...businessCartProps} />
    </>
  )
}
