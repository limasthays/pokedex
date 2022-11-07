import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

export const SelectPagination = () => {
  const { limit, setLimit } = useContext(PokemonsContext)

  return (
    <select
      name="pagination"
      className="w-max"
      onChange={(event) => {
        setLimit(parseInt(event.target.value))
      }}
      value={limit}
    >
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="48">48</option>
    </select>
  )
}
