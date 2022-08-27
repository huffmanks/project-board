import { MdOutlineFilterAlt, MdOutlineFileUpload } from 'react-icons/md'

const icons = {
    MdOutlineFilterAlt,
    MdOutlineFileUpload,
}

const Button = ({ icon, bgColor, textColor, text }) => {
    const Icon = icons[icon]

    const styles = {
        bg: {
            transparent: 'transparent hover:bg-gray-800/50',
            frost: 'bg-gray-600/30 shadow shadow-gray-800',
            blue: 'bg-sky-500 shadow shadow-sky-500',
            dark: 'bg-gray-800/50',
        },
        color: {
            blue: 'text-sky-500',
            category: 'group-hover:text-sky-500',
        },
    }

    return (
        <button className={`group max-w-max flex items-center justify-center gap-2 py-2 px-4 rounded-full hover:scale-[1.02] ${styles.bg[bgColor]} ${!textColor && 'hover:opacity-90'}`}>
            {icon && <Icon className='fill-white' />}
            <span className={`text-sm ${textColor && styles.color[textColor]}`}>{text}</span>
        </button>
    )
}

export default Button
