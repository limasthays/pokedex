import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

export const PokemonsContext = createContext({})

export const PokemonsProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(12)
  const [aux, setAux] = useState(0)

  const getPokemons = async () =>
    await (
      await fetch(
        `http://pokedex.jhonnymichel.com/pokemon/?offset=${offset}&limit=${limit}`
      )
    ).json()

  const { data, isLoading, isError } = useQuery(
    ['pokemons', offset, limit],
    getPokemons
  )

  return (
    <PokemonsContext.Provider
      value={{
        data,
        isLoading,
        isError,
        limit,
        setLimit,
        offset,
        setOffset,
        aux,
        setAux,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}
