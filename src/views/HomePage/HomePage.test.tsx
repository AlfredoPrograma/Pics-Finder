import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

test('renders home page', () => {
  render(<HomePage />)
  const expected = screen.getByText('HomePage')
  expect(expected).toBeInTheDocument()
})
