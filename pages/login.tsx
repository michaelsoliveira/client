import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Login from '../components/Login'
import { getCsrfToken } from 'next-auth/react'
const Pagelogin = ({ csrfToken }: any) => {

  const router = useRouter()
  
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-12 border rounded-md shadow-2xl">
          <Login csrfToken={csrfToken} />
        </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  return {
    props: {
      csrfToken: await getCsrfToken(ctx)
    },
  }
}

export default Pagelogin