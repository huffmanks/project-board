import { useGlobal } from '../../../context/GlobalContext'

import { MdMoreHoriz } from 'react-icons/md'

import IconButton from '../../common/IconButton'
import Chip from '../../common/Chip'

const Footer = () => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        footer: sideBarExpanded ? 'justify-between pr-4' : 'justify-center',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
    }

    return (
        <div className={`relative flex items-center gap-1 mt-auto mb-2 transition-all ease-in-out duration-400 delay-150 ${styles.footer}`}>
            <div className={`flex items-center gap-3 transition-opacity ease-in-out duration-400 delay-150 ${styles.display}`}>
                <IconButton icon='MdBubbleChart' buttonSize='normal' bgColor='blue' iconColor='white' />

                <div>
                    <div className='flex gap-2'>
                        <div className='text-sm'>Alireza Kian</div>
                        <Chip text='Free' size='small' color='green' />
                    </div>
                    <div className='text-gray-600 text-xs'>alirezakian.me</div>
                </div>
            </div>

            <div className='w-6 flex justify-center items-center text-lg cursor-pointer'>
                <IconButton icon='MdMoreHoriz' buttonSize='normal' bgColor='transparent' iconColor='white' />
            </div>
        </div>
    )
}

export default Footer
