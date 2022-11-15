import React, { cloneElement, useEffect, useState } from 'react'

import { SpinnerLoader } from '../../../src/components/SpinnerLoader'
import settings from '../../config'

export const SubdomainComponent = (props) => {
  const [checkState, setCheckState] = useState({ loading: true, result: null, error: null })

  const projectFromSubdomain = window.location.hostname.split('.').slice(0, 1).join()
  const isValidSubdomain = window.location.hostname.includes('tryordering.com') || window.location.hostname.includes('ordering.co')

  let project = settings?.project
  if (settings?.use_project_subdomain) {
    if (!settings?.use_project_domain || isValidSubdomain) {
      project = projectFromSubdomain
    }
  }

  if (settings?.use_project_domain) {
    if (!settings?.use_project_subdomain || !isValidSubdomain) {
      project = '_'
    }
  }

  const checkProject = async () => {
    try {
      const response = await fetch(`${settings?.api?.url}/${settings?.api?.version}/system/integrations/projects/check_availability?project_code=${project}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const { error, result } = await response.json()

      setCheckState({
        ...checkState,
        loading: false,
        result: error ? [] : result,
        error: error
          ? typeof result === 'string' ? result : result?.[0]
          : null
      })
    } catch (error) {
      setCheckState({
        ...checkState,
        loading: false,
        error: error.message
      })
    }
  }

  useEffect(() => {
    checkProject()
  }, [])

  return (
    checkState.loading
      ? <SpinnerLoader />
      : cloneElement(props.children, {
        settings: { ...settings, project }
      })
  )
}
