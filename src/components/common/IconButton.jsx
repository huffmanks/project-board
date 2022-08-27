import {
    MdBubbleChart,
    MdMoreHoriz,
    MdTimer,
    MdPause,
    MdRestartAlt,
    MdSearch,
    MdOutlineMicNone,
    MdChatBubbleOutline,
    MdOutlineAreaChart,
    MdOutlineNotificationsNone,
    MdStarBorder,
    MdErrorOutline,
    MdGraphicEq,
    MdAdd,
    MdOutlineCalendarToday,
} from 'react-icons/md'

import { GiLightBulb, GiPalette, GiFlashlight, GiPartyPopper } from 'react-icons/gi'

const icons = {
    MdBubbleChart,
    MdMoreHoriz,
    MdTimer,
    MdPause,
    MdRestartAlt,
    MdSearch,
    MdOutlineMicNone,
    MdChatBubbleOutline,
    MdOutlineAreaChart,
    MdOutlineNotificationsNone,
    MdStarBorder,
    MdErrorOutline,
    MdGraphicEq,
    MdAdd,
    MdOutlineCalendarToday,
    GiLightBulb,
    GiPalette,
    GiFlashlight,
    GiPartyPopper,
}

const IconButton = ({ icon, buttonSize, borderType, bgColor, iconColor, isStackable, hasBadge }) => {
    const Icon = icons[icon]

    const styles = {
        size: {
            small: 'w-6 h-6',
            normal: 'w-10 h-10 text-xl',
            large: 'w-12 h-12 text-3xl',
        },
        border: {
            dashed: 'border-dashed border-2 border-sky-500',
        },
        bg: {
            transparent: 'transparent',
            gray: 'bg-slate-800',
            frost: 'bg-gray-600/30',
            blue: 'bg-sky-500',
            purple: 'bg-purple-500',
        },
        icon: {
            white: 'fill-white',
            red: 'fill-red-500',
            orange: 'fill-orange-500',
            yellow: 'fill-yellow-500',
            green: 'fill-green-500',
            blue: 'fill-sky-300',
            purple: 'fill-purple-500',
        },
    }

    return (
        <>
            <div
                className={`relative flex justify-center items-center rounded-full cursor-pointer hover:opacity-70 ${styles.size[buttonSize]} ${styles.border[borderType]} ${styles.bg[bgColor]} ${
                    isStackable && '-mt-2 sm:mt-0'
                }`}>
                <Icon className={styles.icon[iconColor]} />
                {hasBadge && (
                    <div className='absolute -top-1 -right-1 w-4 h-4 flex justify-center items-center bg-red-500 rounded-full'>
                        <span className='text-xs'>4</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default IconButton
