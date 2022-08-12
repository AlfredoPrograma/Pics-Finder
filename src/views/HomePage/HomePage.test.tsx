import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('home page component', () => {
  beforeEach(() => {
    render(<HomePage />)
  })

  test('renders home page header', () => {
    const renderedHeader = screen.getByText(/pics-finder/i)
    expect(renderedHeader).toBeInTheDocument()
  })

  test('render home page form for pics grid', () => {
    const renderedForm = screen.getByRole('form')
    expect(renderedForm).toBeInTheDocument()
  })

  test('render form input for search pics', () => {
    const renderedInput = screen.getByRole('textbox')
    expect(renderedInput).toBeInTheDocument()
  })

  test('render form button for search pics', () => {
    const renderedButton = screen.getByRole('button')
    expect(renderedButton).toBeInTheDocument()
  })

  test('render pics grid component', () => {
    const renderedComponent = screen.getByTestId('picsGridComponent')
    expect(renderedComponent).toBeInTheDocument()
  })
})
