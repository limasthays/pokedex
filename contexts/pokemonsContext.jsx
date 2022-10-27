import { createContext, useState } from 'react'
import { useQuery } from 'react-query'

export const PokemonsContext = createContext({})

export const PokemonsProvider = ({ children }) => {
  const [page, setPage] = useState(0)
  const [paginationValue, setPaginationValue] = useState(12)
  const [aux, setAux] = useState(0)

  const getPokemons = async () =>
    await (
      await fetch(
        `http://pokedex.jhonnymichel.com/pokemon/?offset=${page}&limit=${paginationValue}`
      )
    ).json()

  const { data, isLoading, isError } = useQuery(
    ['pokemons', page, paginationValue, aux],
    getPokemons
  )

  return (
    <PokemonsContext.Provider
      value={{
        data,
        isLoading,
        isError,
        paginationValue,
        setPaginationValue,
        page,
        setPage,
        aux,
        setAux,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}
