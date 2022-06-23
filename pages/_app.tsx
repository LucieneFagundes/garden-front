import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Dashboard } from '../components/Dashboard'

function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return <Dashboard/>
}

export default MyApp
