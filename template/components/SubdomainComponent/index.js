import { cloneElement } from 'react'
import settings from '../../config'

export const SubdomainComponent = (props) => {
  const projectFromSubdomain = window.location.hostname.split('.').slice(0, 1).join()
  const isValidSubdomain = window.location.hostname.includes('tryordering.com') || window.location.hostname.includes('ordering.co')

  let project = settings?.project
  if (settings?.use_project_subdomain && isValidSubdomain) {
    project = projectFromSubdomain
  }

  if (settings?.use_project_domain && !isValidSubdomain) {
    project = '_'
  }

  return (
    cloneElement(props.children, {
      settings: { ...settings, project }
    })
  )
}
