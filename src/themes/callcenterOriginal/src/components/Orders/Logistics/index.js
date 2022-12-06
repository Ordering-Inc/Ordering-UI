import React from 'react'
import { useLanguage, useUtils, Logistics as LogisticsController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
  WraaperLogs,
  BubbleConsole,
  TimeofSent,
  Reason,
  SkeletonHitory
} from './styles'

const LogisticsUI = (props) => {
  const {
    logisticList,
    parseLog
  } = props

  const [, t] = useLanguage()
  const [{ getTimeAgo, parseDate }] = useUtils()

  return (
    <>
      {logisticList.loading ? (
        <>
          {[...Array(3)].map((item, i) => (
            <SkeletonHitory key={i}>
              <Skeleton width={400} height={50} style={{ marginBottom: '20px' }} />
              <Skeleton width={300} height={50} style={{ marginBottom: '20px' }} />
              <Skeleton width={380} height={50} style={{ marginBottom: '20px' }} />
              <Skeleton width={200} height={50} style={{ marginBottom: '20px' }} />
              <Skeleton width={450} height={50} style={{ marginBottom: '20px' }} />
            </SkeletonHitory>
          ))}
        </>
      ) : (
        <WraaperLogs>
          {logisticList.logs.map((log) => (
            <BubbleConsole key={log.id}>
              <div dangerouslySetInnerHTML={{
                __html: parseLog(log)
              }}
              />
              {log.event === 'logistic_expired' && (
                <Reason>{t('REASON', 'Reason')}: {log?.data?.reason}</Reason>
              )}
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    {parseDate(log.updated_at)}
                  </Tooltip>
                }
              >
                <TimeofSent>{getTimeAgo(log.updated_at)}</TimeofSent>
              </OverlayTrigger>
            </BubbleConsole>
          ))}
        </WraaperLogs>
      )}
    </>
  )
}

export const Logistics = (props) => {
  const logisticsProps = {
    ...props,
    orderId: props.orderId,
    UIComponent: LogisticsUI
  }
  return <LogisticsController {...logisticsProps} />
}
