import Head from 'next/head'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { MainContainer } from '../components/MainContainer'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { PokemonsContainer } from '../components/PokemonsContainer'

import { PaginationDiv } from '../components/PaginationDiv'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poketati</title>
      </Head>

      <MainContainer>
        <Header />
        <Filter />
        <PaginationDiv />
        <PokemonsContainer />
      </MainContainer>
    </>
  )
}

export async function getStaticProps() {
  const getPokemonTypes = async () =>
    await (await fetch('http://pokedex.jhonnymichel.com/type')).json()

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('poketypes', getPokemonTypes)

  return {
    props: {
      dehydratedState: {
        types: dehydrate(queryClient),
      },
    },
  }
}
