import { Heading01 } from './Heading01'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row object-fill">
      <Heading01 bold>Pokedex</Heading01>
      <SearchBar />
    </div>
  )
}
