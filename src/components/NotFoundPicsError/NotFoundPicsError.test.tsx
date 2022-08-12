import { render, screen } from '@testing-library/react'
import NotFoundPicsError from './NotFoundPicsError'

describe('NotFoundPicsError component', () => {
  test('render component', () => {
    render(<NotFoundPicsError />)

    const renderedComponent = screen.getByText(/Not pictures found! Try with another keyword/i)
    expect(renderedComponent).toBeInTheDocument()
  })
})
