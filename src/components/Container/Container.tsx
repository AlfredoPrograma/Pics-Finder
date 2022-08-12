import classNames from 'classnames'
import { Children } from 'types/Children'

interface ContainerProps {
  children: Children,
  customStyles?: string
  testId?: string
}

const Container = ({ customStyles, children, testId }: ContainerProps) => {
  return (
    <div className={classNames('w-3/4 md:w-2/4 mx-auto', customStyles)}>
      { children }
    </div>
  )
}

export default Container
