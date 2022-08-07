import { render, screen } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

test('should render notFoundPage', () => {
  render(<NotFoundPage />)
  const expected = screen.getByText('NotFoundPage')
  expect(expected).toBeInTheDocument()
})
