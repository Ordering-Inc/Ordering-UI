import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, WebsocketStatus as WebsocketStatusController } from 'ordering-components'
import { InfoCircle } from 'react-bootstrap-icons'
import { Alert, Modal } from '../../Shared'
import { Button, IconButton } from '../../../styles'

import {
  Contatiner,
  StatusContainer,
  WebsocketStatusDot,
  InfoWrapper,
  InfoContent,
  DetailContainer,
  StatusItemWrapper,
  ButtonsContainer
} from './styles'

const SocketStatusUI = (props) => {
  const {
    socketStatus,
    reconnectAttemptCount,
    connectedDate
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [openModal, setOpenModal] = useState(false)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    window.location.reload()
  }

  useEffect(() => {
    if (reconnectAttemptCount > 3) {
      setAlertState({
        open: true,
        content: t('WEBSOCKET_CONNECT_ERROR', 'There appears to be an error in establishing the WebSocket connection. Please try reloading the page to resolve the issue.')
      })
    }
  }, [reconnectAttemptCount])

  return (
    <Contatiner>
      <InfoWrapper>
        <IconButton
          color='primary'
        >
          <InfoCircle />
        </IconButton>
        <InfoContent>
          {t('WEBSOCKET_STATUS_INFO', 'Verify the server connection by date and time using the Connection status button. Press update to refresh you dashboard and update the status as well. Need help? Contact our Customer support team here:')}
          <a href='https://www.ordering.co/contact-ordering' target='_blank' rel='noopener noreferrer'>{t('CUSTOMER_SUPPORT', 'Customer support')}</a>
        </InfoContent>
      </InfoWrapper>
      <Button
        borderRadius='8px'
        color='secundary'
        onClick={() => setOpenModal(true)}
      >
        <StatusContainer>
          <span>{t('CONNECTION_STATUS', 'Connection status')}</span>
          <WebsocketStatusDot
            status={socketStatus}
          />
        </StatusContainer>
      </Button>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        width='500px'
      >
        <DetailContainer>
          <h2>{t('CONNECTION_STATUS', 'Connection status')}</h2>
          <p>{t('LAST_UPDATE', 'Last update')}: {parseDate(connectedDate)}</p>
          <StatusItemWrapper>
            <div>
              <WebsocketStatusDot status={1} />
              <span>{t('OK', 'Ok')}</span>
            </div>
            <p>{t('WEBSOCKET_OK', 'The websocket works normally.')}</p>
          </StatusItemWrapper>
          <StatusItemWrapper>
            <div>
              <WebsocketStatusDot status={0} />
              <span>{t('CONNECTING', 'Connecting')}</span>
            </div>
            <p>{t('WEBSOCKET_CONNECTING', 'The websocket is connecting.')}</p>
          </StatusItemWrapper>
          <StatusItemWrapper>
            <div>
              <WebsocketStatusDot status={2} />
              <span>{t('DISCONNECTED', 'Disconnected')}</span>
            </div>
            <p>{t('WEBSOCKET_DISCONNECTED', 'The server is slow, please reload.')}</p>
          </StatusItemWrapper>
          <ButtonsContainer>
            <Button
              color='secundary'
              onClick={() => setOpenModal(false)}
            >
              {t('CLOSE', 'Close')}
            </Button>
            <Button
              color='primary'
              onClick={() => window.location.reload()}
            >
              {t('UPDATE', 'Update')}
            </Button>
          </ButtonsContainer>
        </DetailContainer>
      </Modal>

      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Contatiner>
  )
}

export const WebsocketStatus = (props) => {
  const socketProps = {
    ...props,
    UIComponent: SocketStatusUI
  }
  return <WebsocketStatusController {...socketProps} />
}
