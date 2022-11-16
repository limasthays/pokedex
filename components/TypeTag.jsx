import classNames from 'classnames'

export const TypeTag = ({ children, type }) => {
  const borderClasses = {
    bug: 'border-type-bug',
    dragon: 'border-type-dragon',
    fairy: 'border-type-fairy',
    fire: 'border-type-fire',
    ghost: 'border-type-ghost',
    ground: 'border-type-ground',
    normal: 'border-type-normal',
    psychic: 'border-type-psychic',
    steel: 'border-type-steel',
    dark: 'border-type-dark',
    electric: 'border-type-electric',
    fight: 'border-type-fight',
    flying: 'border-type-flying',
    grass: 'border-type-grass',
    ice: 'border-type-ice',
    poison: 'border-type-poison',
    rock: 'border-type-rock',
    water: 'border-type-water',
  }

  return (
    <span
      className={classNames(
        'border rounded p-0.5 font-bold text-subtitle text-neutral-black mr-2',
        borderClasses[type]
      )}
    >
      {children}
    </span>
  )
}
