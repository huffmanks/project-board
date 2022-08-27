import IconButton from '../common/IconButton'
import Card from './Card'

const Bucket = ({ bucket }) => {
    const styles = {
        border: {
            orange: 'border-orange-500',
            yellow: 'border-yellow-500',
            green: 'border-green-500',
            purple: 'border-purple-500',
        },
    }
    return (
        <div className='w-full md:min-w-[350px] snap-center'>
            <div className={`flex items-center justify-between gap-2 mb-4 pb-4 border-b-4 ${styles.border[bucket.color]}`}>
                <div className='flex items-center gap-3'>
                    <IconButton icon={bucket.icon} buttonSize='normal' bgColor='frost' iconColor={bucket.color} />
                    <div className='flex items-center gap-2'>
                        <div className='text-sm'>{bucket.title}</div>
                        <div className='py-1 px-1.5 flex justify-center items-center bg-gray-600/30 text-[10px] leading-none rounded-md'>
                            <span>{bucket.total}</span>
                        </div>
                    </div>
                </div>
                <IconButton icon='MdAdd' buttonSize='small' bgColor='frost' iconColor='white' />
            </div>
            {bucket.cards.map((card, i) => (
                <Card key={i} card={card} />
            ))}
        </div>
    )
}

export default Bucket
