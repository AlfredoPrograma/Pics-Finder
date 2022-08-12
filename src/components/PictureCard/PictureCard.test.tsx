import { render, screen } from '@testing-library/react'
import PictureCard from './PictureCard'

describe('picture card', () => {
  test('renders component', () => {
    const MOCK_SRC = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'

    render(<PictureCard src={MOCK_SRC} />)

    const renderedComponent = screen.getByRole('figure')
    expect(renderedComponent).toBeInTheDocument()
  })

  test('renders component with big size', () => {
    const MOCK_SRC = 'https://hatrabbits.com/wp-content/uploads/2017/0(1/random.jpg'

    render(<PictureCard src={MOCK_SRC} size='big' />)

    const renderedComponent = screen.getByRole('figure')
    expect(renderedComponent).toHaveClass('row-span-2 col-span-2')
  })
})
