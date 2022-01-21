/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Link } from './Link'
import Logo from './Logo'

import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
    BellIcon,
    ClipboardListIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { AuthContext } from '../contexts/AuthContext'


const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const { isAuthenticated, loggedUser, signOut } = useContext(AuthContext)

    const resources = [
    {
        name: 'Cadastro da Empresa',
        description: 'Informações da Empresa',
        href: '/empresa',
        icon: ClipboardListIcon,
    },
    {
        name: 'Cadastro da UMF',
        description: 'Unidade de Manejo Florestal',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Cadastro de UPA',
        description: 'Unidade de Produção Anual',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Cadastro de UT',
        description: 'Unidade de Trabalho',
        href: '#',
        icon: CalendarIcon,
        }    
    
    ]
    const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
    ]

    const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
    ]

    const navigation = [
        { name: 'Dashboard', href: '/', current: true, visible: true, subMenu: false, subMenuItems: [] },
        { name: 'Cadastro', href: '#', current: false, visible: !!isAuthenticated, subMenu: true, subMenuItems: resources },
        { name: 'Soluções', href: '#', current: false, visible: true, subMenu: true, subMenuItems: solutions },
        { name: 'Planejamento', href: '#', current: false, visible: !!isAuthenticated, subMenuItems: [] },
        { name: 'Relatórios', href: '#', current: false, visible: !!isAuthenticated, subMenu: false, subMenuItems: [] }
    ]

    const userNavigation = [
        { name: 'Perfil', href: '#', click: () => { alert("teste1") } },
        { name: 'Settings', href: '#', click: () => {} },
        { name: 'Logout', href: '#', click: signOut },
    ]
    return (
        <Disclosure as="nav" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center justify-between max-w-full w-full">
                    <div className="flex-shrink-0 lg:-mr-16">
                        <Logo width='w-10' height='h-10' />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">

                    {navigation.map((item, key) => (
                        item.visible && (!item.subMenu  ?
                          (<Link
                            key={key}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border-b-2 border-green-700 text-gray-700 bg-gray-100'
                                : 'text-gray-700 hover:border-b-2 hover:border-green-700 hover:text-green-800 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105',
                              'px-6 py-2 text-sm font-medium hover:bg-gray-100 in-line flex'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                        </Link>) :
                        (<Menu as="div" className="relative inline-block text-left ">
                            {({ open }) => (
                        <>
                        <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-b-2 hover:border-green-700 hover:text-green-800 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105">
                            {item.name}
                            <ChevronDownIcon
                                className={classNames(
                                    open ? 'text-green-700' : 'text-gray-400',
                                    'w-5 h-5 ml-2 -mr-1'
                                )}
                                aria-hidden="true"
                            />
                            
                        </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="z-30 absolute w-96 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.subMenuItems.map((subMenu, key) =>
                            (<div className='px-2 py-2' key={key}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href={subMenu.href}
                                            className={classNames(
                                                active ? 'bg-gray-100' : 'text-gray-800',
                                                'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                                            )}
                                        >
                                            {subMenu?.icon && (
                                                <subMenu.icon className="flex-shrink-0 h-6 w-6 text-green-700" aria-hidden="true" />
                                            )}
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">{subMenu.name}</p>
                                                {subMenu?.description && (
                                                    <p className="mt-1 text-sm text-gray-500">{subMenu?.description}</p>
                                                )}
                                            </div>
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>  
                        ))}
                    </Menu.Items>
                </Transition>
                </>
            )}
    
            </Menu>
            ))))
                
            }
            </div>
                        
            </div>
                <div className='hidden md:block'>
                    {!isAuthenticated && (
                    <div className="px-2">
                        <Link href="/login" className="block bg-green-700 shadow hover:border-b-2 hover:border-green-700 text-sm px-6 py-2 
                        text-white rounded-md hover:text-white transition duration-500 ease-in-out hover:bg-green-600
                        transform hover:-translate-y-1 hover:scale-105">
                            Login
                        </Link>            
                    </div>            
                )}
                </div>
                
                </div>
                {isAuthenticated && (<div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    <button
                    type="button"
                    className="bg-gray-200 p-1 rounded-full text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                    >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button className="max-w-xs bg-gray-700 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item, key) => (
                            <Menu.Item key={key}>
                            {({ active }) => (
                                <a
                                href={item.href}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}
                                onClick={item.click}
                                >
                                {item.name}
                                </a>
                            )}
                            </Menu.Item>
                        ))}
                        </Menu.Items>
                        
                    </Transition>
                    </Menu>
                </div>
                </div>
                )}
                <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                </Disclosure.Button>
                </div>
            </div>
            </div>

            <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, key) => (
                item.visible &&
                (!item.subMenu ?    
                    (<Disclosure.Button
                    key={key}
                    as="a"
                    href={item.href}
                    className={classNames(
                    item.current ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-green-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium transition-all'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>) :
                    (<Popover as="div" className="w-full">
                            {({ open }) => (
                        <>
                        <div>
                        <Popover.Button className="inline-flex w-full rounded-md px-3 py-2 font-medium text-gray-700 hover:text-white transition duration-500 ease-in-out hover:bg-green-700">
                            {item.name}
                            {open ? (
                            <ChevronUpIcon
                                className={classNames(
                                    open ? 'text-gray-400' : 'text-gray-400',
                                    'w-5 h-5 ml-4 -mr-1'
                                )}
                                aria-hidden="true"
                            />                    
                            ) : (
                                <ChevronDownIcon
                                className={classNames(
                                    open ? 'text-gray-400' : 'text-gray-400',
                                    'w-5 h-5 ml-4 -mr-1'
                                )}
                                aria-hidden="true"
                            />                    
                            )}
                            
                        </Popover.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                        <Popover.Panel className="z-30 relative lg:right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.subMenuItems.map((subMenu, key) =>
                            (<div className='px-2 py-2' key={key}>
                                <Link
                                    href={subMenu.href}
                                    className={classNames(
                                        'hover:bg-gray-100',
                                        'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                                    )}
                                >
                                    {subMenu?.icon && (
                                        <subMenu.icon className="flex-shrink-0 h-6 w-6 text-green-700" aria-hidden="true" />
                                    )}
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{subMenu.name}</p>
                                        {subMenu?.description && (
                                            <p className="mt-1 text-sm text-gray-500">{subMenu?.description}</p>
                                        )}
                                    </div>
                                </Link>

                            </div>  
                        ))}
                    </Popover.Panel>
                </Transition>
                </>
            )}
    
            </Popover>
            ))))}
                        
            </div>
            {isAuthenticated ? (
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                    <div className="ml-3">
                        <div className="text-base font-medium leading-none text-gray-600">{loggedUser?.username}</div>
                        <div className="text-sm font-medium leading-none text-gray-400">{loggedUser?.email}</div>
                    </div>
                    <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item, key) => (
                    <Link
                        key={key}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-green-700"
                        onClick={item.click}
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>
            </div>
            ) : (
                <div className="px-3 pb-2 -mt-1">
                    <Link href="/login" className="block px-2 py-2 rounded-md text-base text-gray-700 hover:text-white hover:bg-green-700 hover:transition-all">Login</Link>            
                </div>            
            )}
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  )
}
