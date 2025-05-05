import { configureStore } from '@reduxjs/toolkit'
import storeSlice from './slices/storeSlice'

export const store = configureStore({
    reducer: {
        store: storeSlice,
    },
})
