import MainPage from '../pages/MainPage'
import CartPage from '../pages/CartPage'
import ToyPagee from '../pages/ToyPage'

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
    {
        path: '/:id',
        element: <ToyPagee />,
        name: 'Cart',
    },
]

export default routesConfig
