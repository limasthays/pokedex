import Head from 'next/head'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { MainContainer } from '../components/MainContainer'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { PokemonsContainer } from '../components/PokemonsContainer'

const getPokemons = async () =>
  await (
    await fetch('http://pokedex.jhonnymichel.com/pokemon?offset=0&limit=12')
  ).json()

export default function Home() {
  const { data, isLoading, isError } = useQuery('pokemons', getPokemons)

  return (
    <>
      <Head>
        <title>Poketati</title>
      </Head>

      <MainContainer>
        <Header />
        <Filter />
        <PokemonsContainer data={data} />
      </MainContainer>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('pokemons', getPokemons)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
