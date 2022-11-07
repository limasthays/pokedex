import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

export const PokemonsContext = createContext({})

export const PokemonsProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(12)
  const [filterType, setFilterType] = useState('')
  const [searchName, setSearchName] = useState('')

  const getPokemons = async () => {
    if (searchName !== '') {
      return await (
        await fetch(
          `http://pokedex.jhonnymichel.com/pokemon/?search=${searchName}&limit=${limit}`
        )
      ).json()
    } else {
      return await (
        await fetch(
          `http://pokedex.jhonnymichel.com/pokemon/?offset=${offset}&limit=${limit}&type=${filterType}`
        )
      ).json()
    }
  }

  const { data, isLoading, error, isError } = useQuery(
    ['pokemons', offset, limit, filterType, searchName],
    getPokemons
  )

  return (
    <PokemonsContext.Provider
      value={{
        data,
        isLoading,
        error,
        isError,
        limit,
        setLimit,
        offset,
        setOffset,
        filterType,
        setFilterType,
        searchName,
        setSearchName,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}
