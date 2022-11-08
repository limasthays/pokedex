import Image from 'next/image'
import { Subtitle01 } from './Subtitle01'
import plus from '../public/icons/plus.svg'
import favorite from '../public/icons/favorite.svg'
import { BodyFont03 } from './BodyFont03'
import { TypeButton } from './TypeButton'
import { nanoid } from 'nanoid'
import classNames from 'classnames'

export const PokemonCard = ({ number, name, types, picture }) => {
  function cardClasses(type) {
    return classNames({
      'border-type-bug from-type-bug': type === 'bug',
      'border-type-dragon from-type-dragon': type === 'dragon',
      'border-type-fairy from-type-fairy': type === 'fairy',
      'border-type-fire from-type-fire': type === 'fire',
      'border-type-ghost from-type-ghost': type === 'ghost',
      'border-type-ground from-type-ground': type === 'ground',
      'border-type-normal from-type-normal': type === 'normal',
      'border-type-psychic from-type-psychic': type === 'psychic',
      'border-type-steel from-type-steel': type === 'steel',
      'border-type-dark from-type-dark': type === 'dark',
      'border-type-electric from-type-electric': type === 'electric',
      'border-type-fight from-type-fight': type === 'fight',
      'border-type-flying from-type-flying': type === 'flying',
      'border-type-grass from-type-grass': type === 'grass',
      'border-type-ice from-type-ice': type === 'ice',
      'border-type-poison from-type-poison': type === 'poison',
      'border-type-rock from-type-rock': type === 'rock',
      'border-type-water from-type-water': type === 'water',
    })
  }

  return (
    <div
      key={nanoid()}
      className={` 
      flex flex-col
      justify-between
      max-w-[45%] sm:w-[30%] lg:w-custom
      rounded-lg border 
      bg-gradient-to-br 
      ${cardClasses(types[0])}
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
          <Image src={picture} alt={`${name} image`} width={160} height={160} />
        </div>
        <BodyFont03>{name}</BodyFont03>
      </div>
      <div className="bg-white rounded-b-lg p-1.5">
        {types?.map((type) => (
          <TypeButton key={nanoid()} type={type}>
            {type}
          </TypeButton>
        ))}
      </div>
    </div>
  )
}
