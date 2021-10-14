import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider, session } from 'next-auth/client'

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
