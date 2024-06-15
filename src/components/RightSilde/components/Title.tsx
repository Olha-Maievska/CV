import { FC } from 'react'

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="text-gold sm:text-blue text-xl md:text-2xl uppercase mb-4 md:mb-8 font-oswald border-b border-gold sm:border-blue pb-4 md:pb-6 text-center md:text-left">
      {text}
    </h3>
  )
}

export default Title
