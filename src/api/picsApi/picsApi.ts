import { AxiosRequestConfig } from 'axios'
import { PicturesApiResponse } from 'types/pictures/PicturesApiResponse'
import api from '../api'

const picsApiConfig: AxiosRequestConfig = {
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY as string
  }
}

const fetchRecommendedPictures = async (page: number = 1) => (await api.get<PicturesApiResponse>(`/curated?page=${page}`, picsApiConfig)).data
const fetchPicturesByKeyword = async (keyword: string, page = 1) => (
  (await api.get<PicturesApiResponse>(`/search?query=${keyword}&page=${page}`, picsApiConfig)).data
)

export { fetchRecommendedPictures, fetchPicturesByKeyword }
