import { useRef, useEffect, useCallback } from 'react'

export const useIsMounted = () => {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  const mounted = useCallback(() => {
    return isMounted.current
  }, [])

  return mounted()
}
