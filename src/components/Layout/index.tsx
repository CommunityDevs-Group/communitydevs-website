import type { ReactNode } from "react"
import Footer from "./Footer"
interface LayoutProps{
    children:ReactNode;
}
const Layout = ({children}:LayoutProps)=>{
    return(
        <div>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
export default Layout