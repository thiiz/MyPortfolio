import { FC } from 'react'
import { FiLoader } from 'react-icons/fi'

export const Spin: FC<{ size?: string }> = ({ size = 'text-lg' }) => {
  return (
    <span className={`${size} inline-block origin-center animate-spin transition-all duration-700`}>
      <FiLoader />
    </span>
  )
}