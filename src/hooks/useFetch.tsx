import { useEffect, useMemo, useState } from 'react'
import { ApiStatuses } from 'types/api/ApiStatuses'

interface useFetchOptions {
  dispatcher?: boolean,
  autoInitialize: boolean,
}

const defaultUseFetchOptions: useFetchOptions = {
  autoInitialize: true
}

export const useFetch = <T, >(apiFn: () => Promise<T>, options: useFetchOptions = defaultUseFetchOptions) => {
  const { autoInitialize, dispatcher } = options

  const [data, setData] = useState<T>()
  const [fetchStatus, setFetchStatus] = useState<ApiStatuses>('IDLE')

  const isIdle = useMemo(() => fetchStatus === 'IDLE', [fetchStatus])
  const isLoading = useMemo(() => fetchStatus === 'LOADING', [fetchStatus])
  const isError = useMemo(() => fetchStatus === 'ERROR', [fetchStatus])
  const isSuccess = useMemo(() => fetchStatus === 'DONE', [fetchStatus])

  const fetch = async () => {
    try {
      setFetchStatus('LOADING')

      const response = await apiFn()
      setData(response)

      setFetchStatus('DONE')
    } catch (err) {
      setFetchStatus('ERROR')
    }
  }

  useEffect(() => {
    if ((!data && autoInitialize) || dispatcher) {
      fetch()
    }
  }, [autoInitialize, dispatcher])

  return {
    data,
    isError,
    isIdle,
    isSuccess,
    isLoading
  }
}
