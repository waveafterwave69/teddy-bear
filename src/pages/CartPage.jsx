import { useEffect } from 'react'
import CartPagee from '../components/CartPagee/CartPagee'

export default function CartPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container" style={{ marginTop: '30px' }}>
                <CartPagee />
            </div>
        </>
    )
}
