import { render, screen, waitFor } from '@testing-library/react'
import PicsGrid from './PicsGrid'

describe('pics grid component', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  test('renders component', () => {
    render(<PicsGrid />)

    const expected = screen.getByTestId('picsGridComponent')
    expect(expected).toBeInTheDocument()
  })

  test('renders 15 recommended pictures', async () => {
    render(<PicsGrid />)

    const expected = await waitFor(() => screen.getAllByRole('figure'))

    expect(expected).toHaveLength(15)
  })

  test('renders 15 pictures found by keyword', async () => {
    const SEARCH_VALUE = 'dogs'
    render(<PicsGrid searchValue={SEARCH_VALUE} />)

    const expected = await waitFor(() => screen.getAllByRole('figure'))

    expect(expected).toHaveLength(15)
  })

  test('renders not found pictures error', async () => {
    render(<PicsGrid searchValue='randomKeywordThatWillBeNotFound' />)

    const expected = await waitFor(() => screen.getByTestId('notFoundPicsErrorComponent'))

    expect(expected).toBeInTheDocument()
  })
})
