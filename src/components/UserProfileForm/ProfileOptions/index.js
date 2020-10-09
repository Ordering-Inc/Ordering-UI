import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FlexTabs } from './styles'
import { Tabs, Tab } from '../../../styles/Tabs'
import { BsPerson, AiOutlineUnorderedList } from 'react-icons/all'

export const ProfileOptions = ({ value }) => {
  const [tabValue] = useState(value)

  return (
    <FlexTabs>
      <Tabs variant='primary'>
        <Tab active={tabValue === 'My Account'}>
          <Link to='/profile'>
            <BsPerson /> My Account
          </Link>
        </Tab>
        <Tab active={tabValue === 'My Orders'}>
          <Link to='/profile/orders'>
            <AiOutlineUnorderedList /> My Orders
          </Link>
        </Tab>
      </Tabs>
    </FlexTabs>
  )
}
