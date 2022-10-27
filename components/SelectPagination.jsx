import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

export const SelectPagination = () => {
  const { setPaginationValue, page, paginationValue } =
    useContext(PokemonsContext)

  return (
    <select
      name="pagination"
      className="w-max"
      onChange={(event) => {
        setPaginationValue(parseInt(event.target.value))
      }}
    >
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="48">48</option>
    </select>
  )
}
