import React from 'react'
import { useLocation } from 'react-router-dom'
import { MultiOrdersDetails as MultiOrdersDetailsController } from '../../../src/themes/five/src/components/MultiOrdersDetails'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MultiOrdersDetails = (props) => {
  const [events] = useEvent()
  const { orderUuids } = useLocation()
  const multiOrdersDetailsProps = {
    ...props,
    orderUuids: orderUuids || [],
    onRedirectPage: () => events.emit('go_to_page', { page: 'search' })
  }
  return (
    <>
      <HelmetTags page='multi_orders' />
      <MultiOrdersDetailsController {...multiOrdersDetailsProps} />
    </>
  )
}
