import Image from 'next/image'
import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

import arrowBack from '../public/icons/arrow-back.svg'
import arrowForward from '../public/icons/arrow-forward.svg'

export const PageButtons = () => {
  const { setOffset, offset, limit, data } = useContext(PokemonsContext)

  const backPage = () => {
    if (offset > 0) {
      setOffset(offset - limit)
    }
  }

  const nextPage = () => {
    if (offset < data.count && limit < data.count) {
      setOffset(offset + limit)
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          backPage()
        }}
        disabled={offset === 0 ? true : false}
      >
        <Image src={arrowBack} alt="pagination button forward" />
      </button>

      <button
        onClick={() => {
          nextPage()
        }}
      >
        <Image src={arrowForward} alt="pagination button forward" />
      </button>
    </div>
  )
}
