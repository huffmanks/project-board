import { useGlobal } from '../../../context/GlobalContext'

import { MdArrowDropDown } from 'react-icons/md'

const Workspace = ({ space }) => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        display: sideBarExpanded ? 'opacity-1 visible duration-400 delay-150' : 'absolute opacity-0 invisible duration-10',
        dotSize: sideBarExpanded ? 'mr-3' : 'mx-1.5',
        pink: 'bg-pink-500',
        blue: 'bg-blue-500',
        red: 'bg-red-500',
    }

    return (
        <div className='flex justify-between gap-1 cursor-pointer group'>
            <div className='flex items-center'>
                <div className={`w-2 h-2 rounded-full ${styles.dotSize} ${styles[space.color]}`}></div>
                <div className={`text-sm transition-opacity ease-in-out group-hover:text-sky-500 ${styles.display}`}>{space.label}</div>
            </div>

            <div className={`w-6 flex justify-center items-center text-lg transition-opacity ease-in-out ${styles.display}`}>
                <MdArrowDropDown className='fill-gray-400 group-hover:fill-sky-500' />
            </div>
        </div>
    )
}

export default Workspace
