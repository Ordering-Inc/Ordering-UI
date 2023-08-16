import React from 'react'
import { useLanguage } from 'ordering-components'
import { VaXMiCuentaContainer } from './styles'
import { Button } from './styles'

export const VaXMiCuenta = (props) => {
  const {
    defaultOptionsVaXMiCuenta,
    vaXMiCuenta,
    handleChangeVaXMiCuenta
  } = props

  const [, t] = useLanguage()
  return (
    <VaXMiCuentaContainer>
      <div>
        <h3>¿Deseas donar a <div> <img src='https://d2gjwc6pypyhyf.cloudfront.net/va-por-mi-cuenta.svg' /></div> ?</h3>
        <p>{t('VA_POR_MI_CUENTA', 'VA_POR_MI_CUENTA')} <a href={t('VA_POR_MI_CUENTA_URL', 'VA_POR_MI_CUENTA')} target='_blank'> {t('VA_POR_MI_CUENTA_URL_NAME', 'VA_POR_MI_CUENTA_URL_NAME')}</a></p>
        <div>
          {Object.values(defaultOptionsVaXMiCuenta?.donation_values[0]).map((value, index) => (
            <div key={index}>
              <Button
                value={value}
                isSelected={value === vaXMiCuenta.selectedOption.amount}
                onClick={() => handleChangeVaXMiCuenta(value, index)}
              >
                {value === 0 ? 'No Donar' : `$${value}`}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </VaXMiCuentaContainer>
  )
}
