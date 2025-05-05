import { createSlice } from '@reduxjs/toolkit'
import { json } from '../../api/data'

const initialState = () => {
    try {
        const storedState = localStorage.getItem('reduxState')
        if (storedState) {
            return JSON.parse(storedState)
        }
    } catch (e) {
        console.error('Error loading state from localStorage:', e)
    }
    return {
        store: JSON.parse(json),
    }
}

const storeSlice = createSlice({
    name: 'store',
    initialState: initialState(),
    reducers: {
        addItem: (state, action) => {
            state.store.catalogs[action.payload - 1].count++
            state.store.catalogs[action.payload - 1].startPrice += Number(
                state.store.catalogs[action.payload - 1].price
            )

            localStorage.setItem('reduxState', JSON.stringify(state))
        },
        minusItem: (state, action) => {
            state.store.catalogs[action.payload - 1].count--
            state.store.catalogs[action.payload - 1].startPrice -= Number(
                state.store.catalogs[action.payload - 1].price
            )

            localStorage.setItem('reduxState', JSON.stringify(state))
        },
        removeItem: (state, action) => {
            state.store.catalogs[action.payload - 1].count = 0

            state.store.catalogs[action.payload - 1].startPrice = 0

            localStorage.setItem('reduxState', JSON.stringify(state))
        },
        setStore: (state, action) => {
            localStorage.setItem('reduxState', JSON.stringify(state))
        },
    },
})

export const { addItem, minusItem, removeItem, setStore } = storeSlice.actions

export default storeSlice.reducer
