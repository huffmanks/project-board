import Notifications from './Notifications'
import Search from './Search'
import Timer from './Timer'

const AppBar = () => {
    return (
        <header className='w-full py-4 px-5 sm:px-8 md:pl-9 flex justify-between items-center gap-6 xl:gap-10 bg-[#030e1e]'>
            <Timer />
            <Search />
            <Notifications />
        </header>
    )
}

export default AppBar
