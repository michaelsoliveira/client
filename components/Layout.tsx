import { ReactNode, useContext } from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import { AuthContext } from "../contexts/AuthContext"

export type props = {
    children: ReactNode
}

const Layout = ({ children }: props) => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <div className="content font-roboto">
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}

export default Layout