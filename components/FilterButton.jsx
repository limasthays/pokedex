import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

export const FilterButton = ({ children, value }) => {
  const { setOffset, setLimit, setFilterType } = useContext(PokemonsContext)
  return (
    <button
      className="
      rounded border 
      border-neutral-300
      font-bold
      text-neutral-black 
      capitalize

      px-4
      py-2"
      value={value}
      onClick={(event) => {
        setFilterType(event.target.value)
        setOffset(0)
        setLimit(12)
      }}
    >
      {children}
    </button>
  )
}

export const FilterButtonAll = ({ children }) => {
  const { setOffset, setLimit, setFilterType } = useContext(PokemonsContext)

  return (
    <button
      className="
      rounded border 
      border-neutral-300
      font-bold
      text-neutral-black 
      capitalize

      px-4
      py-2"
      value=""
      onClick={(event) => {
        setFilterType(event.target.value)
        setOffset(0)
        setLimit(12)
      }}
    >
      {children}
    </button>
  )
}
