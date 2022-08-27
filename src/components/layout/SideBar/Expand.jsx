import { useGlobal } from '../../../context/GlobalContext'

import { MdDoubleArrow } from 'react-icons/md'

const Expand = () => {
    const { sideBarExpanded, handleSidebar } = useGlobal()

    const styles = {
        circle: sideBarExpanded ? 'absolute top-[22px] -right-3 bg-gray-800 sm:bg-gray-600/30' : 'sm:absolute sm:top-5 sm:-right-4 bg-gray-600/30',
        icon: sideBarExpanded ? 'rotate-180' : 'rotate-0',
    }

    return (
        <div className={`w-7 h-7 flex justify-center items-center text-sm rounded-full cursor-pointer ${styles.circle}`} onClick={handleSidebar}>
            <MdDoubleArrow className={`fill-gray-400 transition-all ease-in duration-100 ${styles.icon}`} />
        </div>
    )
}

export default Expand
