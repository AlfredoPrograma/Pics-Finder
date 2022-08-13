import classNames from 'classnames'
import { useState } from 'react'

interface PictureCardProps {
  src: string;
  id?: number;
  size?: 'small' | 'big';
}

const PictureCard = ({ src, size = 'small' }: PictureCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleLoadImage = () => setIsLoading(false)

  return (
    <figure
      className={classNames('grid w-full h-full shadow-lg', {
        'row-span-2 col-span-2': size === 'big'
      })}
    >
      <div
        data-testid='loadingSkeletonComponent'
        className={classNames('w-full min-h-[350px] bg-slate-200 animate-pulse', {
          hidden: !isLoading,
          'row-span-2 col-span-2': size === 'big'

        })}
      />
      <img
        src={src}
        className={classNames('h-full w-full object-cover', {
          hidden: isLoading
        })}
        onLoad={handleLoadImage}
      />
    </figure>
  )
}

export default PictureCard
