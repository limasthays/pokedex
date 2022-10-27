import Image from 'next/image'
import { useContext } from 'react'
import { PokemonsContext } from '../contexts/pokemonsContext'

import arrowBack from '../public/icons/arrow-back.svg'
import arrowForward from '../public/icons/arrow-forward.svg'

export const PageButtons = () => {
  const {
    paginationValue,
    setPaginationValue,
    page,
    setPage,
    aux,
    setAux,
    data,
  } = useContext(PokemonsContext)

  const nextPage = () => {
    setAux(++aux)
    setPage(aux * paginationValue)
    console.log(aux, page, paginationValue)
  }

  return (
    <div>
      <button>
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
