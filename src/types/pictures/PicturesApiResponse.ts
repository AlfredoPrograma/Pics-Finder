import { Picture } from './Picture'

export interface PicturesApiResponse {
  page: number,
  per_page: number,
  photos: Picture[],
  next_page: string,
  total_results: number
}
