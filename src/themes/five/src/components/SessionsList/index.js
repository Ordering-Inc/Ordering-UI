import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, useSession, Sessions as SessionsController } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'
import { Alert, Confirm } from '../Confirm'
import { Alert as AlertPFChangs, Confirm as ConfirmPFChangs } from '../Confirm/layouts/pfchangs'
import {
  SessionsListContainer,
  Title,
  SessionItem,
  DurationWrapper,
  SeessionDelete,
  NoMessage,
  SessionsWrapper,
  NoSessionsContainer,
  ButtonsGroup
} from './styles'
import { useTheme } from 'styled-components'

const SessionsListUI = (props) => {
  const {
    sessionsList,
    actionState,
    handleDeleteSession,
    handleDeleteAllSessions
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ parseDate }] = useUtils()
  const theme = useTheme()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert

  const ConfirmComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? ConfirmPFChangs
    : Confirm

  const onDeleteSession = (session) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_SESSION', 'Are you sure to delete this session?'),
      handleOnAccept: () => {
        handleDeleteSession(session)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const onDeleteAllSessions = (isOldUser, deleteCurrent) => {
    setConfirm({
      open: true,
      content:
        isOldUser
          ? t('QUESTION_ENABLE_ALL_SESSIONS', 'Are you sure to enable all sessions?')
          : deleteCurrent
            ? t('QUESTION_DELETE_ALL_SESSIONS', 'Are you sure that you want to delete all sessions?')
            : t('QUESTION_DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Are you sure that you want to delete all sessions except current?'),
      handleOnAccept: () => {
        handleDeleteAllSessions(deleteCurrent)
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
      {user?.session_strategy === 'jwt_session' ? (
        <>
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
                    {session.current && (
                      <p className='current'>({t('CURRENT', 'Current')})</p>
                    )}
                    <SeessionDelete
                      onClick={() => onDeleteSession(session)}
                    >
                      <MdClose />
                    </SeessionDelete>
                  </SessionItem>
                ))}
                <ButtonsGroup>
                  <Button
                    color='primary'
                    disabled={actionState.loading}
                    onClick={() => onDeleteAllSessions(false, true)}
                  >
                    {t('DELETE_ALL_SESSIONS', 'Delete all sessions')}
                  </Button>
                  <Button
                    color='primary'
                    disabled={actionState.loading}
                    onClick={() => onDeleteAllSessions(false, false)}
                  >
                    {t('DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Delete all sessions except current')}
                  </Button>
                </ButtonsGroup>
              </SessionsWrapper>
            ) : (
              <NoMessage>
                {t('YOU_DONT_HAVE_ANY_SESSIONS', 'You don\'t have any sessions')}
              </NoMessage>
            )
          )}
        </>
      ) : (
        <NoSessionsContainer>
          <NoMessage>
            {t('YOU_DONT_HAVE_ENABLED_THE_SESSIONS', 'You don\'t have enabled the sessions, please active them to have a better control of your sessions.')}
          </NoMessage>
          <Button
            color='primary'
            onClick={() => onDeleteAllSessions(true, false)}
          >
            {t('ACTIVE_SESSIONS', 'Active sessions')}
          </Button>
        </NoSessionsContainer>
      )}
      <ConfirmComponent
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <AlertComponent
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
