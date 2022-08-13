import { screen, render } from '@testing-library/react'
import { Picture } from 'types/pictures/Picture'
import PicsGrid from './PicsGrid'

const MOCK_PICTURES: Picture[] = [
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
]

describe('pics grid', () => {
  test('renders component', () => {
    render(<PicsGrid pictures={MOCK_PICTURES} isLoading={false} />)

    const renderedComponent = screen.getByTestId('picsGridComponent')
    expect(renderedComponent).toBeInTheDocument()
  })

  test('renders two pictures cards', () => {
    render(<PicsGrid pictures={MOCK_PICTURES} isLoading={false} />)

    const renderedPicturesAmount = screen.getAllByRole('figure')
    expect(renderedPicturesAmount.length).toBe(2)
  })

  test('renders not found pictures error', () => {
    const MOCK_EMPTY_PICTURES: Picture[] = []

    render(<PicsGrid pictures={MOCK_EMPTY_PICTURES} isLoading={false} />)

    const renderedError = screen.getByTestId('notFoundPicsErrorComponent')
    expect(renderedError).toBeInTheDocument()
  })
})
