import { NotFoundPicsError } from 'components/NotFoundPicsError'
import { PictureCard } from 'components/PictureCard'
import { useRef } from 'react'
import { usePicsGrid } from './hooks'

interface PicsGridProps {
  searchValue?: string,
}

const PicsGrid = ({ searchValue = '' }: PicsGridProps) => {
  const anchorLoadingRef = useRef(null)
  const { pictures, isSuccess, isError } = usePicsGrid(searchValue, anchorLoadingRef)

  return (
    <section className='relative' data-testid='picsGridComponent'>
      { isError && <h1 className='text-4xl text-red-500 text-center'>Oops. Something was wrong...</h1>}
      { !pictures.length && isSuccess && <NotFoundPicsError /> }
        <div className='grid grid-cols-3 auto-rows-fr gap-4 grid-flow-dense '>
          {
            pictures.map(({ id, src }, index) =>
              <PictureCard
                key={id}
                src={src.large2x}
                size={index % 5 === 0 ? 'big' : 'small' }
              />
            )
          }
        </div>

      { isSuccess && <div className='absolute bottom-1/4' ref={anchorLoadingRef}>Anchor element</div>}
    </section>
  )
}

export default PicsGrid
