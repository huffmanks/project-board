import IconButton from '../../common/IconButton'

const Timer = () => {
    return (
        <div className='gap-6 items-center hidden lg:flex'>
            <div className='flex gap-2 items-center'>
                <div>
                    <IconButton icon='MdTimer' buttonSize='large' bgColor='transparent' iconColor='blue' />
                </div>
                <div>
                    <div className='text-sm text-gray-400'>Total:</div>
                    <div>02:38:24</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <IconButton icon='MdPause' buttonSize='normal' bgColor='frost' iconColor='red' />
                <IconButton icon='MdRestartAlt' buttonSize='normal' bgColor='frost' iconColor='white' />
            </div>
        </div>
    )
}

export default Timer
