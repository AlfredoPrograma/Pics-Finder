import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from 'views/HomePage'
import { NotFoundPage } from 'views/NotFoundPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
