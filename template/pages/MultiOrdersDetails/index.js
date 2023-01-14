import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MultiOrdersDetails as MultiOrdersDetailsController } from '../../../src/themes/five/src/components/MultiOrdersDetails'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components'

export const MultiOrdersDetails = (props) => {
  const [events] = useEvent()
  const { orderId } = useParams()
  const history = useHistory()

  const multiOrdersDetailsProps = {
    ...props,
    orderId: orderId,
    onRedirectPage: () => events.emit('go_to_page', { page: 'search' }),
    handleOrderRedirect: () => {
      history.push('/profile/orders')
    }
  }
  return (
    <>
      <HelmetTags page='multi_orders' />
      <MultiOrdersDetailsController {...multiOrdersDetailsProps} />
    </>
  )
}

export default MultiOrdersDetails
