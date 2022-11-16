import Image from 'next/image'
import { Subtitle } from './Subtitle'
import plus from '../public/icons/plus.svg'
import favorite from '../public/icons/favorite.svg'
import { PokemonTitle } from './PokemonTitle'
import { TypeTag } from './TypeTag'
import { nanoid } from 'nanoid'
import classNames from 'classnames'

export const PokemonCard = ({ number, name, types, picture }) => {
  const [mainType] = types
  const cardClasses = {
    bug: 'border-type-bug from-type-bug',
    dragon: 'border-type-dragon from-type-dragon',
    fairy: 'border-type-fairy from-type-fairy',
    fire: 'border-type-fire from-type-fire',
    ghost: 'border-type-ghost from-type-ghost',
    ground: 'border-type-ground from-type-ground',
    normal: 'border-type-normal from-type-normal',
    psychic: 'border-type-psychic from-type-psychic',
    steel: 'border-type-steel from-type-steel',
    dark: 'border-type-dark from-type-dark',
    electric: 'border-type-electric from-type-electric',
    fight: 'border-type-fight from-type-fight',
    flying: 'border-type-flying from-type-flying',
    grass: 'border-type-grass from-type-grass',
    ice: 'border-type-ice from-type-ice',
    poison: 'border-type-poison from-type-poison',
    rock: 'border-type-rock from-type-rock',
    water: 'border-type-water from-type-water',
  }

  return (
    <div
      key={nanoid()}
      className={classNames(
        'flex flex-col justify-between max-w-[45%] sm:w-[30%] lg:w-custom rounded-lg border bg-gradient-to-br',
        cardClasses[mainType]
      )}
    >
      <div className="p-3 flex flex-col">
        <div className="flex justify-between items-center">
          <Subtitle bold>#0{number}</Subtitle>
          <div className="h-6 text-neutral-500">
            <Image src={plus} alt="add icon" />
            <Image src={favorite} alt="favorite icon" />
          </div>
        </div>

        <div className="self-center">
          <Image src={picture} alt={`${name} image`} width={160} height={160} />
        </div>
        <PokemonTitle>{name}</PokemonTitle>
      </div>
      <div className="bg-white rounded-b-lg p-1.5">
        {types?.map((type) => (
          <TypeTag key={nanoid()} type={type}>
            {type}
          </TypeTag>
        ))}
      </div>
    </div>
  )
}
