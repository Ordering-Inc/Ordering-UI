import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from 'ordering-components'
import { PageNotFound } from '../../PageNotFound'

export const ProtectedRoute = (props) => {
  const {
    path,
    allowedLevels
  } = props

  const [{ auth, user }] = useSession()

  return (
    <Route exact path={path}>
      {auth ? (
        <>
          {allowedLevels.includes(user?.level) ? (
            props.children
          ) : (
            <PageNotFound />
          )}
        </>
      ) : (
        <Redirect to='/login' />
      )}
    </Route>
  )
}
