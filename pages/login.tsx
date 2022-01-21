import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useContext, useEffect } from 'react';
import Login from '../components/Login'
import { AuthContext } from '../contexts/AuthContext';

const Pagelogin = () => {

  const router = useRouter()
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
      // redirect to home if already logged in
      if (isAuthenticated) {
        router.push('/')
      }

    }, [isAuthenticated]);
  
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-12 border rounded-md shadow-2xl">
          <Login />
        </div>
    </div>
  )
}

export default Pagelogin