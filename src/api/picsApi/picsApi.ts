import { AxiosRequestConfig } from 'axios'
import { PicturesApiResponse } from 'types/pictures/PicturesApiResponse'
import api from '../api'

const picsApiConfig: AxiosRequestConfig = {
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY as string
  }
}

const fetchRecommendedPictures = async () => (await api.get<PicturesApiResponse>('/curated', picsApiConfig)).data
const fetchPicturesByKeyword = async (keyword: string) => (
  (await api.get<PicturesApiResponse>(`/search?query=${keyword}`, picsApiConfig)).data
)

export { fetchRecommendedPictures, fetchPicturesByKeyword }
