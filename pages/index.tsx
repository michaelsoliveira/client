
import { Fragment, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { saveProject, reset, selectProject, ProjectState } from '../store/projectSlice'
import { Link } from '../components/Link'
import Image from 'next/image'
import { RegisterForm } from '../components/RegisterForm'
import Login from '../components/Login'
import { getSession, useSession } from 'next-auth/react'
import AlertService from '../services/alert'
import Tabs from '../components/Tabs'
import Logo from '../components/Logo'

const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500',
  errorMsg: 'text-red-500 text-sm',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ localSession }: any) {
  const dispatch = useAppDispatch()
  const selectedProject = useAppSelector(selectProject)
  const [project, setProject] = useState<ProjectState>()
  const [showLogin, setShowLogin] = useState(false)
  const client = useContext(AuthContext)
  const { data: session } = useSession()
  const messageState = useAppSelector(state => state.message)

  useEffect(() => {
    
  }, [session, client]);
  

  return (
    
    <div className="min-h-full">
      <div className="relative flex flex-row overflow-hidden">
        <div className="mt-10 px-12 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-20 xl:mt-12">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-16">
          
            <div className="sm:text-center lg:text-left">
              {!showLogin && (
                <div>
                  <h1 className="flex flex-col text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-6xl lg:text-4xl xl:text-4xl">
                  <span className="block xl:inline">BOManejo Web</span>{' '}
                  <span className="block text-green-600 xl:inline">Inventário Florestal</span>
                </h1>
                <p className="font-roboto mt-3 text-justify text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0 mb-4">
                  O setor florestal brasileiro precisa – e demanda – de softwares que agilizem e aprimorem o processo de planejamento
                  florestal, auxiliando na seleção de árvores de corte com base em critérios claros, proporcionando melhor controle
                    sobre a produção de madeira e possibilitando o manejo florestal sustentável.
                  </p>
              </div>
              )}
            <div className='w-full'>
              {
                  !localSession ? (
                    <Tabs />
                    //   showLogin ? (
                    //     <div className='w-96'><Login parentShowLogin={callbackShowLogin} /></div>
                    //   ) :
                    // <RegisterForm parentShowLogin={callbackShowLogin} styles={styles} />
                  ) : (
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        Iniciar
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                        onClick={() => {}}    
                      >
                        Tutorial
                      </a>
                    </div>
                  </div>
                )
              }   
              </div>
            </div>
          
        </div>
      </div>
      <div className="hidden lg:ml-0 lg:flex mt-6 lg:flex-col lg:items-center lg:inset-y-0 my-auto mr-20 rounded-tr-xl
                lg:pr-20 lg:w-3/5 xl:w-2/5 bg-gradient-to-tr from-white via-white to-green-500">
          <div className='flex flex-row'>
        <div className='relative mb-10 pt-8'>
          <Logo width='w-24' height='h-24'/>
          </div>
          <div className='relative right-75 opacity-75 mb-8 pt-8'>
          <Logo width='w-24' height='h-24'/>
          </div>
          <div className='relative right-0 opacity-50 mb-4 pt-10 -rotate-12'>
          <Logo width='w-24' height='h-24'/>
        </div>
        <div className='relative right-0 opacity-25 mb-2 pt-16 rotate-12'>
          <Logo width='w-24' height='h-24'/>
        </div>
          
          </div>
        <Image
            className="object-cover object-center"
            src="/web_devices.svg"
            alt=""
            width='1024px'
            height='768px'
        />
      </div>
    </div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const session = await getSession(ctx)
  
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: {
      localSession: session
    }
  }
}

