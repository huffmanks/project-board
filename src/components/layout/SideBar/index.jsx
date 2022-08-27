import { useGlobal } from '../../../context/GlobalContext'

import Expand from './Expand'
import Footer from './Footer'
import Logo from './Logo'
import Menu from './Menu'
import Workspaces from './Workspaces'

const SideBar = () => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        sidebar: sideBarExpanded ? 'w-11/12 xs:w-72 bg-gradient-to-br' : 'w-16 sm:w-20 bg-gradient-to-b',
    }

    return (
        <aside className={`fixed z-30 from-[#031634] to-[#04000d] top-0 bottom-0 left-0 transition-all ease-linear duration-150 ${styles.sidebar}`}>
            <div className={`relative flex flex-col h-full p-4 ${!sideBarExpanded && 'items-center'}`}>
                <Expand />

                <Logo />

                <Menu />

                <Workspaces />

                <Footer />
            </div>
        </aside>
    )
}

export default SideBar
