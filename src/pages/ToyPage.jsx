import { useEffect } from 'react'
import ToyPage from '../components/ToyPage/ToyPage'

export default function ToyPagee() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <ToyPage />
            </div>
        </>
    )
}
