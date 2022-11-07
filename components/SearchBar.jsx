import Image from 'next/future/image'
import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'
import searchIcon from '../public/icons/search.svg'

export const SearchBar = () => {
  const { searchName, setSearchName } = useContext(PokemonsContext)

  const handleSearchName = (event) => {
    event.preventDefault()
    const query = event.target.value.toLowerCase()

    if (query.length >= 3) {
      setSearchName(query)
    }
    if (query === '') {
      setSearchName('')
    }
  }

  return (
    <div className="flex justify-between rounded-lg border-neutral-100 border-2 p-3.5">
      <input
        type="search"
        onChange={(event) => handleSearchName(event)}
        className="placeholder:text-neutral-500 placeholder:text-sm"
        placeholder="Search..."
      />

      <Image src={searchIcon} className="inline" alt="search icon" />
    </div>
  )
}
