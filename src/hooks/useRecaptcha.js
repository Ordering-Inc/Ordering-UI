import { useEffect, useState } from 'react'
import { useConfig, useLanguage, useToast, ToastType } from 'ordering-components'

/**
 * Hook to mangage Recaptcha version
 * @param {boolean} enableRecaptcha
 */
export const useRecaptcha = (enableRecaptcha) => {
  const [{ configs }] = useConfig()
  const [reCaptchaConfig, setRecaptchaConfig] = useState({ version: 'v3', siteKey: '' })
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && enableRecaptcha && reCaptchaConfig?.siteKey === '') {
      if (configs?.security_recaptcha_type?.value === 'v3' &&
        configs?.security_recaptcha_score_v3?.value > 0 &&
        configs?.security_recaptcha_site_key_v3?.value
      ) {
        setRecaptchaConfig({
          version: 'v3',
          siteKey: configs?.security_recaptcha_site_key_v3?.value,
          error: false
        })
        return
      }
      if (configs?.security_recaptcha_site_key?.value) {
        setRecaptchaConfig({
          version: 'v2',
          siteKey: configs?.security_recaptcha_site_key?.value,
          error: false
        })
        return
      }
      showToast(ToastType.Error, t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key'))
    }
  }, [configs, enableRecaptcha])

  return [reCaptchaConfig]
}
