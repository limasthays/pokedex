import { PokemonCard } from './PokemonCard'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

export const PokemonsContainer = () => {
  const { data, isLoading, error } = useContext(PokemonsContext)

  const pokemonsList = data?.results

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  } else if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  } else {
    return (
      <div
        className="flex flex-wrap 
      justify-center lg:justify-between 
      gap-6"
      >
        {pokemonsList.map((pokemon) => (
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
}
