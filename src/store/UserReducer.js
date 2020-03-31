import React from 'react'
const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, user: action.payload }
        default:
            return state

    }
}