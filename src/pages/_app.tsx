import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import "../styles/style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Head>
          <title>Takumi Joba</title>
          <link rel="icon" href='/img/Avatar.png'/>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  )
}