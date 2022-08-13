import { fetchPicturesByKeyword, fetchRecommendedPictures } from './picsApi'
import { rest, RequestHandler } from 'msw'
import { setupServer } from 'msw/node'

const BASE_URL = 'https://api.pexels.com/v1'

const workerHandlers: RequestHandler[] = [
  rest.get(`${BASE_URL}/curated`, (req, res, ctx) => {
    return res(ctx.json([
      {
        id: 13146110,
        width: 2592,
        height: 3872,
        url: 'https://www.pexels.com/photo/pink-flamingos-on-brown-soil-13146110/',
        photographer: 'Kristian  Thomas',
        photographer_url: 'https://www.pexels.com/@kristian-thomas-200614366',
        photographer_id: 200614366,
        avg_color: '#403728',
        src: {
          original: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg',
          large2x: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&h=350',
          small: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/13146110/pexels-photo-13146110.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
        },
        liked: false,
        alt: 'Free stock photo of animal, bird, flamingo'
      },
      {
        id: 13145853,
        width: 3792,
        height: 5688,
        url: 'https://www.pexels.com/photo/a-carry-on-suitcase-sits-on-minimal-steps-13145853/',
        photographer: 'Andrew Neel',
        photographer_url: 'https://www.pexels.com/@andrew',
        photographer_id: 977589,
        avg_color: '#A8A59E',
        src: {
          original: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg',
          large2x: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&h=350',
          small: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
        },
        liked: false,
        alt: 'A carry-on suitcase sits on minimal steps'
      }
    ]))
  }),

  rest.get(`${BASE_URL}/search`, (req, res, ctx) => {
    return res(ctx.json([
      {
        id: 162140,
        width: 4275,
        height: 2539,
        url: 'https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/',
        photographer: 'Pixabay',
        photographer_url: 'https://www.pexels.com/@pixabay',
        photographer_id: 2659,
        avg_color: '#756246',
        src: {
          original: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg',
          large2x: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350',
          small: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
        },
        liked: false,
        alt: 'Duckling on Black Soil during Daytime'
      },
      {
        id: 660266,
        width: 3456,
        height: 5184,
        url: 'https://www.pexels.com/photo/depth-of-field-photography-of-mallard-duck-on-body-of-water-660266/',
        photographer: 'Aidan Jarrett',
        photographer_url: 'https://www.pexels.com/@aidanj',
        photographer_id: 205547,
        avg_color: '#80837E',
        src: {
          original: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg',
          large2x: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&h=350',
          small: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
        },
        liked: false,
        alt: 'Depth of Field Photography of Mallard Duck on Body of Water'
      }
    ]))
  })
]

const fakePicsServer = setupServer(...workerHandlers)

describe('pictures API layer', () => {
  beforeAll(() => fakePicsServer.listen())
  afterEach(() => fakePicsServer.resetHandlers())
  afterAll(() => fakePicsServer.close())

  test('returns recommended pictures array', async () => {
    const response = await fetchRecommendedPictures()
    expect(response).toHaveLength(2)
  })

  test('returns searched pictures by keyword', async () => {
    const KEYWORD = 'duck'
    const response = await fetchPicturesByKeyword(KEYWORD)

    expect(response).toHaveLength(2)
  })
})
