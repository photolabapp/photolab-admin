import React from 'react'
const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, ...action.payload }
        default:
            return state

    }
}