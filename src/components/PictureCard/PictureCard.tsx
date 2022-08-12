import classNames from 'classnames'

interface PictureCardProps {
  src: string,
  id?: number,
  size?: 'small' | 'big'
}

const PictureCard = ({ src, size = 'small' }: PictureCardProps) => {
  return (
    <figure className={classNames('w-full h-full shadow-lg', {
      'row-span-2 col-span-2': size === 'big'
    })}>
      <img src={src} className='h-full w-full object-cover' />
    </figure>
  )
}

export default PictureCard
