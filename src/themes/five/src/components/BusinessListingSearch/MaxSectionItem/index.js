import { useLanguage, useUtils } from 'ordering-components'
import React from 'react'
import { MaxFilterContainer, MaxItem, MaxItemContainer, ProgressBar, ProgressContentWrapper } from '../styles'

export const MaxSectionItem = (props) => {
  const {
    filters,
    handleChangeFilters,
    title,
    options,
    filter
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()

  const parseValue = (option) => {
    return filter === 'max_distance'
      ? `${option / 1000} ${t('KM', 'Km')}`
      : filter === 'max_eta'
        ? `${option} ${t('MIN', 'min')}`
        : parsePrice(option)
  }

  return (
    <MaxFilterContainer>
      <h3>{title}</h3>
      <ProgressContentWrapper>
        <ProgressBar style={{ width: `${((options.indexOf(filters?.[filter]) / 3) * 100) ?? 100}%` }} />
      </ProgressContentWrapper>
      <MaxItemContainer>
        {options.map((option, i) => (
          <MaxItem
            key={option}
            active={filters?.[filter] === option || (option === 'default' && (filters?.[filter] === 'default' || !filters?.[filter]))}
            onClick={() => handleChangeFilters(filter, option)}
          >
            {option === 'default' ? `${parseValue(options[i - 1])}+` : parseValue(option)}
          </MaxItem>
        ))}
      </MaxItemContainer>
    </MaxFilterContainer>
  )
}
