import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

export const PokemonsContext = createContext({})

export const PokemonsProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(12)
  const [filterType, setFilterType] = useState('')

  const getPokemons = async () =>
    await (
      await fetch(
        `http://pokedex.jhonnymichel.com/pokemon/?offset=${offset}&limit=${limit}&type=${filterType}`
      )
    ).json()

  const { data, isLoading, error, isError } = useQuery(
    ['pokemons', offset, limit, filterType],
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
        filterType,
        setFilterType,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}
