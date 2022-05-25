import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, Sessions as SessionsController } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'
import { Alert, Confirm } from '../Confirm'

import {
  SessionsListContainer,
  Title,
  SessionItem,
  DurationWrapper,
  SeessionDelete,
  NoMessage,
  SessionsWrapper
} from './styles'

const SessionsListUI = (props) => {
  const {
    sessionsList,
    actionState,
    handleDeleteSession,
    handleDeleteAllSessions
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onDeleteSession = (sessionId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_SESSION', 'Are you sure to delete this session?'),
      handleOnAccept: () => {
        handleDeleteSession(sessionId)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const onDeleteAllSessions = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ALL_SESSIONS', 'Are you sure that you want to delete all sessions?'),
      handleOnAccept: () => {
        handleDeleteAllSessions()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      })
    }
  }, [actionState.error])

  return (
    <SessionsListContainer>
      <Title>{t('SESSIONS', 'Sessions')}</Title>
      {sessionsList.loading ? (
        [...Array(5).keys()].map(i => (
          <SessionItem key={i}>
            <Skeleton width={200} height={16} />
            <Skeleton width={16} height={16} />
          </SessionItem>
        ))
      ) : (
        sessionsList.sessions.length > 0 ? (
          <SessionsWrapper>
            {sessionsList.sessions.map(session => (
              <SessionItem key={session.id}>
                <DurationWrapper>
                  <p>{parseDate(session.created_at)}</p>
                  <span>-</span>
                  <p>{parseDate(session.valid_thru)}</p>
                </DurationWrapper>
                <SeessionDelete
                  onClick={() => onDeleteSession(session.id)}
                >
                  <MdClose />
                </SeessionDelete>
              </SessionItem>
            ))}
            <Button
              color='primary'
              disabled={actionState.loading}
              onClick={() => onDeleteAllSessions()}
            >
              {t('DELETE_ALL_SESSIONS', 'Delete all sessions')}
            </Button>
          </SessionsWrapper>
        ) : (
          <NoMessage>
            {t('YOU_DONT_HAVE_ANY_SESSIONS', 'You don\'t have any sessions')}
          </NoMessage>
        )
      )}
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </SessionsListContainer>
  )
}

export const SessionsList = (props) => {
  const sessionsProps = {
    ...props,
    UIComponent: SessionsListUI
  }
  return <SessionsController {...sessionsProps} />
}
