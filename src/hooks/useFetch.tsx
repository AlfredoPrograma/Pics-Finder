import { useEffect, useState } from 'react'
import { ApiStatuses } from 'types/api/ApiStatuses'

interface useFetchOptions {
  dependencies?: unknown
  dispatcher?: boolean,
  autoInitialize: boolean,
}

const defaultUseFetchOptions: useFetchOptions = {
  autoInitialize: true
}

export const useFetch = <T, >(apiFn: () => Promise<T>, options: useFetchOptions = defaultUseFetchOptions) => {
  const { autoInitialize, dispatcher, dependencies } = options

  const [data, setData] = useState<T>()
  const [fetchStatus, setFetchStatus] = useState<ApiStatuses>('IDLE')

  useEffect(() => {
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

    if ((!data && autoInitialize) || dispatcher) {
      fetch()
    }
  }, [dependencies, autoInitialize])

  return { data, fetchStatus }
}
