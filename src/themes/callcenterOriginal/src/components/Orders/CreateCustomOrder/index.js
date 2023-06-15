import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { CustomOrderDetails } from './CustomOrderDetails'
import { SideBar } from '../../Shared'
import { Button } from '../../../styles'

export const CreateCustomOrder = (props) => {
  const {
    handleOpenCustomOrderDetail
  } = props

  const [, t] = useLanguage()
  const [openSidebar, setOpenSidebar] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

  return (
    <>
      <Button
        borderRadius='7.6px'
        color='lightPrimary'
        onClick={() => setOpenSidebar(true)}
      >
        {t('CREATE_CUSTOM_ORDER', 'Create custom order')}
      </Button>
      {openSidebar && (
        <SideBar
          sidebarId='custom_order_details'
          open={openSidebar}
          onClose={() => {
            setMoveDistance(0)
            setOpenSidebar(false)
          }}
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
        >
          <CustomOrderDetails
            handleParentSidebarMove={val => setMoveDistance(val)}
            handleOpenCustomOrderDetail={handleOpenCustomOrderDetail}
            onClose={() => setOpenSidebar(false)}
          />
        </SideBar>
      )}
    </>
  )
}
