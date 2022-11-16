import { PokemonCard } from './PokemonCard'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'
import Image from 'next/image'

export const PokemonsContainer = () => {
  const { data, isLoading, error } = useContext(PokemonsContext)

  const pokemonsList = data?.results

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  if (pokemonsList.length === 0) {
    return (
      <>
        <div style={{ width: '50%', height: '250px', position: 'relative' }}>
          <p>no more results :(</p>
          <Image
            src="https://media.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif"
            alt="sad pikachu with no results :("
            layout="fill"
            objectFit="none"
          />
        </div>
      </>
    )
  }

  return (
    <div
      className="flex flex-wrap 
      justify-center lg:justify-between 
      gap-4"
    >
      {pokemonsList?.map((pokemon) => (
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
