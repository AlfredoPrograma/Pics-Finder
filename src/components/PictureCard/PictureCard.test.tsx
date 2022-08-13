import { render, screen } from '@testing-library/react'
import PictureCard from './PictureCard'

const MOCK_SRC = 'https://hatrabbits.com/wp-content/uploads/2017/0(1/random.jpg'

describe('picture card', () => {
  test('renders component', () => {
    render(<PictureCard src={MOCK_SRC} />)

    const renderedComponent = screen.getByRole('figure')
    expect(renderedComponent).toBeInTheDocument()
  })

  test('renders component with big size', () => {
    render(<PictureCard src={MOCK_SRC} size='big' />)

    const renderedComponent = screen.getByRole('figure')
    expect(renderedComponent).toHaveClass('row-span-2 col-span-2')
  })

  test('renders loading skeleton', () => {
    render(<PictureCard src={MOCK_SRC} />)

    const renderedComponent = screen.getByTestId('loadingSkeletonComponent')
    expect(renderedComponent).toBeInTheDocument()
  })
})
