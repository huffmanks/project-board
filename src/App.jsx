import GlobalContextProvider from './context/GlobalContext'

import Layout from './components/layout'
import Buckets from './components/Buckets'

const App = () => {
    return (
        <GlobalContextProvider>
            <Layout>
                <Buckets />
            </Layout>
        </GlobalContextProvider>
    )
}

export default App
