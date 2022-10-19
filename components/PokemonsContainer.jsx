import { PokemonCard } from './PokemonCard'
import { nanoid } from 'nanoid'

export const PokemonsContainer = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data?.results.map((pokemon) => (
        <PokemonCard
          key={nanoid()}
          number={pokemon.id}
          name={pokemon.name}
          types={pokemon.type}
          picture={pokemon.picture}
        />
      ))}
    </div>
  )
}
