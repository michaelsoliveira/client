import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Router } from 'next/router'
import Layout from '../components/Layout'
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react'

import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     window.FB.init({
  //       appId            : process.env.FACEBOOK_CLIENT_ID,
  //       autoLogAppEvents : true,
  //       xfbml            : true,
  //       version          : 'v12.0'
  //     });
  //   };
  // })
  
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AuthProvider>
          <Layout>
          <ToastContainer />
            <Component {...pageProps} />  
            {/* <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></Script> */}
            </Layout>
          </AuthProvider>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
