import { NotFoundPicsError } from 'components/NotFoundPicsError'
import { PictureCard } from 'components/PictureCard'
import { Picture } from 'types/pictures/Picture'

interface PicsGridProps {
  pictures: Picture[],
  isLoading?: boolean
}

const PicsGrid = ({ pictures, isLoading }: PicsGridProps) => {
  return (
    <section data-testid='picsGridComponent'>
      {
        !pictures.length && !isLoading
          ? <NotFoundPicsError />
          : <div className='grid grid-cols-3 auto-rows-fr gap-4 grid-flow-dense'>
        { pictures.map(({ id, src }, index) => <PictureCard key={id} src={src.large2x} size={index % 5 === 0 ? 'big' : 'small' } />) }
      </div>
      }
    </section>
  )
}

export default PicsGrid
