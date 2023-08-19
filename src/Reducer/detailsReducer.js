const initialState = {
    name: "",
    age: ""
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }

}