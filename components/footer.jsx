import Image from 'next/image'
import pokeball from '../public/icons/pokeball.svg'

export const Footer = () => {
  return (
    <div>
      <button>
        <Image src={pokeball} alt="pokeball icon" />
      </button>
    </div>
  )
}
