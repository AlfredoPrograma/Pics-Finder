import { fetchRecommendedPictures, fetchPicturesByKeyword } from 'api/picsApi'
import { useFetch } from 'hooks/useFetch'
import { useEffect, useMemo, useState } from 'react'
import { Picture } from 'types/pictures/Picture'
import { PicturesApiResponse } from 'types/pictures/PicturesApiResponse'

const HomePageController = () => {
  const [currentPictures, setCurrentPictures] = useState<Picture[]>([])
  const [keyword, setKeyword] = useState<string>('')

  const dispatcher = !!useMemo(() => keyword, [keyword])

  const { data: recommendedPictures, fetchStatus: fetchRecommendedPicturesStatus } = useFetch<PicturesApiResponse>(fetchRecommendedPictures)
  const { data: picturesByKeyword, fetchStatus: fetchImagesByKeywordStatus } =
    useFetch<PicturesApiResponse>(() => fetchPicturesByKeyword(keyword), {
      autoInitialize: false,
      dispatcher,
      dependencies: keyword
    })

  const isLoadingPictures = fetchRecommendedPicturesStatus === 'LOADING' || fetchImagesByKeywordStatus === 'LOADING'

  useEffect(() => {
    fetchRecommendedPicturesStatus === 'DONE' && setCurrentPictures(recommendedPictures!.photos)
  }, [fetchRecommendedPicturesStatus])

  useEffect(() => {
    fetchImagesByKeywordStatus === 'DONE' &&
      setCurrentPictures(picturesByKeyword!.photos)
  }, [fetchImagesByKeywordStatus])

  const handleSearch = (keyword?: string) => {
    setKeyword(keyword ?? '')
  }

  return {
    pictures: currentPictures,
    handleSearch,
    isLoadingPictures
  }
}

export default HomePageController
