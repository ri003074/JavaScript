import { MyUserContext } from '../UserContext'

function MyApp({ Component, pageProps}){

    const data = [{a:"b"},{a:"x"}]
    const DataContext = React.createContext("")

    return (
        <MyUserContext.Provider value={data}>
            <Component {...pageProps} />
        </MyUserContext.Provider>

    )
    
}

export default MyApp