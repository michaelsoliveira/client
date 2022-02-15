import { ReactNode, useContext, SVGProps } from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import { useSession, signOut } from "next-auth/react"
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

export type props = {
    children: ReactNode
}

    const resources = [
    {
        name: 'Empresa',
        description: 'Informações da Empresa',
        href: '/empresa',
        icon: ClipboardListIcon,
    },
    {
        name: 'UMF',
        description: 'Unidade de Manejo Florestal',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'UPA',
        description: 'Unidade de Produção Anual',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'UT',
        description: 'Unidade de Trabalho',
        href: '#',
        icon: CalendarIcon,
        },
    {
        name: 'Especies',
        description: 'Espécies Existentes',
        href: '/especie',
        icon: ClipboardListIcon,
        // subResource: [
        //     {
        //         name: 'Categoria de Espécies',
        //         description: 'Categoria de Espécies',
        //         href: '/categoria-especie',
        //         icon: ClipboardListIcon,
        //     }
        // ]
    },
    {
        name: 'Categoria de Espécies',
        description: 'Categoria de Espécies',
        href: '/categoria-especie',
        icon: ClipboardListIcon,
    }
    
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

const Layout = ({ children }: props) => {
    const { data: session, status } = useSession()

    const defaultNavigation = [
        { name: 'Dashboard', href: '/', current: false, visible: true, subMenu: false, subMenuItems: [] },
        { name: 'Cadastro', href: '#', current: false, visible: !!session, subMenu: true, subMenuItems: resources },
        { name: 'Soluções', href: '#', current: false, visible: true, subMenu: true, subMenuItems: solutions },
        { name: 'Planejamento', href: '/overview', current: false, visible: !!session, subMenu: false, subMenuItems: [] },
        { name: 'Relatórios', href: '#', current: false, visible: !!session, subMenu: false, subMenuItems: [] }
    ]

    const userNavigation = [
        { name: 'Perfil', href: '#' },
        { name: 'Alterar Senha', href: '/user/change-password' },
        { name: 'Logout', href: '#', click: () => signOut() },
    ]

    return (
        <div className="content font-roboto">
            <Navigation
                session={session}
                defaultNavigation={defaultNavigation}
                userNavigation={userNavigation}
            />
                {children}
            <Footer />
        </div>
    )
}

export default Layout