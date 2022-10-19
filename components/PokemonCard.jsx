import Image from 'next/image'
import { Subtitle01 } from './Subtitle01'
import plus from '../public/icons/plus.svg'
import favorite from '../public/icons/favorite.svg'
import { BodyFont03 } from './BodyFont03'
import { TypeButton } from './TypeButton'
import { nanoid } from 'nanoid'

export const PokemonCard = ({ number, name, types, picture }) => {
  return (
    <div
      key={nanoid()}
      className={`grow 
      w-2/5 sm:w-1/4 lg:w-custom 
      rounded-lg border border-type-${types[0]} 
      bg-gradient-to-br from-type-${types[0]}
      `}
    >
      <div className="p-3 flex flex-col">
        <div className="flex justify-between items-center">
          <Subtitle01 bold>#0{number}</Subtitle01>
          <div className="h-6 text-neutral-500">
            <Image src={plus} alt="add icon" />
            <Image src={favorite} alt="favorite icon" />
          </div>
        </div>

        <div className="self-center">
          <Image src={picture} alt={`${name} image`} width={104} height={104} />
        </div>
        <BodyFont03>{name}</BodyFont03>
      </div>
      <div className="bg-white rounded-b-lg p-2">
        {types?.map((type) => (
          <TypeButton key={nanoid()}>{type}</TypeButton>
        ))}
      </div>
    </div>
  )
}
