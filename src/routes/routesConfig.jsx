import MainPage from '../pages/MainPage'
import CartPage from '../pages/CartPage'

const routesConfig = [
    {
        path: '/',
        element: <MainPage />,
        name: 'Home',
    },
    {
        path: '/cart',
        element: <CartPage />,
        name: 'Cart',
    },
]

export default routesConfig
