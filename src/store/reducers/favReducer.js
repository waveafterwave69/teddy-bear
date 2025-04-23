import { omit } from 'lodash'
const initialState = {}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                ...action.payload,
            }

        case 'REMOVE_TO_CART':
            return omit(state, [action.payload])

        default:
            return state
    }
}

export default cartReducer
