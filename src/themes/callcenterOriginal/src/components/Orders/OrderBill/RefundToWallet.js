import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components'
import { useForm } from 'react-hook-form'
import { Button, Input, TextArea } from '../../../styles'
import { Alert, Modal } from '../../Shared'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  RefundWalletButtonWrapper,
  RefundContainer,
  RadioItemContainer,
  RefundAmountWrapper,
  RefundReasonContainer,
  Option,
  SelectWrapper,
  ErrorText
} from './styles'

export const RefundToWallet = (props) => {
  const {
    order,
    actionStatus,
    handleOrderRefund
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const isAllowCashWalletRefund = configs?.refund_cash_wallet_allow_when_order_cancelled?.value === '1'
  const isAllowCreditPointRefund = configs?.refund_credit_point_allow_when_order_cancelled?.value === '1'
  const isAllowStripeRefund = configs?.refund_stripe_allow_when_order_cancelled?.value === '1'
  const isAllowOtherRefund = configs?.refund_other_allow_when_order_cancelled?.value === '1'

  const { handleSubmit, register, errors } = useForm()
  const [openModal, setOpenModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isRefundAll, setIsRefundAll] = useState(true)
  const [refundDisabled, setRefundDisabled] = useState(false)
  const [refundAllDisabled, setRefundAllDisabled] = useState(false)
  const [selectedRefundOption, setSelectedRefundOption] = useState(null)
  const [refundOptions, setRefundOptions] = useState([])

  const onSubmit = (formData) => {
    if (!selectedRefundOption) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_FILLED', 'The _attribute_ field is required.').replace('_attribute_', t('TYPE', 'Type'))
      })
      return
    }
    const data = {}
    if (selectedRefundOption !== 'cash_wallet') {
      data.order_payment_event_id = selectedRefundOption
    }
    if (formData.description) data.description = formData.description
    data.amount = isRefundAll ? (order?.summary?.total || order?.total) : formData.amount
    data.transfer_to = selectedRefundOption !== 'cash_wallet' ? 'source' : 'cash_wallet'
    handleOrderRefund(data)
  }

  useEffect(() => {
    if (Object?.keys(errors)?.length > 0) {
      setAlertState({
        open: true,
        content: Object?.values(errors)?.map((error) => error?.message)
      })
    }
  }, [errors])

  useEffect(() => {
    setSelectedRefundOption(null)
    setRefundDisabled(false)
    setRefundAllDisabled(false)
    setIsRefundAll(true)

    if (!order?.payment_events) return
    const totalRefundAmount = order?.payment_events?.filter(item => item.event === 'refund').reduce((total, event) => total + (event?.amount || 0), 0) || 0
    if (totalRefundAmount === (order?.summary?.total || order?.total)) {
      setRefundDisabled(true)
    }
    if (totalRefundAmount) {
      setRefundAllDisabled(true)
      setIsRefundAll(false)
    }
    const _refundOptions = []
    const paymentEvents = order?.payment_events?.filter(item => item.event === 'payment') || []
    paymentEvents.forEach(event => {
      if (event?.wallet_event?.wallet?.type === 'cash') {
        if (isAllowCashWalletRefund) {
          _refundOptions.push({
            value: event.id,
            content: <Option>{t('CASH_WALLET', 'Cash Wallet')}</Option>
          })
        }
      } else if (event?.wallet_event?.wallet?.type === 'credit_point') {
        if (isAllowCreditPointRefund) {
          _refundOptions.push({
            value: event.id,
            content: <Option>{t('POINTS_WALLET', 'Points Wallet')}</Option>
          })
        }
      } else if (event?.paymethod?.gateway === 'stripe' || event?.data?.gateway === 'stripe') {
        if (isAllowStripeRefund) {
          _refundOptions.push({
            value: event.id,
            content: <Option>{t('STRIPE', 'Stripe')}</Option>
          })
        }
      } else {
        if (isAllowOtherRefund) {
          _refundOptions.push({
            value: event.id,
            content: <Option>{event?.paymethod ? t(event?.paymethod?.gateway?.toUpperCase(), event?.paymethod?.name) : t(event?.data?.gateway?.toUpperCase(), event?.data?.gateway?.replaceAll('_', ' '))}</Option>
          })
        }
      }
    })
    setRefundOptions(_refundOptions)
  }, [JSON.stringify(order?.payment_events)], order?.id)

  useEffect(() => {
    if (!actionStatus?.loading) {
      setOpenModal(false)
    }
  }, [actionStatus?.loading])

  return (
    <>
      {(isAllowCashWalletRefund || isAllowCreditPointRefund || isAllowStripeRefund || isAllowOtherRefund) && (
        <RefundWalletButtonWrapper>
          <Button
            color='primary'
            borderRadius='8px'
            disabled={actionStatus?.loading || refundDisabled}
            onClick={() => setOpenModal(true)}
          >
            {t('REFUND_TO_WALLET', 'Refund to Wallet')}
          </Button>
        </RefundWalletButtonWrapper>
      )}
      <Modal
        width='700px'
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <RefundContainer onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <h2>{t('REFUND_TO_WALLET', 'Refund to Wallet')}</h2>
          {refundOptions.length > 0 ? (
            <>
              <SelectWrapper>
                <span>{t('REFUND_TYPES', 'Refund types')}</span>
                <Select
                  defaultValue={selectedRefundOption}
                  options={refundOptions}
                  placeholder={<Option>{t('SELECT_TYPE', 'Select type')}</Option>}
                  onChange={val => setSelectedRefundOption(val)}
                />
              </SelectWrapper>
              <p>{t('QUESTION_REFUND_AMOUNT', 'How do you want to refund?')}</p>
              <RadioItemContainer
                active={isRefundAll}
                disabled={refundAllDisabled}
                onClick={() => setIsRefundAll(true)}
              >
                {isRefundAll ? <RecordCircleFill /> : <Circle />}
                <span>{t('REFUND_ALL', 'Refund all')}</span>
              </RadioItemContainer>
              <RadioItemContainer
                active={!isRefundAll}
                onClick={() => setIsRefundAll(false)}
              >
                {!isRefundAll ? <RecordCircleFill /> : <Circle />}
                <span>{t('REFUND_ONLY_AN_AMOUNT', 'Refund only an amount')}</span>
              </RadioItemContainer>
              {!isRefundAll && (
                <RefundAmountWrapper>
                  <Input
                    name='amount'
                    onKeyPress={(e) => {
                      if (!/^[0-9.]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    ref={register({
                      required: t('VALIDATION_ERROR_FILLED', 'The _attribute_ field is required.').replace('_attribute_', t('AMOUNT', 'Amount'))
                    })}
                  />
                </RefundAmountWrapper>
              )}
              <RefundReasonContainer>
                <label>{t('COMMENTS', 'Comments')}</label>
                <TextArea
                  rows={3}
                  name='description'
                />
              </RefundReasonContainer>
              <Button
                type='submit'
                color='primary'
                borderRadius='8px'
              >
                {t('REFUND', 'Refund')}
              </Button>
            </>
          ) : (
            <ErrorText>{t('REFUND_NOT_ALLOWED', 'The refund is not allowed.')}</ErrorText>
          )}
        </RefundContainer>
      </Modal>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState?.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}
