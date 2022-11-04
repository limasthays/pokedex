import classNames from 'classnames'

export const TypeButton = ({ children, type }) => {
  function borderClasses(type) {
    return classNames({
      'border-type-bug': type === 'bug',
      'border-type-dragon': type === 'dragon',
      'border-type-fairy': type === 'fairy',
      'border-type-fire': type === 'fire',
      'border-type-ghost': type === 'ghost',
      'border-type-ground': type === 'ground',
      'border-type-normal': type === 'normal',
      'border-type-psychic': type === 'psychic',
      'border-type-steel': type === 'steel',
      'border-type-dark': type === 'dark',
      'border-type-electric': type === 'electric',
      'border-type-fight': type === 'fight',
      'border-type-flying': type === 'flying',
      'border-type-grass': type === 'grass',
      'border-type-ice': type === 'ice',
      'border-type-poison': type === 'poison',
      'border-type-rock': type === 'rock',
      'border-type-water': type === 'water',
    })
  }

  return (
    <span
      className={`border rounded p-0.5
      ${borderClasses(type)}
      font-bold text-subtitle
     text-neutral-black mr-2`}
    >
      {children}
    </span>
  )
}
