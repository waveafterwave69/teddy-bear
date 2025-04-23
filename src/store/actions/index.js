export const setPersonToFav = (person) => ({
    type: 'ADD_TO_CART',
    payload: person,
})

export const removePersonToFav = (personId) => ({
    type: 'REMOVE_TO_CART',
    payload: personId,
})
