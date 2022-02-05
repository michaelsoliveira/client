import { ReactNode, useContext } from "react"
import Navigation from './Navigation'
import Footer from './Footer'

export type props = {
    children: ReactNode
}

const Layout = ({ children }: props) => {
    
    return (
        <div className="content font-roboto">
            <Navigation />
                {children}
            <Footer />
        </div>
    )
}

export default Layout