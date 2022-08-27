import { useGlobal } from '../../../context/GlobalContext'

import IconButton from '../../common/IconButton'

const Notifications = () => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        notifications: sideBarExpanded ? 'md:flex' : 'sm:flex',
    }

    return (
        <div className={`gap-2 hidden ${styles.notifications}`}>
            <IconButton icon='MdChatBubbleOutline' buttonSize='normal' bgColor='frost' iconColor='white' />
            <IconButton icon='MdOutlineAreaChart' buttonSize='normal' bgColor='frost' iconColor='white' />
            <IconButton icon='MdOutlineNotificationsNone' buttonSize='normal' bgColor='frost' iconColor='white' hasBadge />
        </div>
    )
}

export default Notifications
