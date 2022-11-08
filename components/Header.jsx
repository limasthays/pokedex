import { Heading01 } from './Heading01'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-center object-fill">
      <Heading01 bold>Pokedex</Heading01>
      <SearchBar />
    </div>
  )
}
