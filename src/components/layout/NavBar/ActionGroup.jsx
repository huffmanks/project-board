import { useGlobal } from '../../../context/GlobalContext'
import { profiles } from '../../../constants/profiles'

import Button from '../../common/Button'
import IconButton from '../../common/IconButton'
import Profile from '../../common/Profile'

const ActionGroup = () => {
    const { sideBarExpanded } = useGlobal()

    const styles = {
        group: sideBarExpanded ? 'xl:flex-row xl:items-center' : 'lg:flex-row lg:items-center',
        title: sideBarExpanded ? 'md:flex-row md:items-center' : 'sm:flex-row sm:items-center',
        options: sideBarExpanded ? 'lg:flex-row' : 'md:flex-row',
    }

    return (
        <div className={`flex flex-col gap-y-4 gap-x-8 mb-6 ${styles.group}`}>
            <div className={`flex flex-col gap-2 mb-2 lg:mb-0 ${styles.title}`}>
                <div className='text-3xl sm:mr-2'>Project Board</div>

                <div className='flex gap-2'>
                    <IconButton icon='MdStarBorder' buttonSize='normal' bgColor='frost' iconColor='orange' />
                    <IconButton icon='MdErrorOutline' buttonSize='normal' bgColor='frost' iconColor='white' />
                    <IconButton icon='MdGraphicEq' buttonSize='normal' bgColor='frost' iconColor='white' />
                </div>
            </div>

            <div className={`flex flex-col gap-y-4 gap-x-6 ${styles.options}`}>
                <div className='flex flex-col xs:flex-row xs:items-center gap-3 mb-2 md:mb-0'>
                    <div className='flex flex-wrap mt-2 sm:mt-0'>
                        {profiles.map((profile, i) => (
                            <Profile key={i} profile={profile} direction='top' />
                        ))}
                        <IconButton icon='MdAdd' buttonSize='normal' borderType='dashed' bgColor='gray' iconColor='blue' isStackable />
                    </div>
                </div>

                <div className='flex flex-col xs:flex-row gap-2'>
                    <Button icon='MdOutlineFilterAlt' bgColor='frost' text='Filter &amp; Sort' />
                    <Button icon='MdOutlineFileUpload' bgColor='blue' text='Export CSV' />
                </div>
            </div>
        </div>
    )
}

export default ActionGroup
