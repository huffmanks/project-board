import { useGlobal } from '../../../context/GlobalContext'
import { routes } from '../../../constants/routes'

import Link from './Link'

const Menu = () => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        menu: sideBarExpanded ? 'px-4' : '',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
        nav: sideBarExpanded ? '' : 'items-center',
    }
    return (
        <div className={`transition-all ease-in-out duration-400 delay-150 ${styles.menu}`}>
            <div className='w-max text-xs uppercase font-bold mb-4'>
                <span className={`text-gray-600 transition-opacity ease-in-out duration-100 ${styles.display}`}>Main </span>
                <span className='text-gray-600'>Menu</span>
            </div>
            <nav className={`flex flex-col gap-5 mb-8 ${styles.nav}`}>
                {routes.map((link, i) => (
                    <Link key={i} link={link} />
                ))}
            </nav>
        </div>
    )
}

export default Menu
