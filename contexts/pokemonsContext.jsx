import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

export const PokemonsContext = createContext({})

export const PokemonsProvider = ({ children }) => {
  const itemsPerPage = 12

  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(itemsPerPage)
  const [filterType, setFilterType] = useState('')
  const [searchName, setSearchName] = useState('')

  const getPokemons = async () => {
    if (searchName !== '') {
      return await (
        await fetch(
          `http://pokedex.jhonnymichel.com/pokemon/?offset=${offset}&limit=${limit}&search=${searchName}`
        )
      ).json()
    }

    return await (
      await fetch(
        `http://pokedex.jhonnymichel.com/pokemon/?offset=${offset}&limit=${limit}&type=${filterType}`
      )
    ).json()
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
