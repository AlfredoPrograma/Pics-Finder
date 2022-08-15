import { Container } from 'components/Container'
import { PicsGrid } from 'components/PicsGrid'
import { FormEvent, useRef, useState } from 'react'

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchPictures = (event: FormEvent) => {
    event.preventDefault()
    if (!inputRef.current) return
    setSearchValue(inputRef.current?.value)
  }

  return (
    <Container customStyles="pt-12 md:pt-24 pb-12 flex flex-col gap-8">
      <header className="text-center flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-blue-500">Pics-Finder</h1>
        <h2 className="text-2xl">Find any pics you want!</h2>
      </header>
      <form
        role='form'
        className="flex justify-center items-center"
        onSubmit={handleSearchPictures}
      >
        <input
          ref={inputRef}
          placeholder="Keywords to search pics"
          className="md:w-1/2 px-4 py-3 border-2 border-r-0 rounded-r-none border-gray-700 rounded-lg focus:outline-none"
          type="text"
        />
        <button className="px-5 py-3 bg-blue-500 text-white border-2 border-l-0 border-gray-700 rounded-r-lg hover:bg-blue-600 transition-colors">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <PicsGrid searchValue={searchValue} />
    </Container>
  )
}

export default HomePage
