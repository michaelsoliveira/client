import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Router } from 'next/router'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={ store }>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
