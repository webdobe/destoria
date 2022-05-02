import { FunctionComponent } from "react"
import s from './styles'

interface ILayout {
    children: JSX.Element
}

const Layout: FunctionComponent<ILayout> = function ({children}) {
    return (
        <main {...s.main}>
            {children}
        </main>
    )
}


export default Layout