import { MainTitle } from './MainTitle'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-center object-fill">
      <MainTitle bold>Pokedex</MainTitle>
      <SearchBar />
    </div>
  )
}
