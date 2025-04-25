import MaingPage from './pages/MainPage'

import { Routes, Route } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import Header from './components/Header/Header'

function App() {
    return (
        <>
            <Header />
            <Routes>
                {routesConfig.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App
