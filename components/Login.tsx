import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { api } from '../services/api';
import { LockClosedIcon } from '@heroicons/react/solid'
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';
import Logo from '../components/Logo'

// import { userService } from 'services';

export default Login;

function Login({ location, parentShowLogin }: any) {
  
  function hideLoginPage() {
    parentShowLogin(false)
  }
    const router = useRouter();
    const { signIn, setLoggedUser } = useContext(AuthContext)

    useEffect(() => {
        // redirect to home if already logged in
        const { 'x-access-token': token } = parseCookies()
      
      if (token) {
        router.push('/')
      }

    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit({ email, password }: any) {
      if (router.pathname == '/') hideLoginPage()
      await signIn({ email, password })
      
    }

  return (
          <div>
              <div className="flex flex-col items-center">
                {router.pathname == '/' && (
                    <div className='absolute left-0 -mt-6 hover:cursor-pointer' onClick={hideLoginPage}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-green-700 hover:stroke-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                  </div>
                )}
              <div>
                <Logo width='w-24' height='h-24'/>
              </div>
          <div className='w-48'>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
        </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" method='POST'>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                          </label>
                <input
                    {...register('email')}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                    {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
            <button
                disabled={formState.isSubmitting}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
      </form>
    </div>
  )
}
