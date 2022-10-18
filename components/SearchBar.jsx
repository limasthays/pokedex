import Image from 'next/future/image'
import searchIcon from '../public/icons/search.svg'

export const SearchBar = () => {
  return (
    <div className="flex justify-between rounded-lg border-neutral-100 border-2 p-3.5">
      <input
        type="text"
        name="search"
        className="placeholder:text-neutral-500 placeholder:text-sm"
        placeholder="Search..."
      />

      <Image src={searchIcon} className="inline" alt="search icon" />
    </div>
  )
}
