import { FC } from 'react'

interface TitleProps {
  text: string
  color: string
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return <h3 className={`text-${color} text-2xl uppercase mb-6`}>{text}</h3>
}

export default Title
