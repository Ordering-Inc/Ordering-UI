import React, { useState, useEffect } from 'react'
import { useLanguage, ExportCSV as ExportCSVController } from 'ordering-components'
import { Modal, SpinnerLoader } from '../../Shared'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { Button } from '../../../styles'
import { Download } from 'react-bootstrap-icons'
import {
  ExportContainer,
  PopoverContainer,
  Item,
  ExportCSVResult,
  ErrorMessage
} from './styles'
const ExportCSVUI = (props) => {
  const {
    actionStatus,
    getCSV
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleExportAll = () => {
    setPopoverOpen(false)
    getCSV(false)
  }

  const handleExportFiltered = () => {
    setPopoverOpen(false)
    getCSV(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  useEffect(() => {
    if (!popoverOpen) return
    document.addEventListener('click', closePopover)
    return () => document.removeEventListener('click', closePopover)
  }, [popoverOpen])

  useEffect(() => {
    if (!actionStatus?.result || actionStatus?.error) return
    setModalOpen(true)
  }, [actionStatus])

  return (
    <>
      <ExportContainer>
        <Button
          borderRadius='7.6px'
          color='secundary'
          disabled={actionStatus.loading}
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          {width > 600 && t('CSV', 'CSV')}
          <Download />
        </Button>
        {popoverOpen && (
          <PopoverContainer>
            <Item onClick={() => handleExportAll()}>
              {t('EXPORT_ALL', 'Export all')}
            </Item>
            <Item onClick={() => handleExportFiltered()}>
              {t('EXPORT_FILTERED', 'Export filtered')}
            </Item>
          </PopoverContainer>
        )}

        {actionStatus.loading && (
          <SpinnerLoader primary />
        )}
      </ExportContainer>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ExportCSVResult>
          <h1 className='align-center'>{t('WEB_APPNAME', 'Ordering')}</h1>
          {actionStatus?.result?.length > 0 && (
            actionStatus?.result.map((e, i) => (
              <ErrorMessage key={i}>{e?.message || e}</ErrorMessage>
            )))}
          <Button
            rectangle
            color='primary'
            onClick={() => setModalOpen(false)}
          >
            {t('OK', 'OK')}
          </Button>
        </ExportCSVResult>
      </Modal>
    </>
  )
}

export const OrdersExportCSV = (props) => {
  const ExportCSVControlProps = {
    ...props,
    UIComponent: ExportCSVUI,
    filterValues: props.filterValues
  }
  return <ExportCSVController {...ExportCSVControlProps} />
}
