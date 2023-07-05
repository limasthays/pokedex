import '../styles/globals.css'
import { useRef } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { PokemonsProvider } from '../contexts/pokemonsContext'

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient.current}>
      <PokemonsProvider>
        
          <Component {...pageProps} />
        
      </PokemonsProvider>
    </QueryClientProvider>
  )
}

export default MyApp
