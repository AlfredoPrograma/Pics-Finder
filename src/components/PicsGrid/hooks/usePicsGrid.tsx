import { fetchPicturesByKeyword, fetchRecommendedPictures } from 'api/picsApi'
import { Picture } from 'types/pictures/Picture'
import { PicturesApiResponse } from 'types/pictures/PicturesApiResponse'
import { RefObject, useEffect, useRef, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import { useIntersect } from 'hooks/useIntersect'

const usePicsGrid = (searchValue: string, anchorLoadingRef: RefObject<Element>) => {
  const isFirstLoad = useRef<boolean>(true)

  const [pictures, setPictures] = useState<Picture[]>([])
  const [page, setPage] = useState<number>(1)
  const [searchValueDispatcher, setSearchValueDispatcher] = useState<boolean>(false)
  const [intersectionDispatcher, setIntersectionDispatcher] = useState<boolean>(false)

  const { data, isLoading, isSuccess, isError } = useFetch<PicturesApiResponse>(() =>
    !searchValue ? fetchRecommendedPictures(page) : fetchPicturesByKeyword(searchValue, page),
  {
    autoInitialize: true,
    dispatcher: searchValueDispatcher || intersectionDispatcher
  })

  const entry = useIntersect(anchorLoadingRef, isSuccess)

  useEffect(() => {
    if (isSuccess) {
      isFirstLoad.current = false

      if (page === 1) setPictures(data!.photos)
      else setPictures(prevPictures => [...prevPictures, ...data!.photos])

      setSearchValueDispatcher(false)
      setIntersectionDispatcher(false)
    }
  }, [data])

  useEffect(() => {
    if (entry?.isIntersecting && !isFirstLoad.current) {
      setPage(prevPage => prevPage + 1)
      setIntersectionDispatcher(true)
    }
  }, [entry?.isIntersecting])

  useEffect(() => {
    if (!isFirstLoad.current) {
      setPage(1)
      setSearchValueDispatcher(true)
    }
  }, [searchValue])

  return { pictures, isLoading, isSuccess, isError }
}

export default usePicsGrid
