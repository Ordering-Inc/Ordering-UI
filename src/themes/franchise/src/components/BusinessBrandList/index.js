import React from 'react'
import { useLanguage } from 'ordering-components'
import {
  BranchListContainer,
  BranchTitle,
  BranchContent,
  BranchInfoBlock,
  OrderBtnWrapper,
  OrderTypeList,
  OrderType
} from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'

export const BusinessBranchList = (props) => {
  const {
    isSkeleton,
    branch
  } = props
  const [, t] = useLanguage()
  const orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')]

  return (
    <BranchListContainer>
      {
        isSkeleton ? (
          <>
            <BranchTitle>
              <Skeleton width={200} height={30} />
            </BranchTitle>
            <BranchContent>
              <BranchInfoBlock>
                <Skeleton width={250} />
                <OrderTypeList>
                  {[...Array(4).keys()].map(i => (
                    <OrderType isSkeleton={isSkeleton} key={i}>
                      <Skeleton width={40} height={20} />
                    </OrderType>
                  ))}
                </OrderTypeList>
                <Skeleton width={100} height={25} />
              </BranchInfoBlock>
              <OrderBtnWrapper>
                <Skeleton width={100} height={35} />
              </OrderBtnWrapper>
            </BranchContent>
          </>
        ) : (
          <>
            <BranchTitle>{branch?.name}</BranchTitle>
            <BranchContent>
              <BranchInfoBlock>
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <OrderTypeList>
                  {
                    orderTypeList.map((orderType, i) => (
                      <OrderType key={i}>{orderType}</OrderType>
                    ))
                  }
                </OrderTypeList>
                <span>{('PREORDER', 'Preorder')}</span>
              </BranchInfoBlock>
              <OrderBtnWrapper>
                <Button
                  outline
                  color='primary'
                >
                  {t('START_ORDER', 'Start order')}
                </Button>
              </OrderBtnWrapper>
            </BranchContent>
          </>
        )
      }
    </BranchListContainer>
  )
}
