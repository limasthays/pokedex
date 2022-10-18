import Head from 'next/head'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { MainContainer } from '../components/MainContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poketati</title>
      </Head>

      <MainContainer>
        <Header />
        <Filter />
      </MainContainer>
    </>
  )
}
