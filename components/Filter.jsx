import { dehydrate, QueryClient, useQuery } from 'react-query'
import { FilterButton, FilterButtonAll } from './FilterButton'
import { nanoid } from 'nanoid'

const getPokemonTypes = async () =>
  await (await fetch('http://pokedex.jhonnymichel.com/type')).json()

export const Filter = () => {
  const { data, isLoading, isError } = useQuery('poketypes', getPokemonTypes)

  return (
    <div className="overflow-auto flex gap-2">
      <FilterButtonAll>all</FilterButtonAll>
      {data?.results.map((type) => {
        return (
          <FilterButton key={nanoid()} value={type.name}>
            {type.name}
          </FilterButton>
        )
      })}
    </div>
  )
}
