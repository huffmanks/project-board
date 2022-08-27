import { createContext, useContext, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

const GlobalContext = createContext({})

const GlobalContextProvider = ({ children }) => {
    const searchInputRef = useRef(null)

    const [sideBarExpanded, setSideBarExpanded] = useState(true)

    useHotkeys('ctrl+k, cmd+k', (e) => {
        e.preventDefault()
        searchInputRef.current.focus()
    })

    const handleSidebar = () => {
        setSideBarExpanded((prev) => !prev)
    }

    const contextValue = {
        searchInputRef,
        sideBarExpanded,
        handleSidebar,
    }

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

export default GlobalContextProvider

export const useGlobal = () => {
    return useContext(GlobalContext)
}
