import React, { useEffect, useState } from 'react'
import { useApi } from 'ordering-components'
import { PagesListContainer, Line } from './styles'

export const PagesList = ({ routes }) => {
  const [ordering] = useApi()
  const [roots, setRoots] = useState(routes)

  useEffect(() => {
    getPages()
  }, [])

  const getPages = async () => {
    try {
      const { response } = await ordering.pages().get()
      setRoots([...roots, ...response.data.result])
      console.log(response.data.result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PagesListContainer>
      <h2>Ordering Site Map</h2>
      <Line />
      {roots.map((route, i) => (
        <span key={i}>
          <a href={route?.id ? `pages/${route.slug}` : route.slug}>{route.name}</a>
        </span>
      ))}
    </PagesListContainer>
  )
}
