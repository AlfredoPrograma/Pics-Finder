import { NotFoundPicsError } from 'components/NotFoundPicsError'
import { PictureCard } from 'components/PictureCard'
import { Picture } from 'types/pictures/Picture'

interface PicsGridProps {
  pictures: Picture[]
}

const PicsGrid = ({ pictures }: PicsGridProps) => {
  return (
    <section data-testid='picsGridComponent'>
      {
        !pictures.length
          ? <NotFoundPicsError />
          : <div className='grid grid-cols-3 gap-4 grid-flow-dense'>
        { pictures.map(({ id, src }, index) => <PictureCard key={id} src={src.large2x} size={index % 5 === 0 ? 'big' : 'small' } />) }
      </div>
      }
    </section>
  )
}

export default PicsGrid
