import { FilterButton } from './FilterButton'

export const Filter = () => {
  return (
    <div
      className="
    overflow-auto
    p-3
     
    flex
    gap-2"
    >
      <FilterButton title="bug" />
      <FilterButton title="dragon" />
      <FilterButton title="fairy" />
      <FilterButton title="fire" />
      <FilterButton title="ghost" />
      <FilterButton title="ground" />
      <FilterButton title="normal" />
      <FilterButton title="psychic" />
    </div>
  )
}
