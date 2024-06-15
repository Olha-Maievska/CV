import { FC } from 'react'

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="text-gold text-xl md:text-2xl uppercase mb-6 font-oswald">
      {text}
    </h3>
  )
}

export default Title
