// @ts-nocheck
import Navigation from "./Navigation"

const  Layout=({children})=>{
    return(
        <>  
            <Navigation/>
            <main className="page">{children}</main>
        </>
    )
}
export default Layout;