import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillStar from '@meronex/icons/ai/AiFillStar'
import BsDot from '@meronex/icons/bs/BsDot'
import { Button } from '../../../../styles/Buttons'
import {
  HeaderItem,
  Container,
  WrapStep,
  StepValue,
  Line,
  WrapActoinButton
} from './styles'

export const ReviewSettingContent = (props) => {
  const {
    defaultValue,
    handleReviewSettingValue
  } = props
  const [, t] = useLanguage()
  const [reviewSettingValue, setReivewSettingValue] = useState(defaultValue || 4.5)

  return (
    <Container>
      <p>{reviewSettingValue}</p>
      <HeaderItem>
        <h1>
          <span>{reviewSettingValue}</span> <AiFillStar />
        </h1>
        <p>{t('AND_OVER', 'and over')}</p>
      </HeaderItem>
      <WrapStep>
        <StepValue setted={reviewSettingValue === 3} deActive={reviewSettingValue >= 3.5}>
          <BsDot onClick={() => setReivewSettingValue(3)} />
          <span>3</span>
        </StepValue>
        <Line deActive={reviewSettingValue >= 3.5} />
        <StepValue setted={reviewSettingValue === 3.5} deActive={reviewSettingValue >= 4}>
          <BsDot onClick={() => setReivewSettingValue(3.5)} />
          <span>3.5</span>
        </StepValue>
        <Line deActive={reviewSettingValue >= 4} />
        <StepValue setted={reviewSettingValue === 4} deActive={reviewSettingValue >= 4.5}>
          <BsDot onClick={() => setReivewSettingValue(4)} />
          <span>4</span>
        </StepValue>
        <Line deActive={reviewSettingValue >= 4.5} />
        <StepValue setted={reviewSettingValue === 4.5} deActive={reviewSettingValue === 5}>
          <BsDot onClick={() => setReivewSettingValue(4.5)} />
          <span>4.5</span>
        </StepValue>
        <Line deActive={reviewSettingValue === 5} />
        <StepValue>
          <BsDot onClick={() => setReivewSettingValue(5)} />
          <span>5</span>
        </StepValue>
      </WrapStep>
      <WrapActoinButton>
        <Button color='secondary' borderRounded onClick={props.onClose}>
          {t('CANCEL', 'Cancel')}
        </Button>
        <Button color='primary' borderRounded onClick={() => handleReviewSettingValue(reviewSettingValue)}>
          {t('VIEW_RESULTS', 'View Results')}
        </Button>
      </WrapActoinButton>
    </Container>
  )
}
