import React, { useEffect } from 'react'
import AOS from 'aos'
import { Routes, Route } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import Header from './components/Header/Header'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        })
    }, [])

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
