import { useEffect } from 'react'
import CartPageEl from '../components/CartPageEl/CartPageEl'

export default function CartPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container" style={{ marginTop: '30px' }}>
                <CartPageEl />
            </div>
        </>
    )
}
