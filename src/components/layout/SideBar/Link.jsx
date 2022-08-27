import { useGlobal } from '../../../context/GlobalContext'

import { MdDashboard, MdAnalytics, MdTimer, MdChat, MdGroups, MdSettings } from 'react-icons/md'

const icons = { MdDashboard, MdAnalytics, MdTimer, MdChat, MdGroups, MdSettings }

const Link = ({ link }) => {
    const { sideBarExpanded } = useGlobal()

    const Icon = icons[link.icon]

    const styles = {
        display: sideBarExpanded ? 'opacity-1 visible duration-400 delay-150' : 'absolute opacity-0 invisible duration-100',
        iconColor: link.isActive ? 'fill-sky-600' : 'fill-gray-600',
        linkColor: link.isActive ? 'text-sky-600' : '',
    }

    return (
        <a className='flex justify-between items-center gap-1 group' href={link.path}>
            <div className='flex items-center gap-3 text-sm'>
                <Icon className={`text-2xl group-hover:fill-sky-500 ${styles.iconColor}`} />
                <span className={`w-max group-hover:text-sky-500 transition-opacity ease-in-out ${styles.display} ${styles.linkColor}`}>{link.label}</span>
            </div>

            <div className={`w-5 h-5 flex justify-center items-center bg-gray-600/30 text-[10px] leading-none rounded-md transition-all ease-in-out group-hover:bg-sky-500 ${styles.display}`}>
                <span>{link.short}</span>
            </div>
        </a>
    )
}

export default Link
