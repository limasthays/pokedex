import { dehydrate, QueryClient, useQuery } from 'react-query'
import { FilterButton } from './FilterButton'
import { nanoid } from 'nanoid'

const getPokemonTypes = async () =>
  await (await fetch('http://pokedex.jhonnymichel.com/type')).json()

export const Filter = () => {
  const { data, isLoading, isError } = useQuery('poketypes', getPokemonTypes)

  return (
    <div className="overflow-auto flex gap-2">
      {data?.results.map((type) => {
        return <FilterButton key={nanoid()} title={type.name} />
      })}
    </div>
  )
}
