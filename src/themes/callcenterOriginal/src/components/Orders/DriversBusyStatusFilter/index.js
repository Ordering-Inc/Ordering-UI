import React from 'react'
import { useLanguage } from 'ordering-components'
import { Button } from '../../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  Container
} from './styles'

export const DriversBusyStatusFilter = (props) => {
  const {
    driversSubfilter,
    handleChangeDriversSubFilter,
    numberOfbusyDrivers,
    numberOfnotBusyDrivers
  } = props
  const [, t] = useLanguage()
  return (
    <Container>
      <Button
        color={driversSubfilter.busy ? 'primary' : 'secundary'}
        onClick={() => handleChangeDriversSubFilter({ ...driversSubfilter, busy: !driversSubfilter.busy })}
      >
        {t('BUSY', 'Busy')}
        <span>({numberOfbusyDrivers ?? 0})</span>
        {driversSubfilter.busy && <MdClose />}
      </Button>
      <Button
        color={driversSubfilter.notBusy ? 'primary' : 'secundary'}
        onClick={() => handleChangeDriversSubFilter({ ...driversSubfilter, notBusy: !driversSubfilter.notBusy })}
      >
        {t('NOT_BUSY', 'Not busy')}
        <span>({numberOfnotBusyDrivers ?? 0})</span>
        {driversSubfilter.notBusy && <MdClose />}
      </Button>
    </Container>
  )
}
